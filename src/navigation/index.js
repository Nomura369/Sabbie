import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, // 自訂drawer項目用
} from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Divider, Image, Text, Center, VStack, Pressable } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';

import TheTheme from '../theme';
import StatisticsScreen from "../screens/StatisticsScreen"
import NullScreen from "../screens/NullScreen"
import ActionButton from "../components/ActionButton";
import HomeScreen from "../screens/HomeScreen"
import QuestionScreen from '../screens/QuestionScreen';
import CompletionScreen from "../screens/CompletionScreen"
import LoginScreen from '../screens/LoginScreen';
import SettingScreen from "../screens/SettingScreen"
import HelpScreen from '../screens/HelpScreen';
//import LogoutScreen from "../screens/LogoutScreen"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={TheTheme}>
      <TheDrawer />
    </NavigationContainer>
  );
}

/*Drawer專區-起點*/
const TheDrawer = () => { // Drawer導覽編排
    const { colors } = useTheme();
  
    return (
      <Drawer.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: colors.primary2,
          drawerInactiveTintColor: colors.character1,
          drawerStyle: { width: 300 },
          drawerLabelStyle: { fontSize: 14 }, // icon旁的文字設定
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            drawerLabel: "首頁",
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={24} />
            ),
          }}
        />
        <Drawer.Screen
          // 登入後消失
          name="Login"
          component={LoginScreen}
          options={{
            drawerLabel: "登入", 
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-circle" color={color} size={24} />
            ),
          }}
        />
        <Drawer.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            drawerLabel: "設定",
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons name="cog" color={color} size={24} />
            ),
          }}
        />
        <Drawer.Screen
          name="Help"
          component={HelpScreen}
          options={{
            drawerLabel: "幫助",
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons name="help-circle" color={color} size={24} />
            ),
          }}
        />
        {/*<Drawer.Screen
          // 登入後才出現
          name="Logout"
          component={LogoutScreen}
          options={{
            drawerLabel: "登出",
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons name="logout" color={color} size={24} />
            ),
          }}
        />*/}
      </Drawer.Navigator>
    );
  }

const CustomDrawerContent = (props) => { // Drawer頁面排版
    const { colors } = useTheme();

    return (
      <DrawerContentScrollView {...props}
        contentContainerStyle={{ paddingTop: 0 }}
      >
            <VStack mt={40} mb={16} ml={16}>
              <Image
              height={48}
              width={48}
              source={{ uri: "https://i.imgur.com/XW0YcYX.png" }} //登入後預計會換成彩色圖片
              alt='userImage'
              />
              {/*登入後預計會換成用戶名*/}
              <Text fontSize={20} color={colors.character2} my={16}>訪客</Text> 
            </VStack>
            <Divider mb={8} />

            {/*Drawer.Screen內容*/}
            <DrawerItemList {...props} />

            {/*自訂Drawer項目：DrawerItem，目前沒放*/}
        </DrawerContentScrollView>
    );
  }
/*Drawer專區-終點*/


/*Stack專區-起點*/
const HomeStack = ({ navigation }) => {
    const { colors } = useTheme();

    return (
      <Stack.Navigator
        initialRouteName="HomeTab"
        screenOptions={{
            headerTintColor: colors.character1, // 改變返回鍵與 Header 文字的顏色
        }}
      >
        <Stack.Screen
          name="HomeTab"
          component={TheTab}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="Question"
          component={QuestionScreen}
          options={() => ({
            headerTransparent: true, // 使 Header 背景透明化
            headerTitle: "Hi！你今天感覺如何？",
            headerTitleStyle: {
                fontSize: 22,
                fontFamily: "cjkFonts",
              },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons 
                  name="close" 
                  size={32} 
                  style={{color: colors.character1}}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <Pressable onPress={() => navigation.navigate("Completion")}>
                <MaterialCommunityIcons
                  name="check"
                  size={32}
                  style={{color: colors.primary2}}
                />
              </Pressable>
              ),
          })}
        />
        <Stack.Screen
          name="Completion"
          component={CompletionScreen}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="Diary"
          component={DiaryScreen}
          options={() => ({
            headerTransparent: true, // 使 Header 背景透明化
            headerTitle: "", //文字透明化 => 直接不寫標題
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons 
                  name="close" 
                  size={32} 
                  style={{color: colors.character1}}
                />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    );
  }
/*Stack專區-終點*/

/*Tab專區-起點*/
const TheTab = () => {
    const { colors } = useTheme();
  
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarInactiveTintColor: colors.character1,
          tabBarActiveTintColor: colors.character2,
          headerShown: false,
          tabBarStyle: { height: 60, paddingTop: 13, paddingBottom: 13 },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="book" color={color} size={34} />
            ),
            headerLeft: () => (
                <MaterialCommunityIcons
                    name={"menu"}
                    size={32}
                    onPress={() => navigation.openDrawer()}
                />
              ),
          }}
        />
        <Tab.Screen
          name="ActionButton"
          component={NullScreen}
          options={{
            tabBarButton: () => <ActionButton />
          }}
        />
        <Tab.Screen
          name="Statistic"
          component={StatisticsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="heart-pulse" color={color} size={34} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
/*Tab專區-終點*/

export default Navigation;