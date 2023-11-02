import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export const themeColors = {
    primaryTextColor: (opacity) => `rgba(255,255,255,${opacity})`,
    bgColor: (opacity) => `rgba(40,40,40,${opacity})`,
    IconGreen:(opacity)=>`rgba(28,185,86,${opacity})`,
    IconGrey:(opacity)=>`rgba(0,0,0,${opacity})`,

    
  };
  export const themeFonts={
    circularLight:'CircularSpotifyText-Light',
    circularLightItalic:'CircularSpotifyText-LightItalic',
    circularBook:'CircularStd-Book',
    circularBookItalic:'CircularStd-BookItalic',
    circularMeduim:'CircularStd-Medium',
    circularMeduimItalic:'CircularStd-MediumItalic',
    circularBold:'CircularStd-Bold',
    circularBoldItalic:'CircularStd-BoldItalic',
    circularBlack:'CircularStd-Black',
    circularBlackItalic:'CircularStd-BlackItalic',
  }