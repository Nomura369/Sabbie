import 'react-native-gesture-handler';

//引入字體
import { useFonts } from "expo-font";
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { GluestackUIProvider, StatusBar } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

import { Provider } from 'react-redux';
import Navigation from "./src/navigation/index";
import store from './src/redux/store';

SplashScreen.preventAutoHideAsync();

const App = () => {
  //引入字體
  const [fontsLoaded, fontError] = useFonts({
    "cjkFonts": require("./assets/fonts/cjkFonts_allseto_v1.11.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}} onLayout={onLayoutRootView}>
        <Provider store={store}>
          <GluestackUIProvider config={config}>
            <StatusBar />
            <Navigation />
          </GluestackUIProvider>  
        </Provider>       
      </SafeAreaView>  
    </SafeAreaProvider>
  );
};

export default App;
