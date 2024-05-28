import {useState,useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import {ScrollView,FormControl,VStack,Text,Input,Button} from "native-base"

import {selectGeneral,readUserAsync,updateUserAsync} from "../redux/accountSlice";

const GeneralAccountScreen =()=>{
    const general=useSelector(selectGeneral);
    const [name,setName] =useState();
    const [email,setEmail]=useState();
    const [tel,setTel]=useState();

    const dispatch=useDispatch();

    const formLabelStyle={
        fontSize:'xs',
        fontWeight:600
    };

    const onUpdate=()=>{
        dispatch(updateUserAsync({name,email,tel}));
    }

    useEffect(
        ()=>{
            dispatch(readUserAsync());
        },[] )
    
    useEffect(
        ()=>{
            setName(general.name)
            setEmail(general.email)
            setTel(general.tel)
        },[general]
    );

    return(
        <ScrollView>
            <VStack space={2} mt={5} width="80%" alignSelf="center">
              <Text textAlign='center' fontSize="2xl" pb='4'>
                帳號
            </Text>
            <FormControl mb={5}>
            </FormControl>
            </VStack>
        </ScrollView>
    )
}