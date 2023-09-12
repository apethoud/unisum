import { useState } from "react";
import { View } from "react-native";
import Text from "../../reusable-components/Text";
import TargetNumber from "./TargetNumber";
import GameGrid from "./GameGrid";
import MathOptions from "./MathOptions";
import GameOptions from "./GameOptions";
import exampleLevelData from "../../api/exampleLevelData";

export default function LevelView() {
  const [gameState, setGameState] = useState(exampleLevelData)

  return (
    <View className="flex-1 justify-center items-center">
      <Text centered>{`Unisum\n${gameState.pack} #${gameState.level}`}</Text>
      <TargetNumber number={gameState.targetNumber} />
      <GameGrid
        gameState={gameState}
        setGameState={setGameState}
      />
      <MathOptions options={gameState.mathOptions} />
      <GameOptions />
    </View>
  )
}