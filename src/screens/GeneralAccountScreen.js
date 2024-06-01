import {useState,useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";
import {ScrollView,FormControl,VStack,Text,Input,Button,useColorMode} from "@gluestack-ui/themed"

import {selectGeneral,readUserAsync,updateUserAsync} from "../redux/accountSlice";
import ColorModeBtn from '../components/ColorModeBtn';

const GeneralAccountScreen =()=>{
    const general=useSelector(selectGeneral);
    const [name,setName] =useState();
    const [email,setEmail]=useState();
    const [tel,setTel]=useState();
    const [loading,setLoading]=useState(true);
    const [isUpdating,setIsUpdating]=useState(false);


    const dispatch=useDispatch();

    const {colorMode} =useColorMode();

    const formLabelStyle={
        color: colorMode=='light'?"muted.700":"white",
        fontSize:18,
        fontWeight:600
    };

    const focusInputStyle={
        borderColor:colorMode=='light'?"muted.700":"white",

    }

    const onUpdate=async()=>{
        setIsUpdating(true);
        await dispatch(updateUserAsync({name,email,tel}));
        setLoading(false);
    }

    useEffect(
        ()=>{
            const fetchUserData=async()=>{
                await  dispatch(readUserAsync());
                setLoading(false);
            };
            fetchUserData();
        },[dispatch]);
    
    useEffect(
        ()=>{
            setName(general.name)
            setEmail(general.email)
            setTel(general.tel)
        },[general]
    );

    if(loading){
        return(
            <VStack flex={1} justifyContent="center" alignItems='center'>
                <Text>Loading...</Text>
            </VStack>
        )
    
    }

    return(
        <ScrollView>
            <Box
                style={{
                    position:'absolute',
                    top:50,
                       left:"80%"
                 }}
            >
                <ColorModeBtn size={30}/>
            </Box>
            
            <VStack space={2} mt={5} width="80%" alignSelf="center">
              <Text textAlign='center' fontSize="2xl" pb='4'>
                帳號
            </Text>
            <FormControl mb={5}>
                <FormControl.Label _text={formLabelStyle}>姓名</FormControl.Label>
                <Input 
                 variant='underlined' _focus={focusInputStyle} value={name}
                 onChangeText={text=>setName(text)}
                />
            </FormControl>
            <FormControl mb={5}>
                <FormControl.Label _text={formLabelStyle}>Email</FormControl.Label>
                <Input
                variant="underlined" _focus={focusInputStyle} value={email}
                onChangeText={text=>setEmail(text)}
                />
            </FormControl>
            <FormControl mb={5}>
                <FormControl.Label _text={formLabelStyle}>電話</FormControl.Label>
                <Input
                 variant="underlined" _focus={focusInputStyle}
                 value={tel} onChangeText={text=>setTel(text)}
                />

            </FormControl>
            <Button mt="12" h="10" w="100%" mx="auto" colorScheme="indigo"
                borderRadius={null}
                onPress={onUpdate}
                isDisabled={isUpdating || !name || !email ||!tel}
                >
                    {isUpdating ? "更新中...":"更新"}
            </Button>
            </VStack>
        </ScrollView>
    );
}

export default GeneralAccountScreen;