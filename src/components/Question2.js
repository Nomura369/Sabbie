import { Center, Text, VStack, Image, HStack } from "@gluestack-ui/themed";
import { Pressable, Dimensions } from "react-native";
import { useState } from "react";

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedGestureHandler,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

import { selectWhichQuestion2 } from "../redux/questionSlice";
import { toggleIsQuestion1, chooseEmotions } from "../redux/questionSlice";
import { useDispatch, useSelector } from "react-redux";

import emotions from "../json/emotions.json"

const Question2 = () => {
    const whichQuestion2 = useSelector(selectWhichQuestion2);
    let index; // 在 Q1 所選擇的情緒種類
    if (whichQuestion2 === emotions[0].name) index = 0;
    else if (whichQuestion2 === emotions[1].name) index = 1;
    else if (whichQuestion2 === emotions[2].name) index = 2;
    else if (whichQuestion2 === emotions[3].name) index = 3;
    const emotion = emotions[index]; // 在 Q1 所選擇的情緒內容
    const [starNums, setStarNums] = useState(0); // 記錄使用者放入的星星數量（3顆為上限）

    const dispatch = useDispatch();

    const imgWidth = 100, imgHeight = 100;

    //觸控動畫
    const starRefs = Array.from({ length: 6 }, () => useRef(null)); // 幫每個星星添加一個 ref
    const translateX = useSharedValue(0); // x 移動了多少
    const translateY = useSharedValue(0); // y 移動了多少
    const translateXOLD = useSharedValue(0);
    const translateYOLD = useSharedValue(0);
    const opacity = useSharedValue(1); // 不透明度
    const windowWidth = Dimensions.get('window').width; // 裝置的寬
    const windowHeight = Dimensions.get('window').height; // 裝置的高
    const targetPosition = { x: (windowWidth / 2) , y: windowHeight }; // 目標位置（瓶子的底部中間）

    const gestureHandler = useAnimatedGestureHandler({
        onActive: (event) => {
            translateX.value = event.translationX + translateXOLD.value;
            translateY.value = event.translationY + translateYOLD.value;
        },
        onEnd: (event) => {
            // 判定星星是否放入瓶子
            if(translateXOLD.value <= targetPosition.x + 82 && translateXOLD.value >= targetPosition.x - 82 && translateYOLD >= targetPosition.y - 150){
                if(starNums < 3){ 
                    // 是 => 讓星星停留在瓶子內並消失（記得紀錄使用者選擇的星星）
                    translateXOLD.value = translateX.value;
                    translateYOLD.value = translateY.value;
                    opacity = 0;
                    dispatch(chooseEmotions(starRefs.current.props.alt));
                    setStarNums(starNums + 1);
                }
            }else{ 
                // 否 => 讓星星回到原本的位置
                translateX.value = withSpring(0);
                translateY.value = withSpring(0);
                translateXOLD.value = 0;
                translateYOLD.value = 0;
                opacity = 1;
            }
        },
    });
    
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [ // 當前位置
                { translateX: translateX.value },
                { translateY: translateY.value },
            ],
            opacity: opacity.value,
        };
    });

    return (
        <VStack flex={1} alignItems="center">
            <Center mt={36}> {/*星星的部分*/}
                <HStack justifyContent="space-around" mb={10}> {/*上排星星*/}
                    <VStack alignItems="center">
                        <PanGestureHandler onGestureEvent={gestureHandler}>
                            <Animated.Image
                                ref={starRefs[0]} // 將 ref 綁定到動畫元素上
                                alt={emotion.details[0]}
                                style={[
                                    {
                                        width: imgWidth,
                                        height: imgHeight,
                                    },
                                    animatedStyles,
                                ]}
                                source={{ uri: emotion.images[0] }}
                            />
                        </PanGestureHandler>
                        <Text fontFamily="cjkFonts" fontSize={18} color={colors.character1}>{emotion.details[0]}</Text>
                    </VStack>
                    <VStack alignItems="center">
                        <PanGestureHandler onGestureEvent={gestureHandler}>
                            <Animated.Image
                                ref={starRefs[1]} // 將 ref 綁定到動畫元素上
                                alt={emotion.details[1]}
                                style={[
                                    {
                                        width: imgWidth,
                                        height: imgHeight,
                                    },
                                    animatedStyles,
                                ]}
                                source={{ uri: emotion.images[1] }}
                            />
                        </PanGestureHandler>
                        <Text fontFamily="cjkFonts" fontSize={18} color={colors.character1}>{emotion.details[1]}</Text>
                    </VStack>
                    <VStack alignItems="center">
                        <PanGestureHandler onGestureEvent={gestureHandler}>
                            <Animated.Image
                                ref={starRefs[2]} // 將 ref 綁定到動畫元素上
                                alt={emotion.details[2]}
                                style={[
                                    {
                                        width: imgWidth,
                                        height: imgHeight,
                                    },
                                    animatedStyles,
                                ]}
                                source={{ uri: emotion.images[2] }}
                            />
                        </PanGestureHandler>
                        <Text fontFamily="cjkFonts" fontSize={18} color={colors.character1}>{emotion.details[2]}</Text>
                    </VStack>
                </HStack>
                <HStack justifyContent="space-around" mb={25}> {/*下排星星*/}
                    <VStack alignItems="center">
                        <PanGestureHandler onGestureEvent={gestureHandler}>
                            <Animated.Image
                                ref={starRefs[3]} // 將 ref 綁定到動畫元素上
                                alt={emotion.details[3]}
                                style={[
                                    {
                                        width: imgWidth,
                                        height: imgHeight,
                                    },
                                    animatedStyles,
                                ]}
                                source={{ uri: emotion.images[3] }}
                            />
                        </PanGestureHandler>
                        <Text fontFamily="cjkFonts" fontSize={18} color={colors.character1}>{emotion.details[3]}</Text>
                    </VStack>
                    <VStack alignItems="center">
                        <PanGestureHandler onGestureEvent={gestureHandler}>
                            <Animated.Image
                                ref={starRefs[4]} // 將 ref 綁定到動畫元素上
                                alt={emotion.details[4]}
                                style={[
                                    {
                                        width: imgWidth,
                                        height: imgHeight,
                                    },
                                    animatedStyles,
                                ]}
                                source={{ uri: emotion.images[4] }}
                            />
                        </PanGestureHandler>
                        <Text fontFamily="cjkFonts" fontSize={18} color={colors.character1}>{emotion.details[4]}</Text>
                    </VStack>
                    <VStack alignItems="center">
                    <PanGestureHandler onGestureEvent={gestureHandler}>
                            <Animated.Image
                                ref={starRefs[5]} // 將 ref 綁定到動畫元素上
                                alt={emotion.details[5]}
                                style={[
                                    {
                                      width: imgWidth,
                                      height: imgHeight,
                                    },
                                    animatedStyles,
                                ]}
                                source={{ uri: emotion.images[5] }}
                            />
                        </PanGestureHandler>
                        <Text fontFamily="cjkFonts" fontSize={18} color={colors.character1}>{emotion.details[5]}</Text>
                    </VStack>
                </HStack>
            </Center>
            {/*返回鍵的部分*/}
            <Pressable
                bg={colors.primary1}
                borderColor={colors.primary1}
                borderRadius={30}
                px={15} py={32}
                mb={24}
                onPress={dispatch(toggleIsQuestion1())}
            >
                <HStack justifyContent="center">
                    <MaterialCommunityIcons name="arrow-left" color={colors.character1} size={24} />
                    <Text fontFamily="cjkFonts" fontSize={20} color={colors.character1} ml={8}>返回分類</Text>
                </HStack>
            </Pressable>
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

export default Question2;