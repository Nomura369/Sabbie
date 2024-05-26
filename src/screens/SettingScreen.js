import { Center, Text, HStack, Switch } from "@gluestack-ui/themed";

const SettingScreen = () => {
    const [colorMode, setColorMode] = useState("light");
    const toggleColorMode = () => {
        if (colorMode == "light") setColorMode("dark");
        else setColorMode("light");
    };

    return (
        <Center flex={1} bg={colorMode == "dark" ? "black" : "white"}>
            <HStack alignItems="center">
                <Text 
                    size="lg" //暫定
                    fontFamily="cjkFonts"
                    px="$2" 
                    color={colorMode == "dark" ? "white" : "black"}
                >
                    Dark Mode
                </Text>
                <Switch
                    size="lg" //暫定
                    name="Dark Mode"
                    value={colorMode === "light"}
                    onToggle={toggleColorMode}
                    accessibilityLabel="display-mode"
                    accessibilityHint="light or dark mode"
                />
            </HStack>
        </Center>
    );
}

export default SettingScreen;