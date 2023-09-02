import { View } from "react-native";
import Text from "../../reusable-components/Text";
import TargetNumber from "./TargetNumber";
import GameGrid from "./GameGrid";
import MathOptions from "./MathOptions";
import GameOptions from "./GameOptions";

export default function LevelView() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text centered>{`Unisum\nAdvanced #4`}</Text>
      <TargetNumber number={15} />
      <GameGrid />
      <MathOptions />
      <GameOptions />
    </View>
  )
}