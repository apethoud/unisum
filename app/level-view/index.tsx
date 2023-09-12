import { useEffect, useState } from "react";
import { View } from "react-native";
import Text from "../../reusable-components/Text";
import TargetNumber from "./TargetNumber";
import GameGrid from "./GameGrid";
import MathOptions from "./MathOptions";
import GameOptions from "./GameOptions";
import exampleLevelData from "../../api/exampleLevelData";

export default function LevelView() {
  const [gameState, setGameState] = useState(exampleLevelData)
  const [isGameWon, setIsGameWon] = useState(false)

  useEffect(() => {
    function validateGameBoard() {
      for (let row of gameState.gridLayout) {
        for (let cell of row) {
          if (cell.value !== null && cell.value !== gameState.targetNumber) {
            return
          }
        }
      }
      return setIsGameWon(true)
    }
    validateGameBoard()
  }, [gameState])

  return (
    <View className="flex-1 justify-center items-center">
      {isGameWon ? (
        <View>
          <Text huge>Great job! 🎉</Text>
        </View>
      ): (
        <>
          <Text centered>{`Unisum\n${gameState.pack} #${gameState.level}`}</Text>
          <TargetNumber number={gameState.targetNumber} />
          <GameGrid
            gameState={gameState}
            setGameState={setGameState}
          />
          <MathOptions
            gameState={gameState}
            setGameState={setGameState}
          />
          <GameOptions />
        </>
      )}
    </View>
  )
}