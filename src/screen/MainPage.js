import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const MainPage = ({ navigation, events, setEvents }) => {
  const buttonhandler = (targetPage) => {
    navigation.navigate(targetPage);
  };

  const existingEventHandler = (eachEvent) => {
    navigation.navigate("EventPage", { eventId: eachEvent.id });
  };

  const eventDeletehandler = (deleteEventId) => {
    const eventsAfterDeleting = events.filter(
      (eachEvent) => eachEvent.id !== deleteEventId
    );
    setEvents(eventsAfterDeleting)
  };

  return (
    <View>
      <Text>main_page in feature/navigationMaking branch</Text>

      <TouchableOpacity onPress={() => buttonhandler("EventCreationPage")}>
        <Text>go to EventCreationPage</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => buttonhandler("EventPage")}>
        <Text>Existing Event Button directs to EventCreationPage</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => buttonhandler("EventResultPage")}>
        <Text>completed Event Button directs to EventResultPage</Text>
      </TouchableOpacity>

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

export default MainPage;