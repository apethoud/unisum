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
    <View className="flex-1 justify-center items-center w-full">
      <View className="flex-row">
        {levels && levels.map(level => (
          <View className="relative m-4 h-12 w-12 rounded-full bg-slate-200 border border-slate-600" key={level.id}>
            <View className="absolute inset-0 w-full h-full">
              <View className="flex-1 w-full h-full justify-center items-center">
                <Text bold>{level.level_number}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}