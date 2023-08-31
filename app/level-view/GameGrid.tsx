import { View } from "react-native";
import Text from "../../reusable-components/Text";
import levelData from "../../api/exampleLevelData";

const numberOfRows = 5
const numberOfColumns = 5

export default function GameGrid() {
  const Cell = ({ value }: { value: number }) => (
    <View className="w-12 h-12 flex justify-center items-center border border-slate-300">
      <Text large>{value}</Text>
    </View>
  )

  const Grid = () => (
    <View className="border border-slate-300">
      {levelData.gridLayout.map((row, i) => (
        <View className="flex-row" key={i}>
          {row.map(cell => (
            <Cell key={cell.id} value={cell.value} />
          ))}
        </View>
      ))}
    </View>
  )
  return (
    <View>
      <Grid />
    </View>
  )
}