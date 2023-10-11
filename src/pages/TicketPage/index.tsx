import React from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { useNavigation } from '@react-navigation/native';
import { selectPayment, selectedPaymentOption } from '../../redux/eventSlice';


export default function TicketPage() {
  const selectedEvent = useAppSelector((state) => state.event.selectedEvent);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const navigateToPaymentPage = (paymentOption: string, paymentOptionType: number) => {
    dispatch(selectPayment(paymentOption));
    dispatch(selectedPaymentOption(paymentOptionType));
    navigation.navigate("PaymentPage" as never);
  
  };

  return (
    <SafeAreaView className='bg-darkColor flex-1 p-5'>
      <Text style={{fontFamily: "Poppins-Regular"}} className='text-whiteColor text-center'>
        Your Selected Event
      </Text>

      <View className="mt-6 h-1/2 w-full rounded-t-xl ">
          <Image
            className="w-full h-full"
            source={{
              uri: selectedEvent?.imgUrl,
            }}
          />
        </View>
        <View className=" h-1/6 w-full bg-darkColor rounded-bl-xl ">
          <Text
            style={{ fontFamily: "Poppins-Regular" }}
            className="text-xl m-3 text-whiteColor"
          >
            {selectedEvent?.title}
          </Text>
          <Text
            style={{ fontFamily: "Poppins-Regular" }}
            className="text-sm ml-3 mt-1 text-whiteColor"
          >
            {selectedEvent?.date}
          </Text>
          <Text className="text-xs ml-3 text-lightGray">{selectedEvent?.location}</Text>
        </View>
        <View className="mb-3" />
      
        <View className='flex flex-row items-start gap-7'>
          <TouchableOpacity onPress={() => navigateToPaymentPage('Regular', selectedEvent?.payment.Regular as number)} className='w-1/4 h-24 p-2 bg-whiteColor rounded-lg border border-whiteColor'>
            <Text className='text-center my-auto text-darkColor text-3xl '>
              RG
            </Text>
            <Text className='text-center text-darkColor text-xs font-light'>
              GHS{selectedEvent?.payment.Regular}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigateToPaymentPage('VIP', selectedEvent?.payment.VIP as number)} className='w-1/4 h-24 p-2 bg-yellowOrange rounded-lg border-2 border-whiteColor' >
          <Text className='text-center my-auto text-darkColor text-3xl '>
              VIP
            </Text>
            <Text className='text-center text-darkColor text-xs font-light'>
              GHS{selectedEvent?.payment.VIP}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigateToPaymentPage('VVIP', selectedEvent?.payment.VVIP as number)} className='w-1/4 h-24 p-2 bg-blueLight rounded-lg border-2 border-whiteColor'>
          <Text className='text-center my-auto text-darkColor text-3xl '>
              VVIP
            </Text>
            <Text className='text-center text-darkColor text-xs font-light'>
              GHS{selectedEvent?.payment.VVIP}
            </Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}
