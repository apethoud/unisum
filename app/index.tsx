import { useCallback } from "react";
import Text from "../reusable-components/Text";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from "react-native";

export default function Home() {
  return (
    <>
      <Text large>Unisum</Text>
      <View className="w-1/2 flex items-center">
        <Text centered>a number puzzle game by Andrew Pethoud</Text>
      </View>
    </>
  )
}