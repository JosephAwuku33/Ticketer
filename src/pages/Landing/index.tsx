import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import EventList from "../../components/DataList/EventList";
import LandingPageAbove from "../../components/LandingPageStuff/LandingPageAbove";

export default function LandingPage({ navigation} : any) {
  return (
    <View className="flex-1 bg-darkColor p-5 items-start">
      <LandingPageAbove/>
      <EventList />
    </View>
  );
}
