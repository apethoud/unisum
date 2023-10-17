import { useEffect, useState } from "react";
import { View } from "react-native";
import Text from "../../reusable-components/Text";
import TargetNumber from "./TargetNumber";
import GameGrid from "./GameGrid";
import MathOptions from "./MathOptions";
import GameOptions from "./GameOptions";
import exampleLevelData from "../../api/exampleLevelData";
import { useLocalSearchParams } from "expo-router";
import { supabase } from "../../supabaseClient";

export default function LevelView() {
  const [gameState, setGameState] = useState(exampleLevelData)
  const [isGameWon, setIsGameWon] = useState(false)

  const { levelNumber } = useLocalSearchParams()

  useEffect(() => {
    async function getLevel() {
      let { data, error } = await supabase
        .from('levels')
        .select(`*`)
        .eq('level_number', levelNumber)
        if (error) {
          console.log("Error: ", error)
        }
      console.log("*** level: ", data)
      // setLevels(data)
    }
    getLevel()
  }, [])

  useEffect(() => {
    function validateGameBoard() {
      for (let row of gameState.gridLayout) {
        for (let cell of row) {
          if (cell.value !== null && cell.value !== gameState.targetNumber) {
            return
          }
        }
      }
      return setTimeout(() => setIsGameWon(true), 1000)
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