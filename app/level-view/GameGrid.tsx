import { View } from "react-native";
import Text from "../../reusable-components/Text";
import levelData from "../../api/exampleLevelData";
import ChevronRight from "../../assets/icons/ChevronRight";
import ChevronUp from "../../assets/icons/ChevronUp";

export default function GameGrid() {
  const Cell = ({ value }: { value: number }) => (
    <View className="w-12 h-12 flex justify-center items-center border border-slate-300">
      <Text large>{value}</Text>
    </View>
  )

  const Grid = () => (
    <View className="border border-slate-300">
      {levelData.gridLayout.map((row, index) => (
        <View className="flex-row" key={index}>
          {row.map(cell => (
            <Cell key={cell.id} value={cell.value} />
          ))}
        </View>
      ))}
    </View>
  )

  const GridButton = ({ rowOrColumn }: { rowOrColumn: "row" | "column" }) => (
    <View className="w-12 h-12 flex justify-center items-center p-1">
      <View className="w-full h-full border rounded-lg border-slate-600 flex justify-center items-center">
        {rowOrColumn === "row" ? (
          <ChevronRight />
        ) : (
          <ChevronUp />
        ) }
      </View>
    </View>
  )

  const GridRowButtons = () => (
    <View className="flex-col pr-2">
      {levelData.gridLayout.map((row, index) => (
        <GridButton rowOrColumn="row" key={index} />
      ))}
    </View>
  )

  const GridColumnButtons = () => (
    <View className="flex-row justify-end pt-2">
      {levelData.gridLayout[0].map((column, index) => (
        <GridButton rowOrColumn="column" key={index} />
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
