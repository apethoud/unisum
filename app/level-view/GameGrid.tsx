import { Pressable, View } from "react-native";
import Text from "../../reusable-components/Text";
import ChevronRight from "../../assets/icons/ChevronRight";
import ChevronUp from "../../assets/icons/ChevronUp";

export default function GameGrid({ gameState, setGameState }) {
  const selectCells = (dimension, index) => {
    let tempGameState = { ...gameState }
    // First, clear all selected cells.
    for (let row of tempGameState.gridLayout) {
      for (let cell of row) {
        cell.selected = false
      }
    }

    if (dimension === "row") {
      for (let cell of tempGameState.gridLayout[index]) {
        cell.selected = !cell.selected
      }
    } else if (dimension === "column") {
      for (let row of tempGameState.gridLayout) {
        row[index].selected = !row[index].selected
      }
    } else {
      console.log("selectCells error thrown")
    }

    setGameState(tempGameState)
  }

  const Cell = ({ value, isSelected }: { value: number, isSelected: boolean }) => (
    <View className={`w-12 h-12 flex justify-center items-center border 
      ${isSelected
        ? "bg-lavender-200 border-lavender-500"
        : "bg-white border-slate-300"
      }`}>
      <Text large>{value}</Text>
    </View>
  )

  const Grid = () => (
    <View className="border border-slate-300">
      {gameState.gridLayout.map((row, index) => (
        <View className="flex-row" key={index}>
          {row.map(cell => (
            <Cell key={cell.id} value={cell.value} isSelected={cell.selected} />
          ))}
        </View>
      ))}
    </View>
  )

  const GridButton = ({ dimension, index }: { dimension: "row" | "column", index: number }) => (
    <Pressable
      onPress={() => selectCells(dimension, index)}>
      <View className="w-12 h-12 flex justify-center items-center p-1">
        <View className="w-full h-full bg-white border rounded-lg border-slate-400 flex justify-center items-center shadow-sm shadow-slate-300">
          {dimension === "row" ? (
            <ChevronRight />
          ) : (
            <ChevronUp />
          ) }
        </View>
      </View>
    </Pressable>
  )

  const GridRowButtons = () => (
    <View className="flex-col pr-2">
      {gameState.gridLayout.map((row, index) => (
        <GridButton dimension="row" key={index} index={index} />
      ))}
    </View>
  )

  const GridColumnButtons = () => (
    <View className="flex-row justify-end pt-2">
      {gameState.gridLayout[0].map((column, index) => (
        <GridButton dimension="column" key={index} index={index} />
      ))}
    </View>
  )

  return (
    <View>
      <View className="flex-row">
        <GridRowButtons />
        <Grid />
      </View>
      <GridColumnButtons />
    </View>
  )
}
