import { useTheme } from '@react-navigation/native';
import { Center, Text, VStack, Image, HStack } from "@gluestack-ui/themed";
import { Pressable } from "react-native";
import { toggleIsQuestion1, chooseWhichQuestion2 } from "../redux/questionSlice";
import { useDispatch } from "react-redux";

import emotions from "../json/emotions.json"

const Question1 = () => {
    const dispatch = useDispatch();
    const onPress = (choice) => {
        dispatch(toggleIsQuestion1());
        dispatch(chooseWhichQuestion2(choice));
    };

    const { colors } = useTheme();
    const imgWidth = 120, imgHeight = 120;

    console.log(emotions[0].name);

    return (
        <VStack flex={1} alignItems="center">
            <Center mt={30}> {/*星星的部分*/}
                <HStack justifyContent="space-around" mb={20}> {/*上排星星*/}
                    <VStack alignItems="center">
                        <Pressable onPress={onPress(emotions[0].name)}>
                            <Image
                                alt={emotions[0].name}
                                width={imgWidth}
                                height={imgHeight}
                                src={{ uri: emotions[0].img }}
                            />
                        </Pressable>
                        <Text fontFamily="cjkFonts" fontSize={20} color={colors.character1}>{emotions[0].name}</Text>
                    </VStack>
                    <VStack alignItems="center">
                        <Pressable onPress={onPress(emotions[1].name)}>
                            <Image
                                alt={emotions[1].name}
                                width={imgWidth}
                                height={imgHeight}
                                src={{ uri: emotions[1].img }}
                            />
                        </Pressable>
                        <Text fontFamily="cjkFonts" fontSize={20} color={colors.character1}>{emotions[1].name}</Text>
                    </VStack>
                </HStack>
                <HStack justifyContent="space-around"> {/*下排星星*/}
                    <VStack alignItems="center">
                        <Pressable onPress={onPress(emotions[2].name)}>
                            <Image
                                alt={emotions[2].name}
                                width={imgWidth}
                                height={imgHeight}
                                src={{ uri: emotions[2].img }}
                            />
                        </Pressable>
                        <Text fontFamily="cjkFonts" fontSize={20} color={colors.character1}>{emotions[2].name}</Text>
                    </VStack>
                    <VStack alignItems="center">
                        <Pressable onPress={onPress(emotions[3].name)}>
                            <Image
                                alt={emotions[3].name}
                                width={imgWidth}
                                height={imgHeight}
                                src={{ uri: emotions[3].img }}
                            />
                        </Pressable>
                        <Text fontFamily="cjkFonts" fontSize={20} color={colors.character1}>{emotions[3].name}</Text>
                    </VStack>
                </HStack>
            </Center>
            {/*瓶子的部分*/}
            <Image 
                alt="瓶子"
                width={360}
                height={169}
                src={{ uri: "https://i.imgur.com/bMEm4ng.png" }}

                position="absolute"
                bottom={0}
            /> 
        </VStack>
    );
}

export default Question1;