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
  const [gameState, setGameState] = useState(null)
  const [isGameWon, setIsGameWon] = useState(false)

  const { levelNumber } = useLocalSearchParams()

  useEffect(() => {
    async function getLevel() {
      let { data, error } = await supabase
        .from('levels')
        .select(`
          *,
          grid_cells (
            level_id,
            id,
            grid_index,
            value,
            is_selected
          ),
          math_options (
            level_id,
            id,
            value,
            is_available
          )
        `)
        .eq('level_number', levelNumber)
        if (error) {
          console.log("Error: ", error)
        }
      console.log("*** gameState: ", data[0])
      createGameGrid(null)
      setGameState(data[0])
    }
    getLevel()
  }, [])

  // useEffect(() => {
  //   function validateGameBoard() {
  //     for (let row of gameState.gridLayout) {
  //       for (let cell of row) {
  //         if (cell.value !== null && cell.value !== gameState.targetNumber) {
  //           return
  //         }
  //       }
  //     }
  //     return setTimeout(() => setIsGameWon(true), 1000)
  //   }
  //   validateGameBoard()
  // }, [gameState])

  const createGameGrid = populatedGridCells => {
    let gameGrid = []
    for (let i = 0; i < 5; i++) {
      gameGrid.push([])
      for (let j = 0; j < 5; j++) {
        gameGrid[i].push({
          is_selected: false,
          value: null
        })
      }
    }
    console.log("generated gameGrid: ", gameGrid)
    return gameGrid
  }

  return (
    <View className="flex-1 justify-center items-center">
      {gameState ? (
        <View>
          {isGameWon ? (
            <View>
              <Text huge>Great job! 🎉</Text>
            </View>
          ): (
            <>
              <Text centered>{`Unisum\n${gameState.pack} #${gameState.level_number}`}</Text>
              <TargetNumber number={gameState.target_number} />
              <GameGrid
                gameState={gameState}
                setGameState={setGameState}
              />
              {/* <MathOptions
                gameState={gameState}
                setGameState={setGameState}
              /> */}
              <GameOptions />
            </>
          )}
        </View>
      ) : (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
    </View>
  )
}