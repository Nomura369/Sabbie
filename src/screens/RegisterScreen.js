import {useState} from "react";

import {Box,Text,Heading,VStack,FormControl,Input,Button,HStack,Center,Pressable} from "native-base";
import {StyleSheet} from "react-native";
import {useDispatch} from "react-redux";
import {gotoLogin,registerAsync} from "../redux/accountSlice"

const RegisterScreen=()=>{
    const dispatch = useDispatch();
    const [loginRequest, setLoginRequest]=useState(false);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]= useState('');
    const rotation = useSharedValue(0);
    const btnWidth = useSharedValue('100%');
}

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
    <Center>
        <Box safeArea p='2' py='8' w='90%' maxW="290">
            
        </Box>
    </Center>
)