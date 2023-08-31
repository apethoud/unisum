import { View } from "react-native";
import Text from "./Text";

interface MenuCardPropTypes {
  title: string;
  subhead: string;
  color: string;
}

export default function MenuCard({ title, subhead, color }: MenuCardPropTypes) {
  return (
    <View className={`w-full my-2 pt-4 px-4 pb-12 border rounded-xl 
    ${color === "kiwi" ? "border-kiwi-900 bg-kiwi-200"
      : color === "ocean" ? "border-ocean-900 bg-ocean-200"
      : color === "lavender" ? "border-lavender-900 bg-lavender-200"
      : color === "orchid" ? "border-orchid-900 bg-orchid-200"
      : color === "azalea" ? "border-azalea-900 bg-azalea-200"
      : "border-slate-900 bg-slate-200"
    }`}>
      <Text bold>{title}</Text>
      <Text small>{subhead}</Text>
    </View>
  )
}