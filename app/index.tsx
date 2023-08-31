import { useCallback } from "react";
import Text from "../reusable-components/Text";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from "react-native";
import MenuCard from "../reusable-components/MenuCard";

const levelPacks = [
  {
    id: 1,
    name: "Beginner",
    levels: 25,
  },
  {
    id: 2,
    name: "Intermediate",
    levels: 25,
  },
  {
    id: 3,
    name: "Advanced",
    levels: 25,
  },
  {
    id: 4,
    name: "Expert",
    levels: 25,
  },
]

export default function Home() {
  return (
    <>
      <Text large>Unisum</Text>
      <View className="w-full flex items-center mb-6">
        <Text centered>{`a number puzzle game\nby Andrew Pethoud`}</Text>
      </View>
      {levelPacks.map(pack => (
        <MenuCard title={pack.name} subhead={`0 / ${pack.levels} Completed`} key={pack.id} />
      ))}
    </>
  )
}