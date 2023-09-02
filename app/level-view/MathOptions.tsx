import { View } from "react-native";
import Text from "../../reusable-components/Text";
import levelData from "../../api/exampleLevelData";

export default function MathOptions() {
  const Option = ({ value }: { value: number }) => (
    <View className="m-2 py-1 px-2 bg-white border rounded-lg border-slate-400 flex justify-center items-center shadow-sm shadow-slate-300">
      <Text large>{value > 0 ? `+${value}` : value}</Text>
    </View>
  )

  return (
    <View className="w-80 mt-6 p-2 border border-slate-200 flex-row flex-wrap justify-between">
      {levelData.mathOptions.map(option => (
        <Option value={option.value} key={option.id} />
      ))}
    </View>
  )
}