import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const OngoingEventContainer = ({ navigation, events, setEvents }) => {

  const eventDeletehandler = (deleteEventId) => {
    const eventsAfterDeleting = events.filter(
      (eachEvent) => eachEvent.id !== deleteEventId
    );
    setEvents(eventsAfterDeleting);
  };

  const existingEventHandler = (eachEvent) => {
    navigation.navigate("EventPage", { eventId: eachEvent.id });
  };



  return (
    <View style={{ backgroundColor: "blue", marginBottom: "20" }}>
      {events.map((eachEvent, index) => (
        <View key={index} style={{ backgroundColor: "red", marginTop: "10" }}>
          <Text>
            {eachEvent.eventTitle}-{eachEvent.id}
          </Text>
          <TouchableOpacity onPress={() => existingEventHandler(eachEvent)}>
            <Text>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => eventDeletehandler(eachEvent.id)}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default OngoingEventContainer;
