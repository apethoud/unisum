import { View } from "react-native";
import 'react-native-url-polyfill/auto'
import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import MenuCard from "../reusable-components/MenuCard";

export default function TierList() {
  const [tiers, setTiers] = useState(null)

  useEffect(() => {
    async function getTiers() {
      let { data, error } = await supabase
        .from('tiers')
        .select(`*`)
        if (error) {
          console.log("Error: ", error)
        }
      console.log("*** data: ", data)
      setTiers(data)
    }
    getTiers()
  }, [])

  const navigation = useRouter()
  
  const navigateToLevelList = (tierId) => {
    navigation.push({ pathname: 'level-list', params: { tier_id: tierId } })
  }

  return (
    <View className="w-full">
      {tiers && tiers.map(tier => (
        <MenuCard
          title={tier.name}
          subhead={`0 / X Completed`}
          color={tier.theme_color}
          onPress={() => navigateToLevelList(tier.id)}
          key={tier.id} />
      ))}
    </View>
  )
}