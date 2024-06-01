import { HStack, Text } from "@gluestack-ui/themed";
import { useTheme } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomBar = () => { // 物件，裡面有 name 和 detail 
    const { colors } = useTheme(); 
    
    // // 背景色設定
    // let bgColor;
    // switch(choice.name){
    //     case "happy":
    //         bgColor = colors.bg_happy_dark;
    //         break;
    //     case "angry":
    //         bgColor = colors.bg_angry_dark;
    //         break;
    //     case "sad":
    //         bgColor = colors.bg_sad_dark;
    //         break;
    //     case "fear":
    //         bgColor = colors.bg_fear_dark;
    //         break;
    //     default:
    //         console.log("無法設定底部工具列的背景色");
    // }


    return (
        <HStack 
            bg='#BDA9A6'
            height={60} 
            borderTopLeftRadius={25} 
            borderTopRightRadius={25} 
            alignItems="center"
            justifyContent="space-between"
            mt={10} // 跟輸入的文字做間隔
            >
                <HStack>
                    <MaterialCommunityIcons
                    name={"format-align-left"}
                    size={32}
                    //onPress={() => navigation.goBack()}
                    style={{ color: "#ffffff", marginLeft: 23 }}
                    />
                    <MaterialCommunityIcons
                    name={"camera"}
                    size={32}
                    //onPress={() => navigation.goBack()}
                    style={{ color: "#ffffff", marginLeft: 22 }}
                    />
                    <MaterialCommunityIcons
                    name={"image-plus"}
                    size={32}
                    //onPress={() => navigation.goBack()}
                    style={{ color: "#ffffff", marginLeft: 22 }}
                    />
                </HStack>
                <HStack>
                    <MaterialCommunityIcons
                        name={"check"}
                        size={32}
                        //onPress={() => navigation.goBack()}
                        style={{ color: "#ffffff", marginRight: 23 }}
                    />
                </HStack>
        </HStack>
    );
};

export default BottomBar;