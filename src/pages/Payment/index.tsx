import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SelectList } from "react-native-dropdown-select-list";
import { useAppSelector } from "../../redux/hooks";
import { useAPI } from "../../api/payBoxService";

export default function PaymentPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [selectedNetworkOption, setSelectedNetworkOption] =
    useState<string>("");
  const network_data = [
    { key: "1", value: "MTN" },
    { key: "2", value: "Vodafone" },
    { key: "3", value: "AirtelTigo" },
  ];

  const selectedPayment = useAppSelector(
    (state) => state.event.selectedPayment
  );
  const selectedEvent = useAppSelector((state) => state.event.selectedEvent);
  const selectedPaymentOption = useAppSelector(
    (state) => state.event.selectedPaymentOption
  );

  const validatePhoneNumber = () => {
    if (phoneNumber.trim() === "") {
      //Alert.alert("Error", "Phone number cannot be empty");
      ToastAndroid.show("Phone number cannot be empty", ToastAndroid.LONG);
      return;
    }

    // Check if the phone number matches the format +233XXXXXXXXX
    const phoneNumberRegex = /^\+233\d{9}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
      //Alert.alert("Error", "Invalid phone number format");
      ToastAndroid.show("Invalid phone number format", ToastAndroid.LONG);
      return;
    }
  };

  const handlePayment = () => {
    setIsLoading(true);
    useAPI(phoneNumber, selectedPaymentOption as number, selectedNetworkOption)
      .then(() => {
        setIsLoading(false);
        Alert.alert("Success", "Wait to enter MoMo Pin");
      })
      .catch((error) => {
        setIsLoading(false);
        Alert.alert("Error", "Payment failed. Please try again later.");
        console.error(error);
      });
  };

  const makePayment = () => {
    validatePhoneNumber();
    handlePayment();
  };

  return (
    <SafeAreaView className="flex-1 bg-darkColor p-5">
      <ScrollView>
        <Text
          style={{ fontFamily: "Poppins-Regular" }}
          className="text-whiteColor text-center"
        >
          Payment
        </Text>

        <View className="flex flex-col items-start p-4 h-7/8 mt-3 w-full border-2 border-lightGray rounded-xl">
          <Text
            style={{ fontFamily: "Poppins-Bold" }}
            className="uppercase mt-2 text-whiteColor text-xl"
          >
            {selectedEvent?.title}
          </Text>
          <Text
            style={{ fontFamily: "Poppins-Light" }}
            className="text-xs text-whiteColor break-words"
          >
            {selectedEvent?.details}
          </Text>
          <View className="mt-3" />

          <View className="flex flex-row gap-6  items-start">
            <Text
              style={{ fontFamily: "Poppins-Light" }}
              className="text-whiteColor text-xs "
            >
              📌{selectedEvent?.location}
            </Text>

            <Text
              style={{ fontFamily: "Poppins-Light" }}
              className="text-whiteColor text-xs"
            >
              {selectedEvent?.date}
            </Text>
          </View>
          <View className="mt-2" />
          <View className="flex flex-row gap-14 items-start">
            <Text
              style={{ fontFamily: "Poppins-Bold" }}
              className="text-lightGray text-xl "
            >
              Packages
            </Text>

            <Text
              style={{ fontFamily: "Poppins-Bold" }}
              className="text-whiteColor text-xl"
            >
              {selectedPayment}
            </Text>
          </View>

          <View className="mt-2" />
          <View className="flex flex-row gap-16 items-start">
            <Text
              style={{ fontFamily: "Poppins-Bold" }}
              className="text-lightGray text-xl "
            >
              Amount
            </Text>

            <Text
              style={{ fontFamily: "Poppins-Bold" }}
              className="text-whiteColor text-xl"
            >
              GHS{selectedPaymentOption}.00
            </Text>
          </View>

          <View className="mt-2" />
          <View className="flex flex-row gap-16 items-start">
            <Text
              style={{ fontFamily: "Poppins-Bold" }}
              className="text-lightGray text-xl "
            >
              Method
            </Text>

            <Text
              style={{ fontFamily: "Poppins-Bold" }}
              className="text-whiteColor text-xl"
            >
              MoMo
            </Text>
          </View>

          <>
            <SelectList
              boxStyles={{ width: "73%"}}
              dropdownStyles={{width: "73%"}}
              
              placeholder="Network Choice"
              fontFamily="Poppins-Bold"
              setSelected={(val: string) => setSelectedNetworkOption(val)}
              inputStyles={{color: "white", width: "73%"}}
              dropdownTextStyles={{color: "white"}}
              data={network_data}
              save="value"
            />
          </>

          <View className="flex items-start justify-start w-full mt-3">
            <TextInput
              placeholderTextColor={"grey"}
              placeholder="+233XXXXXXXXX"
              value={phoneNumber}
              onChangeText={(value) => setPhoneNumber(value)}
              keyboardType="phone-pad"
              className="border-2 border-lightGray p-2 w-full rounded-lg text-whiteColor"
            />
          </View>

          <View className="flex flex-row items-end justify-end w-full mt-3">
            {isLoading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              <TouchableOpacity
                onPress={() => makePayment()}
                className="bg-yellowOrange w-1/3 h-6/7 p-2 rounded-xl "
              >
                <Text
                  style={{ fontFamily: "Poppins-Bold" }}
                  className="text-whiteColor text-center"
                >
                  PAY
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
