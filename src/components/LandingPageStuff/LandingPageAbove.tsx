import React from 'react';
import { View, Text, Image} from "react-native";

export default function LandingPageAbove() {
  return (
    <>
      <View>
          <Text
            style={{ fontFamily: "Poppins-Regular" }}
            className="text-md text-whiteColor"
          >
            Hello,Welcome there
          </Text>
        </View>

        <View className="mt-10">
          <Text
            style={{ fontFamily: "Poppins-Regular" }}
            className="text-lightGray text-sm"
          >
            Featured events
          </Text>
        </View>

        <View className="mt-6 h-1/4 w-full rounded-t-xl ">
          <Image
            className="w-full h-full"
            source={{
              uri: "https://images.unsplash.com/photo-1520600661691-801f48869ee4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            }}
          />
        </View>
        <View className=" h-1/6 w-full bg-darkColor rounded-bl-xl ">
          <Text
            style={{ fontFamily: "Poppins-Regular" }}
            className="text-xl m-3 text-whiteColor"
          >
            LA MEME RAVE
          </Text>
          <Text
            style={{ fontFamily: "Poppins-Regular" }}
            className="text-sm ml-3 mt-1 text-whiteColor"
          >
            28th December 2023
          </Text>
          <Text className="text-xs ml-3 text-lightGray">Labadi Beach</Text>
        </View>
        <View className="mb-8" />

        <View className="flex items-center justify-center w-full">
          <Text
            className=" text-lightGray text-center"
            style={{ fontFamily: "Poppins-Regular" }}
          >
            Upcoming Events
          </Text>
        </View>

        <View className="mb-4" />

    </>
  )
}
