import { View } from "react-native";
import Text from "../../reusable-components/Text";
import ChevronRight from "../../assets/icons/ChevronRight";
import ChevronUp from "../../assets/icons/ChevronUp";

export default function GameGrid({ gridData }) {
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
      {gridData.map((row, index) => (
        <View className="flex-row" key={index}>
          {row.map(cell => (
            <Cell key={cell.id} value={cell.value} isSelected={cell.selected} />
          ))}
        </View>
      ))}
    </View>
  )

  const GridButton = ({ rowOrColumn }: { rowOrColumn: "row" | "column" }) => (
    <View className="w-12 h-12 flex justify-center items-center p-1">
      <View className="w-full h-full bg-white border rounded-lg border-slate-400 flex justify-center items-center shadow-sm shadow-slate-300">
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
      {gridData.map((row, index) => (
        <GridButton rowOrColumn="row" key={index} />
      ))}
    </View>
  )

  const GridColumnButtons = () => (
    <View className="flex-row justify-end pt-2">
      {gridData[0].map((column, index) => (
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
