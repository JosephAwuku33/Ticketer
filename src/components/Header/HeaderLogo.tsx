import React from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HeaderLogo() {
  return (
    <SafeAreaView className="p-4">
      <Image source={require("../../../assets/images/FestIcon.png")} />
    </SafeAreaView>
  );
}
