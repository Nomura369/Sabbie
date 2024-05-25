import { useTheme } from '@react-navigation/native';
import { 
    Center, 
    Text, 
    VStack, 
    FormControl, 
    FormControlLabel, 
    FormControlLabelText,
} from "@gluestack-ui/themed";
import { Dimensions, Pressable } from 'react-native';

const LoginScreen = () => {
    const { colors } = useTheme();

    const windowWidth = Dimensions.get('window').width; // 裝置的寬
    const textInputWidth = windowWidth - 50 * 2;

    return (
        <Center flex={1}>
            <Text fontSize={30} fontFamily="cjkFonts" color={colors.character1}>很高興見到你！</Text>
            <VStack mt={52} mb={73}>
                <FormControl //表單內每個(輸入)欄位的格式
                    bg={colors.primary3}
                    borderColor={colors.primary3}
                    borderRadius={10}
                    width={textInputWidth}
                    fontFamily="cjkFonts"
                    fontSize={20}
                    color={colors.character1}
                >
                    <FormControlLabel mb={36}>
                        <FormControlLabelText>Email</FormControlLabelText>
                        <Input>
                            <InputField type="text" />
                        </Input>
                    </FormControlLabel>
                    <FormControlLabel mb={73}>
                        <FormControlLabelText>密碼</FormControlLabelText>
                        <Input>
                            <InputField type="password" />
                        </Input>
                    </FormControlLabel>
                </FormControl>
            </VStack>
            <Pressable
                bg={colors.primary3}
                borderColor={colors.primary3}
                borderRadius={30}
                px={8} py={65}
                //onPress={}
            >
                <Text fontSize={24} fontFamily="cjkFonts" color={colors.character1}>登入</Text>
            </Pressable>
        </Center>
    );
}

export default LoginScreen;