import { View } from "react-native";
import Text from "../../reusable-components/Text";
import { useLocalSearchParams } from "expo-router";

export default function LevelList() {
  const params = useLocalSearchParams()
  console.log("params: ", params)
  return (
    <View>
      <Text>LevelList</Text>
    </View>
  )
}