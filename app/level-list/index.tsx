import { View } from "react-native";
import Text from "../../reusable-components/Text";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export default function LevelList() {
  const [levels, setLevels] = useState(null)
  
  const { tier_id } = useLocalSearchParams()

  useEffect(() => {
    async function getLevels() {
      let { data, error } = await supabase
        .from('levels')
        .select(`*`)
        .eq('tier_id', tier_id)
        if (error) {
          console.log("Error: ", error)
        }
      console.log("*** data: ", data)
      setLevels(data)
    }
    getLevels()
  }, [])

  const navigation = useRouter()
  
  // const navigateToLevelList = (tierId) => {
  //   navigation.push({ pathname: 'level-list', params: { tier_id: tierId } })
  // }

  return (
    <View className="w-full">
      {levels && levels.map(level => (
        <Text key={level.id}>Target Number: {level.target_number}</Text>
      ))}
    </View>
  )
}