import React from "react";
import { TouchableOpacity, Image } from "react-native";

export default function NotificationIcon() {
  return (
    <TouchableOpacity className="p-4">
      <Image
        source={require("../../assets/images/notification_bell.png")}
      />
    </TouchableOpacity>
  );
}
