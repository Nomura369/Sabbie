import {useState} from "react";

import {Box,Text,Heading,VStack,FormControl,Input,Button,HStack,Center,Pressable,FormControlLabel,FormControlLabelText} from "@gluestack-ui/themed";
import {StyleSheet} from "react-native";
import {useDispatch} from "react-redux";
import {gotoLogin,registerAsync} from "../redux/accountSlice"
import Animated,{
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
    Easing
}from 'react-native-reanimated';

const RegisterScreen=()=>{
    const dispatch = useDispatch();
    const [loginRequest, setLoginRequest]=useState(false);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]= useState('');
    const rotation = useSharedValue(0);
    const btnWidth = useSharedValue('100%');
    const animatedSpinnerStyles=useAnimatedStyle(()=>{
        return{
            transform:[
                {
                    rotateZ:'${rotation.value}deg',
                }
            ]
        };
    },[rotation.value]
    );

    const animatedButtonStyles= useAnimatedStyle(()=>{
        return{
            width:btnWidth.value,
        };
    },[btnWidth.value]
    );

    const onPressButton =()=>{
        dispatch(registerAsync({name,email,password}))
        setLoginRequest(!loginRequest);
        if(loginRequest){
            rotation.value=withTiming(0,{
                duration:1000,
                easing:Easing.linear,
            });
            btnWidth.value=withTiming('100%',{
                duration:400,
                easing:Easing.linear,
            });
        }else{
            rotation.value=withRepeat(
                withTiming(360,{
                    duration:1000,
                    easing:Easing.linear,
                }),
                -1
            );
            btnWidth.value=withTiming("15",{
                duration:300,
                easing:Easing.linear,
            });
        }
    }
    
    const goToLogin =()=>{
        dispatch(gotoLogin())
    }
    
    return (
        <Center w='100%' flex={1}>
            <Box safeArea p='2' py='8' w='90%' maxW="290">
                <VStack alignItems={'center'} mb='4'>
                    <Text size='lg' fontweight='600' color="gray" _dark={{
                        color:"black"
                    }}>
                        註冊
                    </Text>
                </VStack>

                <VStack space={3} mt='5'>
                    <FormControl>
                        <FormControlLabel>
                            <FormControlLabelText>姓名</FormControlLabelText>
                        </FormControlLabel>
                        <Input value={name}
                            onChangeText={text=>setName(text)}
                        />
                    </FormControl>

                    <FormControl>
                    <FormControlLabel>
                            <FormControlLabelText>Email</FormControlLabelText>
                        </FormControlLabel>
                        <Input value={email}
                           onChangeText={text =>setEmail(text)}
                        />
                    </FormControl>
                    <FormControl>
                    <FormControlLabel>
                            <FormControlLabelText>密碼</FormControlLabelText>
                        </FormControlLabel>
                        <Input type='password' value={password}
                           onChangeText={text=>setPassword(text)}/>

                    </FormControl>

                    <Animated.View mt='12' h='10' w='100%' mx='auto' colorScheme='indigo'
                       borderRadius={loginRequest? 48:null}
                       height={loginRequest ? "10":null}
                       style={animatedButtonStyles}
                       onPress={onPressButton}
                    >
                        {
                            loginRequest
                            ? <Animated.View style={[styles.spinner,animatedSpinnerStyles]}/>
                            : <Text>註冊</Text>
                        }

                    </Animated.View>

                    <HStack mt='2' justifyContent='center' alignItems={'center'}>
                        <Text fontSize={18} color="gray" _dark={{
                            color:"black"
                        }}>
                        已有帳號{""}
                        </Text>
                        <Pressable onPress={goToLogin}>
                            <Text
                              fontWeight="medium"
                              fontSize={18}
                            >
                                註冊
                            </Text>
                        </Pressable>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    );
}

const styles=StyleSheet.create({
    buttonStyle:{
        color:'white',
        backgroundColor:'black',
        textAlign: 'center',
        paddingVertical: 10,
        width: '100%',
        borderRadius: 200,
    },
    spinner: {
        height: 20,
        width: 20,
        borderRadius: 30,
        borderWidth: 4,
        borderTopColor: '#f5f5f5',
        borderRightColor: '#f5f5f5',
        borderBottomColor: 'lightblue',
        borderLeftColor: 'lightblue',
     },
})

export default RegisterScreen;