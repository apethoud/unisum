import { View } from "react-native";
import Text from "../../reusable-components/Text";
import levelData from "../../api/exampleLevelData";

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

  const GridButton = () => (
    <View className="w-12 h-12 flex justify-center items-center p-1">
      <View className="w-full h-full border rounded-lg border-slate-600">

      </View>
    </View>
  )

  const GridButtonColumn = () => (
    <View className="flex-col pr-2">
      {levelData.gridLayout.map((row, index) => (
        <GridButton key={index} />
      ))}
    </View>
  )

  return (
    <View className="flex-row">
      <GridButtonColumn />
      <Grid />
    </View>
  )
}