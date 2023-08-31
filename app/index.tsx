import { useCallback } from "react";
import Text from "../reusable-components/Text";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from "react-native";
import MenuCard from "../reusable-components/MenuCard";
import { useRouter } from "expo-router";

const levelPacks = [
  {
    id: 1,
    name: "Beginner",
    levels: 25,
    color: "ocean",
  },
  {
    id: 2,
    name: "Intermediate",
    levels: 25,
    color: "lavender",
  },
  {
    id: 3,
    name: "Advanced",
    levels: 25,
    color: "orchid",
  },
  {
    id: 4,
    name: "Expert",
    levels: 25,
    color: "azalea",
  },
]

export default function Home() {
  const navigation = useRouter()
  
  const navigateToLevel = () => {
    navigation.push('level-view')
  }
  return (
    <>
      <Text large>Unisum</Text>
      <View className="w-full flex items-center mb-6">
        <Text small italic centered>{`a number puzzle game\nby Andrew Pethoud`}</Text>
      </View>
      {levelPacks.map(pack => (
        <MenuCard
          title={pack.name}
          subhead={`0 / ${pack.levels} Completed`}
          color={pack.color}
          onPress={navigateToLevel}
          key={pack.id} />
      ))}
    </>
  )
}