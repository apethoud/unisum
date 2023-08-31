import { View } from "react-native";
import Text from "./Text";

export default function MenuCard({ title, subhead }: { title: string, subhead: string }) {
  return (
    <View className="w-full my-2 border border-slate-700 bg-slate-300">
      <Text>{title}</Text>
      <Text>{subhead}</Text>
    </View>
  )
}