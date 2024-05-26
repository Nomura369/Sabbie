import { useTheme } from '@react-navigation/native';
import { 
    Center, 
    Text, 
    VStack, 
    FormControl, 
    FormControlLabel, 
    FormControlLabelText,
    FormControlError,
    FormControlErrorIcon,
    FormControlErrorText,
    ScrollView,
    KeyboardAvoidingView,
} from "@gluestack-ui/themed";
import { Dimensions, Pressable, Platform } from 'react-native';
import { useState } from "react";
import { useDispatch } from 'react-redux';

const LoginScreen = () => {
    const { colors } = useTheme();

    const windowWidth = Dimensions.get('window').width; // 裝置的寬
    const textInputWidth = windowWidth - 50 * 2;

    const [email, setEmail] = useState("");
    const [emailIsError, setEmailIsError] = useState(true);
    const [password, setPassword] = useState("");
    const [passwordIsError, setPasswordIsError] = useState(true);

    const emailRegex = /\w{3,}@[a-zA-Z_]+\.[a-zA-Z]{2,5}/; // 正確的信箱格式範例：abc@domain.com
    const passwordRegex = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/ // 密碼至少要有八個字元，而且應包含數字及英文字母

    return (
        <KeyboardAvoidingView
                keyboardVerticalOffset={Platform.select({ ios: 0, android: -500 })}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                flex={1}
                bg={colors.bg}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Center>
                        <Text fontSize={30} fontFamily="cjkFonts" color={colors.character1}>很高興見到你！</Text>
                        <VStack mt={52} mb={73}>
                            <FormControl //email欄位
                                isRequired
                                bg={colors.primary3}
                                borderColor={colors.primary3}
                                borderRadius={10}
                                width={textInputWidth}
                                mb={36}

                                fontFamily="cjkFonts"
                                fontSize={20}
                                color={colors.character1}
                            >
                                <FormControlLabel>
                                    <FormControlLabelText>Email</FormControlLabelText>
                                </FormControlLabel>
                                <Input>
                                    <InputField 
                                        type="text"
                                        value={email}
                                        onChangeText={(text) => {
                                            setEmail(text);
                                            if (emailRegex.test(text)) setEmailIsError(false);
                                            else setEmailIsError(true);
                                        }}
                                    />
                                </Input>
                                <FormControlError isInvalid={emailIsError}>
                                    <FormControlErrorIcon as={AlertCircleIcon} />
                                    <FormControlErrorText>
                                       無效的電子信箱地址。
                                    </FormControlErrorText>
                                </FormControlError>
                            </FormControl>
                            <FormControl //密碼欄位
                                isRequired
                                bg={colors.primary3}
                                borderColor={colors.primary3}
                                borderRadius={10}
                                width={textInputWidth}
                                mb={73}

                                fontFamily="cjkFonts"
                                fontSize={20}
                                color={colors.character1}
                            >
                                <FormControlLabel>
                                    <FormControlLabelText>密碼</FormControlLabelText>
                                </FormControlLabel>
                                <Input>
                                    <InputField 
                                        type="password" 
                                        value={password}
                                        onChangeText={(text) => {
                                            setPassword(text);
                                            if (passwordRegex.test(text)) setPasswordIsError(false);
                                            else setPasswordIsError(true);
                                        }}
                                    />
                                </Input>
                                <FormControlError isInvalid={passwordIsError}>
                                    <FormControlErrorIcon as={AlertCircleIcon} />
                                    <FormControlErrorText>
                                       密碼至少要有八個字元，而且應包含數字及英文字母。
                                    </FormControlErrorText>
                                </FormControlError>
                            </FormControl>
                        </VStack>
                        <Pressable
                            bg={colors.primary3}
                            borderColor={colors.primary3}
                            borderRadius={30}
                            px={8} py={65}
                            //onPress={} //firebase認證＆以redux紀錄登入登出狀態
                        >
                            <Text fontSize={24} fontFamily="cjkFonts" color={colors.character1}>登入</Text>
                        </Pressable>
                    </Center>
                </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default LoginScreen;