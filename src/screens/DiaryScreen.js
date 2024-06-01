import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dimensions, Platform, TextInput, StyleSheet, TouchableOpacity, Animated, View } from 'react-native';
import { Center, Text, Image, VStack, KeyboardAvoidingView, ScrollView, HStack } from "@gluestack-ui/themed";
import { useTheme } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ButtomBar from '../components/ButtomBar';


const ExpandCollapse=({children})=>{
    const [isExpanded,setIsExpanded]=useState(false);
    // const [animation]=useState(new Animated.Value(0));
    const toggleExpandCollapse=()=>{
        setIsExpanded(!isExpanded);
        // Animated.timing(animation,{
        //     toValue:isExpanded?0:1,
        //     duration:300,
        //     useNativeDriver:false,
        // }).start();
    };
    const iconName=isExpanded
    ?"arrow-down-drop-circle-outline" 
    :"arrow-right-drop-circle-outline" 

    return(
        <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleExpandCollapse}>
        <MaterialCommunityIcons name={iconName} size={24} color='black' />
        <Text style={styles.buttonText}>{isExpanded ? '今日的心情星砂瓶' : '今日的心情星砂瓶'}</Text>
      </TouchableOpacity>
      {isExpanded && <View style={styles.content}>{children}</View>}
    </View>
    );
}

    // const contentHeight=animation.interpolate({
    //     inputRange:[0,1],
    //     outputRange:[0,100],
    // })


const DiaryScreen = ({route}) => {
   const {colors}=useTheme();

   const windowWidth = Dimensions.get('window').width; // 裝置的高
   const textAreaWidth = windowWidth - 55 * 2;

   
    // 日期設定
    const d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let week;
    switch(d.getDay()){
        case 0:
            week = "日";
            break;
        case 1:
            week = "一";
            break;
        case 2:
            week = "二";
            break;
        case 3:
            week = "三";
            break;
        case 4:
            week = "四";
            break;
        case 5:
            week = "五";
            break;
        case 6:
            week = "六";
            break;
        default:
            console.log("今天星期幾？");
    }
    const date = year + "年" + month + "月" + day + "日 星期" + week; //今日日期


    return (
        <KeyboardAvoidingView
                keyboardVerticalOffset={Platform.select({ ios: 0, android: -500 })}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                flex={1}
                
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack alignItems="center">
                    <Text fontFamily="cjkFonts" fontSize={18} mt={51} mb={17}>{date}</Text>
                    <ExpandCollapse>
                        <Center>
                        <Image
                            source={{ uri: 'https://github.com/joyce0129/EmotionApp/blob/main/src/img/bottle.png?raw=true' }}
                            style={{ width: 20, height: 20 }}
                        />
                        <HStack>
                            <Text fontFamily="cjkFonts" fontSize={15}>開心</Text>
                            <Text fontFamily="cjkFonts" fontSize={15}>震怒</Text>
                            <Text fontFamily="cjkFonts" fontSize={15}>緊張</Text>
                        </HStack>
                        </Center>
                    </ExpandCollapse>
                        
                        <TextInput
                            width={textAreaWidth}
                            placeholder="從開始這裡輸入吧。"
                            multiline={true}
                            textAlignVertical="top" //統一 iOS 和 Android 的對齊方式
                            fontSize={20}
                            color={colors.character}
                            style={{ fontFamily: "cjkFonts" }}
                        />
                    </VStack>
                </ScrollView>
                <ButtomBar  />
        </KeyboardAvoidingView>
    );

}


const styles = StyleSheet.create({
    container: {
      padding: 20,
      borderColor:'#BDA9A6',
      borderWidth:2,
      borderRadius:10
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    buttonText:{
        
    },
    content: {
      
    },
  });

  
export default DiaryScreen;