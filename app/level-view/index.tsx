import { View } from "react-native";
import Text from "../../reusable-components/Text";
import TargetNumber from "./TargetNumber";

export default function LevelView() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text centered>{`Unisum\nAdvanced #4`}</Text>
      <TargetNumber number={15} />
    </View>
  )
}