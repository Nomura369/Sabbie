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
    useColorMode,
    Box,
    Input,
    InputField
} from "@gluestack-ui/themed";

import { Dimensions, Pressable, Platform, StyleSheet } from 'react-native';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { gotoRegister, loginAsync } from "../redux/accountSlice";
import ColorModeBtn from '../components/ColorModeBtn';

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedGestureHandler,
} from "react-native-reanimated";

//const AnimatedButton = Animated.createAnimatedComponent(Button);

const LoginScreen = () => {
    const dispatch = useDispatch();
    const [loginRequest, setLoginRequest] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { colorMode } = useColorMode();

    const { colors } = useTheme();

    const windowWidth = Dimensions.get('window').width; // 裝置的寬
    const textInputWidth = windowWidth - 50 * 2;

    const rotation = useSharedValue(0);
    const btnWidth = useSharedValue("100%");
    const animatedSpinnerStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotateZ: '${rotation.value}deg',
                },
            ],
        };
    }, [rotation.value]
    );

    const animatedButtonStyles = useAnimatedStyle(() => {
        return {
            width: btnWidth.value,
        };
    }, [btnWidth.value]
    );

    const onPressButton = () => {
        dispatch(loginAsync({ email, password }))
        setLoginRequest(!loginRequest);
        if (loginRequest) {
            rotation.value = withTiming(0, {
                duration: 1000,
                easing: Easing.linear,
            });
            btnWidth.value = withTiming('100%', {
                duration: 400,
                easing: Easing.linear,
            });
        } else {
            rotation.value = withRepeat(
                withTiming(360, {
                    duration: 1000,
                    easing: Easing.linear,
                }),
                -1
            );
            btnWidth.value = withTiming("15", {
                duration: 300,
                easing: Easing.linear,
            });
        }
    }

    const goToRegister = () => {
        dispatch(gotoRegister())
    }

    // const [email, setEmail] = useState("");
    // const [emailIsError, setEmailIsError] = useState(true);
    // const [password, setPassword] = useState("");
    // const [passwordIsError, setPasswordIsError] = useState(true);

    // const emailRegex = /\w{3,}@[a-zA-Z_]+\.[a-zA-Z]{2,5}/; // 正確的信箱格式範例：abc@domain.com
    // const passwordRegex = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/ // 密碼至少要有八個字元，而且應包含數字及英文字母

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Center bg={colors.bg}>
                <Box
                    style={{
                        position:'absolute',
                        top:50,
                        left:"80%"
                    }}
                >
                    <ColorModeBtn size={30}/>
                </Box>
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
                                value={email}
                                onChangeText={email => setEmail(email)}
                            />
                        </Input>
                        {/* <FormControlError isInvalid={emailIsError}>
                                    <FormControlErrorIcon as={AlertCircleIcon} />
                                    <FormControlErrorText>
                                       無效的電子信箱地址。
                                    </FormControlErrorText>
                                </FormControlError> */}
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
                            <FormControlLabelText fontFamily="cjkFonts">密碼</FormControlLabelText>
                        </FormControlLabel>
                        <Input>
                            <InputField
                                type={password} value={password}
                                onChangeText={password => setPassword(password)}
                            />
                        </Input>
                        {/* <FormControlError isInvalid={passwordIsError}>
                                    <FormControlErrorIcon as={AlertCircleIcon} />
                                    <FormControlErrorText>
                                       密碼至少要有八個字元，而且應包含數字及英文字母。
                                    </FormControlErrorText>
                                </FormControlError> */}
                    </FormControl>
                    <Animated.View
                        mt="12" h="10" w="100%" mx="auto" colorScheme="indigo"
                        borderRadius={loginRequest ? 48 : null}
                        height={loginRequest ? "10" : null}
                        style={animatedButtonStyles}
                        onPress={onPressButton}
                    >
                            {
                                loginRequest
                                    ? <Animated.View style={[styles.spinner, animatedSpinnerStyles]} />
                                    : <Text>登入</Text>
                            }
                    </Animated.View>

                    {/* <Pressable
                            bg={colors.primary3}
                            borderColor={colors.primary3}
                            borderRadius={30}
                            px={8} py={65}
                            //onPress={} //firebase認證＆以redux紀錄登入登出狀態
                        >
                            <Text fontSize={24} fontFamily="cjkFonts" color={colors.character1}>登入</Text>
                        </Pressable> */}

                    <Pressable onPress={goToRegister}>
                        <Text
                            color={colorMode == 'dark' ? "gray" : "black"}
                            fontWeight="medium"
                            fontSize={18}
                            fontFamily="cjkFonts"
                        >註冊</Text>
                    </Pressable>
                </VStack>
            </Center>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        color: "white",
        backgroundColor: 'black',
        textAlign: 'center',
        paddingVertical: 10,
        width: '100%',
        borderRadius: 200,
        fontFamily: "cjkFonts"
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
        fontFamily: "cjkFonts"
    },
})


export default LoginScreen;