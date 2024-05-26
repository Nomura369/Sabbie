import { DefaultTheme } from '@react-navigation/native';

const TheTheme = {
   ...DefaultTheme,
   colors: {
     ...DefaultTheme.colors,
     //日記背景等的白色直接打 white 就好
     bg: '#F5F5F5', //一般背景
     primary1: "#71BD80",  //星砂瓶頁面按鈕等(棕色)
     primary2: "#B7E5C0", //主頁的action button等(綠色)
     primary3: "#E4E3E3", //登入頁面按鈕等(深灰色)
     character1: '#515151', //通常字體與icon顏色(偏淺)
     character2: "#1D1D1D", //部分字體與icon顏色(偏深)
     happy: [
      "#F7E098", "#FFC971", "#FEEA76", 
      "#EFFD5F", "#FFDB1C", "#FFC30B"
     ],
     angry: [
      "#FBB9B6", "#F7B3C2", "#F58EA3", 
      "#F06781", "#E44762", "#D63044"
     ],
     sad: [
      "#ADCFDD", "#A7BBE0", "#6B88CA", 
      "#25A2DA", "#265EA6", "#2C5E73"
     ],
     fear: [
      "#C2B4D8", "#C8AFCD", "#9975A3", 
      "#83548B", "#7E5D87", "#A052B2"
     ]
   },
 };

 export default TheTheme;