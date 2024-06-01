import { Center, Text, VStack, Image, HStack } from "@gluestack-ui/themed";
import { Pressable } from "react-native";
import { toggleIsQuestion1, chooseWhichQuestion2 } from "../redux/questionSlice";
import { selectIsQuestion1, selectWhichQuestion2 } from "../redux/questionSlice";
import { useDispatch, useSelector } from "react-redux";

const Question1 = () => {
    const isQuestion1 = useSelector(selectIsQuestion1);
    const whichQuestion2 = useSelector(selectWhichQuestion2);
    const dispatch = useDispatch();

    const imgWidth = 120, imgHeight = 120;

    return (
        <VStack flex={1} alignItems="center">
            <Center mt={30}> {/*星星的部分*/}
                <HStack justifyContent="space-around" mb={20}> {/*上排星星*/}
                    <VStack alignItems="center">
                        <Pressable onPress>
                            <Image
                                alt="喜悅"
                                width={imgWidth}
                                height={imgHeight}
                                src={{ uri: "https://i.imgur.com/ParZqhd.png" }}
                            />
                        </Pressable>
                        <Text fontFamily="cjkFonts" fontSize={20}>喜悅</Text>
                    </VStack>
                    <VStack alignItems="center">
                        <Image
                            alt="憤怒"
                            width={imgWidth}
                            height={imgHeight}
                            src={{ uri: "https://i.imgur.com/BRvZu50.png" }}
                        />
                        <Text fontFamily="cjkFonts" fontSize={20}>憤怒</Text>
                    </VStack>
                </HStack>
                <HStack justifyContent="space-around"> {/*下排星星*/}
                    <VStack alignItems="center">
                        <Image
                            alt="哀傷"
                            width={imgWidth}
                            height={imgHeight}
                            src={{ uri: "https://i.imgur.com/EdMftUK.png" }}
                        />
                        <Text fontFamily="cjkFonts" fontSize={20}>哀傷</Text>
                    </VStack>
                    <VStack alignItems="center">
                        <Image
                            alt="恐懼"
                            width={imgWidth}
                            height={imgHeight}
                            src={{ uri: "https://i.imgur.com/iZ3NN5j.png" }}
                        />
                        <Text fontFamily="cjkFonts" fontSize={20}>恐懼</Text>
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