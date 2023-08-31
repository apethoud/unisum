import { View } from "react-native";
import Text from "../../reusable-components/Text";

const numberOfRows = 5
const numberOfColumns = 5

export default function GameGrid() {
  const Cell = () => (
    <View className="w-12 h-12 flex justify-center items-center border border-slate-300">
      <Text large>88</Text>
    </View>
  )

  const Grid = () => (
    <View className="border border-slate-300">
      {[...Array(numberOfRows)].map((e, i) => (
        <View className="flex-row" key={i}>
          {[...Array(numberOfColumns)].map((e, i) => (
            <Cell key={i} />
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