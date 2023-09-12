import { Pressable, View } from "react-native";
import Text from "../../reusable-components/Text";

export default function MathOptions({ gameState, setGameState }) {
  const applyMathOperation = (operation) => {
    let tempGameState = { ...gameState }

    for (let row of tempGameState.gridLayout) {
      for (let cell of row) {
        if (cell.selected) {
          if (cell.value !== null) {
            cell.value = cell.value + operation
          }
          cell.selected = false
        }
      }
    }

    setGameState(tempGameState)
  }

  const Option = ({ value }: { value: number }) => (
    <Pressable
      onPress={() => applyMathOperation(value)}>
      <View className="m-2 py-1 px-2 bg-white border rounded-lg border-slate-400 flex justify-center items-center shadow-sm shadow-slate-300">
        <Text large>{value > 0 ? `+${value}` : value}</Text>
      </View>
    </Pressable>
  )

  return (
    <View className="w-80 mt-6 p-2 border border-slate-200 flex-row flex-wrap justify-between">
      {gameState.mathOptions.map(option => (
        <Option value={option.value} key={option.id} />
      ))}
    </View>
  )
}