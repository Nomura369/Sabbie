import {useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {ScrollView,FromControl,Vstack,Text,Input,WarningOutlineIcon,KeyboardAvoidingView} from 'native-base'

import {setGeneralAccountInfo} from "../redux/accountSlice";
import {selectGeneral} from "../redux/accountSlice";

const GeneralAccountScreen=()=>{
    const [name,setName]=useState(general.name);
    const [nameIsError,setNameIsError]=useState(true);
    const [email,setEmail]=useState(general.email);
    const [emailIsError,setEmailsErro]=useState(true);
    const [tel,setTel]=useState(general.tel);

    const nameRegex= /^[a-zA-Z]+\w*$/;
    const emailRegex=/w{3,}@[a-zA-Z]+\.[a-zA-Z]{2,5}/

    useEffect(()=>{
        if(!nameIsError && !emailIsError)
          dispatch(setGeneralAccountInfo({ name,email,tel}))

        if(email.match(emailRegex)) setEmailIsError(false)
        else setEmailIsError(true);
    },[name,email,tel]);

    return(
        <ScrollView>
            <VStack space={2} mt={5} width="80%" alignSelf="center">
                <Text textAlign="center" fontSize="2xl" pb="4">
                    General Setting
                    </Text>
                    <FormControl mb={5} isRequired isInvalid={nameIsError}>
                        <FormControl.Label _text={formLabelStyle}>
                            Name
                        </FormControl.Label>
                        <Input 
                           variant='underlined' _focus={focusInputStyle} value={name}
                           onChangeText={text => setName(text)}
                        />
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs"/>}>
                           You must enter a valid name.
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl mb={5} isRequired isInvalid={emailIsError}>
                        <FormControl.Label _text={formLabelStyle}>
                            Email
                        </FormControl.Label>
                        <Input
                            variant="underlined" _focus={focusInputStyle} value={email}
                            onChangeText={text=>setEmail(text)}
                            />
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs"/>}>
                           You must enter a valid name.
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl mb={5} >
                        <FormControl.Label _text={formLabelStyle}>
                            Tel
                        </FormControl.Label>
                        <Input
                            variant="underlined" _focus={focusInputStyle} value={tel}
                            onChangeText={text=>setTel(text)}
                            />
                    </FormControl>
                </VStack>
            </ScrollView>
    );
}

export default GeneralAccountScreen;