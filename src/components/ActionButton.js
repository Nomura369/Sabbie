import React from "react";
import { useTheme, useNavigation } from '@react-navigation/native';
import {
  Box,
  Pressable,
  Text,
  Image,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetContent,
  HStack,
  VStack
} from "@gluestack-ui/themed";

//撰寫日記的頁面尚未引入

export default () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);

  return (
    <Box>
      <Pressable
        onPress={handleClose}
        bg={colors.primary2}
        width="$10"
        height="$10"
        //hardShadow="5"
        borderRadius="$full"
        justifyContent="center"
        alignItems="center"
      >
        <Text color="white" size="4xl">
          +
        </Text>
      </Pressable>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
        <ActionsheetBackdrop />
        <ActionsheetContent h="$72" zIndex={999}>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          {/*希望這樣跳轉是沒問題的*/}
          <ActionsheetItem onPress={() => navigation.navigate("Question")}>
            <HStack justifyContent="center" alignItems="center">
                <Image 
                    alt="星砂瓶" 
                    width={96} height={87} 
                    source={{ uri: "https://i.imgur.com/zl3bsfA.png" }}
                    mr={20} 
                />
                <VStack>
                    <ActionsheetItemText fontFamily="cjkFonts" fontSize={22} color={colors.character1} mb={6}>製作心情星砂瓶</ActionsheetItemText>
                    <ActionsheetItemText fontFamily="cjkFonts" fontSize={16} color={colors.primary2}>每日一次</ActionsheetItemText>
                </VStack>
            </HStack>
          </ActionsheetItem>
          {/*希望這樣跳轉是沒問題的*/}
          <ActionsheetItem onPress={() => navigation.navigate("Diary")}> 
            <HStack justifyContent="center" alignItems="center">
                <Image 
                    alt="寫日記" 
                    width={96} height={91} 
                    source={{ uri: "https://i.imgur.com/1iBr15T.png" }}
                    mr={20} 
                />
                <ActionsheetItemText fontFamily="cjkFonts" fontSize={22} color={colors.character1}>撰寫日記</ActionsheetItemText>
            </HStack>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </Box>
  );
};