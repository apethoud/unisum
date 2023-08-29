import { useCallback } from "react";
import { SafeAreaView } from "react-native";
import { Slot } from "expo-router";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import "../global.css";

export default function () {
  const [fontsLoaded] = useFonts({
    'SourceCodeProRegular': require('../assets/fonts/SourceCodePro-Regular.ttf'),
    'SourceCodeProBold': require('../assets/fonts/SourceCodePro-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      className="flex-1 justify-center items-center"
      onLayout={onLayoutRootView}>
      <Slot />
    </SafeAreaView>
  );
}