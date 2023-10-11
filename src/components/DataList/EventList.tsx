import React from "react";
import { FlatList, View } from "react-native";
import EventItem from "./EventItem"; // Import the EventItem component
import { events } from "../../data/eventsData"; // Import the events array

const EventList: React.FC = () => {

  return (
    
    <>
        <FlatList
          data={events}
          keyExtractor={(item : any) => item.id.toString() }
          renderItem={({ item }) => <EventItem event={item}  />}
        />
    </>
  );
};

export default EventList;
