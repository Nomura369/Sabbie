import React,{useState} from "react";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { View,StyleSheet,Pressable ,Image,Text ,ScrollView} from "react-native";

export default function HomeScreen({navigation}) {
    const [selectedIndex,setSelectedIndex]=useState(0);
    
    const SegmentedContent=({navigation})=>{
        <View style={styles.header}>
          <Pressable onPress={() => navigation.toggleDrawer()}>
            <Image 
              source={{uri: 'https://github.com/joyce0129/BookApp_wk3/blob/main/img/icon.png?raw=true'}}
              style={{width: 20, height: 20, margin: 20}}
            />
           </Pressable>
      
        </View>

        if(selectedIndex==1){
            return(
                <ScrollView >
                    

                    <Text style={{fontSize:18,marginLeft:50,marginTop:20 ,fontFamily:"cjkFonts"}}>2024年3月17日 星期日</Text>
                    <View style={styles.containerStyle}> 
                    
                        <View style={styles.iconContainer}>
                            <Image 
                                style={styles.icon}
                                source={{
                                    uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/edit.png?raw=true"
                                }}
                            />
                            <Image 
                                style={styles.icon}
                                source={{
                                    uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/delete.png?raw=true"
                                }}
                            />
                        </View>

                        <View style={styles.emoContainer}>
                                <Image
                                    style={styles.emopic}
                                    source={{
                                        uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/happyface.png?raw=true"
                                    }}
                                />
                                <Text style={{fontSize:24,marginTop:10,marginLeft:10 ,fontFamily:"cjkFonts"}}>開心</Text>
                               
                        </View>
                        <View style={styles.wordContainer}>
                            <Text style={{fontSize:18,fontFamily:"cjkFonts"}}>今天吃到了夢寐以求的豆花加珍珠，好開心!</Text>
                        </View>
                        
                    </View>
                    <Text style={{fontSize:18,marginLeft:50,marginTop:20,fontFamily:"cjkFonts"}}>2024年3月18日 星期一</Text>
                    <View style={styles.containerStyle}> 
                    
                        <View style={styles.iconContainer}>
                            <Image 
                                style={styles.icon}
                                source={{
                                    uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/edit.png?raw=true"
                                }}
                            />
                            <Image 
                                style={styles.icon}
                                source={{
                                    uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/delete.png?raw=true"
                                }}
                            />
                        </View>

                        <View style={styles.emoContainer}>
                                <Image
                                    style={styles.emopic}
                                    source={{
                                        uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/fearface.png?raw=true"
                                    }}
                                />
                                <Text style={{fontSize:24,marginTop:10,marginLeft:10,fontFamily:"cjkFonts"}}>緊張</Text>
                               
                        </View>
                        <View style={styles.wordContainer}>
                            <Text style={{fontSize:18,fontFamily:"cjkFonts"}}>要期中考了好緊張...</Text>
                        </View>
                        
                    </View>
                    <Text style={{fontSize:18,marginLeft:50,marginTop:20,fontFamily:"cjkFonts"}}>2024年3月19日 星期二</Text>
                    <View style={styles.containerStyle}> 
                    
                        <View style={styles.iconContainer}>
                            <Image 
                                style={styles.icon}
                                source={{
                                    uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/edit.png?raw=true"
                                }}
                            />
                            <Image 
                                style={styles.icon}
                                source={{
                                    uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/delete.png?raw=true"
                                }}
                            />
                        </View>

                        <View style={styles.emoContainer}>
                                <Image
                                    style={styles.emopic}
                                    source={{
                                        uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/angryface.png?raw=true"
                                    }}
                                />
                                <Text style={{fontSize:24,marginTop:10,marginLeft:10,fontFamily:"cjkFonts"}}>震怒</Text>
                               
                        </View>
                        <View style={styles.wordContainer}>
                            <Text style={{fontSize:18,fontFamily:"cjkFonts"}}>捷運上有人推我!</Text>
                        </View>

                     
                    </View>
                    <Text style={{fontSize:18,marginLeft:50,marginTop:20,fontFamily:"cjkFonts"}}>2024年3月20日 星期三</Text>  
                    <View style={styles.containerStyle}> 
                    
                        <View style={styles.iconContainer}>
                            <Image 
                                style={styles.icon}
                                source={{
                                    uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/edit.png?raw=true"
                                }}
                            />
                            <Image 
                                style={styles.icon}
                                source={{
                                    uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/delete.png?raw=true"
                                }}
                            />
                        </View>

                        <View style={styles.emoContainer}>
                                <Image
                                    style={styles.emopic}
                                    source={{
                                        uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/happyface.png?raw=true"
                                    }}
                                />
                                <Text style={{fontSize:24,marginTop:10,marginLeft:10,fontFamily:"cjkFonts"}}>開心</Text>
                               
                        </View>
                        <View style={styles.wordContainer}>
                            <Text style={{fontSize:18,fontFamily:"cjkFonts"}}>內容預覽內容預覽內容預覽</Text>
                        </View>
                        
                    </View>
                </ScrollView>
                
            
            )
        }else{
            return(
                <ScrollView>
                    <Text style={{fontSize:18,marginLeft:50,marginTop:20,fontFamily:"cjkFonts"}}>2024年3月</Text>
                    <View style={styles.containerStyle}> 
                    
                        <View style={styles.iconContainer}>
                            <Image 
                                style={styles.icon}
                                source={{
                                    uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/edit.png?raw=true"
                                }}
                            />
                            <Text style={{fontSize:18,fontFamily:"cjkFonts"}}>17日</Text>
                            <Image 
                                style={styles.icon}
                                source={{
                                    uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/delete.png?raw=true"
                                }}
                            />
                        </View>

                        <View style={styles.emoContainer}>
                                <Image
                                    style={styles.emopic}
                                    source={{
                                        uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/happyface.png?raw=true"
                                    }}
                                />
                                <Text style={{fontSize:24,marginTop:10,marginLeft:10,fontFamily:"cjkFonts"}}>開心</Text>
                               
                        </View>
                        <View style={styles.wordContainer}>
                            <Text style={{fontSize:18,fontFamily:"cjkFonts"}}>今天吃到了夢寐以求的豆花加珍珠，好開心!</Text>
                        </View>
                        
                    </View>

                    <View style={styles.containerStyle}> 
                    
                        <View style={styles.iconContainer}>
                            <Image 
                                style={styles.icon}
                                source={{
                                    uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/edit.png?raw=true"
                                }}
                            />
                            <Text style={{fontSize:18,fontFamily:"cjkFonts"}}>18日</Text>
                            <Image 
                                style={styles.icon}
                                source={{
                                    uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/delete.png?raw=true"
                                }}
                            />
                        </View>

                        <View style={styles.emoContainer}>
                                <Image
                                    style={styles.emopic}
                                    source={{
                                        uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/fearface.png?raw=true?raw=true"
                                    }}
                                />
                                <Text style={{fontSize:24,marginTop:10,marginLeft:10,fontFamily:"cjkFonts"}}>緊張</Text>
                               
                        </View>
                        <View style={styles.wordContainer}>
                            <Text style={{fontSize:18,fontFamily:"cjkFonts"}}>要期中考了好緊張...</Text>
                        </View>
                        
                    </View>

                    <Text style={{fontSize:18,marginLeft:50,marginTop:20,fontFamily:"cjkFonts"}}>2024年4月</Text>
                    <View style={styles.containerStyle}> 
                    
                        <View style={styles.iconContainer}>
                            <Image 
                                style={styles.icon}
                                source={{
                                    uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/edit.png?raw=true"
                                }}
                            />
                            <Text style={{fontSize:18,fontFamily:"cjkFonts"}}>12日</Text>
                            <Image 
                                style={styles.icon}
                                source={{
                                    uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/delete.png?raw=true"
                                }}
                            />
                        </View>

                        <View style={styles.emoContainer}>
                                <Image
                                    style={styles.emopic}
                                    source={{
                                        uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/sadface.png?raw=true"
                                    }}
                                />
                                <Text style={{fontSize:24,marginTop:10,marginLeft:10,fontFamily:"cjkFonts"}}>失望</Text>
                               
                        </View>
                        <View style={styles.wordContainer}>
                            <Text style={{fontSize:18,fontFamily:"cjkFonts"}}>期中考考差了...</Text>
                        </View>
                        
                    </View>
                    <Text style={{fontSize:18,marginLeft:50,marginTop:20,fontFamily:"cjkFonts"}}>2024年5月</Text>
                    <View style={styles.containerStyle}> 
                    
                        <View style={styles.iconContainer}>
                            <Image 
                                style={styles.icon}
                                source={{
                                    uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/edit.png?raw=true"
                                }}
                            />
                            <Text style={{fontSize:18,fontFamily:"cjkFonts"}}>10日</Text>
                            <Image 
                                style={styles.icon}
                                source={{
                                    uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/delete.png?raw=true"
                                }}
                            />
                        </View>

                        <View style={styles.emoContainer}>
                                <Image
                                    style={styles.emopic}
                                    source={{
                                        uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/angryface.png?raw=true"
                                    }}
                                />
                                <Text style={{fontSize:24,marginTop:10,marginLeft:10,fontFamily:"cjkFonts"}}>震怒</Text>
                               
                        </View>
                        <View style={styles.wordContainer}>
                            <Text style={{fontSize:18,fontFamily:"cjkFonts"}}>捷運上有人推我!</Text>
                        </View>

                     
                    </View>
                    <Text style={{fontSize:18,marginLeft:50,marginTop:20,fontFamily:"cjkFonts"}}>2024年6月</Text>  
                    <View style={styles.containerStyle}> 
                    
                        <View style={styles.iconContainer}>
                            <Image 
                                style={styles.icon}
                                source={{
                                    uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/edit.png?raw=true"
                                }}
                            />
                            <Text style={{fontSize:18,fontFamily:"cjkFonts"}}>3日</Text>
                            <Image 
                                style={styles.icon}
                                source={{
                                    uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/delete.png?raw=true"
                                }}
                            />
                        </View>

                        <View style={styles.emoContainer}>
                                <Image
                                    style={styles.emopic}
                                    source={{
                                        uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/happyface.png?raw=true"
                                    }}
                                />
                                <Text style={{fontSize:24,marginTop:10,marginLeft:10,fontFamily:"cjkFonts"}}>開心</Text>
                               
                        </View>
                        <View style={styles.wordContainer}>
                            <Text style={{fontSize:18,fontFamily:"cjkFonts"}}>內容預覽內容預覽內容預覽</Text>
                        </View>
                        
                    </View>
                </ScrollView>
            )
        }
    }
    return(
        <View flex={1} >
         <SegmentedControlTab
            values={["按日排序", "按月排序"]}
            tabStyle={{ 
                
               backgroundColor: "white",
               marginTop: 50,
               borderColor: "gray",
            }}
            activeTabStyle={{
               backgroundColor: "gray",
               marginTop: 50,    
               borderColor: "gray",       
            }}
            firstTabStyle={{ marginLeft: 50 }}
            lastTabStyle={{ marginRight: 50 }}
            tabTextStyle={{ fontSize: 16, padding: 5, color: "gray"}}
            activeTabTextStyle={{ color: "white" }}
            selectedIndex={selectedIndex}
            onTabPress={(index) => setSelectedIndex(index)}
         />
         <SegmentedContent />
      </View>
    );
}

const styles=StyleSheet.create({
    containerStyle:{
        
        flexDirection:"column",
        justifyContent:"center",
        borderColor:"#B7E5C0",
        borderWidth:2,
        borderRadius:10,
        width:310,
        marginTop:20,
        marginLeft:50,
        
    },
    iconContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:20,
        marginBottom:20,
        marginLeft:20,
        width:260,

        
    },
    icon:{
        width:20,
        height:20
    },
    emoContainer:{
        flexDirection:"row",
        justifyContent:"center",
        
       
    },
    emopic:{
        height:59,
        width:80
    },
    wordContainer:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:10,
        marginBottom:20
    },
    header: {
      paddingHorizontal: 5,
      paddingVertical: 5,
      backgroundColor: '#ffff',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
    
}
)