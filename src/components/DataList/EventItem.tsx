import React from 'react';
import { Text, View, TouchableOpacity } from "react-native";
import IEvents from '../../types/Event';
import { useAppDispatch } from '../../redux/hooks';
import { selectEvent } from '../../redux/eventSlice';
import { useNavigation } from '@react-navigation/native';


interface EventItemProps {
    event: IEvents;
}

const EventItem: React.FC<EventItemProps> = ({ event }) => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation();

    const navigateToPage = () => {
      dispatch(selectEvent(event))
      navigation.navigate("TicketPage" as never);
    };
    return (
      <TouchableOpacity className="w-96 h-1/4 " onPress={navigateToPage}>
        <Text className='text-md text-whiteColor uppercase' style={{fontFamily: "Poppins-Regular"}}>{event.title}</Text>
        <Text className='text-xs text-lightGray' style={{fontFamily: "Poppins-Regular"}}>{event.location}</Text>
        <View className='mt-5 border border-opacity-5 border-lightGray '/>
      </TouchableOpacity>
    );
  };

export default EventItem;