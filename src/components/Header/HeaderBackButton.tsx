import React from 'react';
import { View, Image} from "react-native";

export default function HeaderBackButton() {
  return (
    <View className='p-3 mt-6'>
        <Image source={require("../../../assets/images/back.png")} />
    </View>
  )
}
