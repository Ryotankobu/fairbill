import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import OngoingEventContainer from '../components/OngoingEventContainer';
import CompletedEventContainer from '../components/CompletedEventContainer';

const MainPage = ({ navigation, events, setEvents }) => {

  const newEventHandler = (targetPage) => {
    navigation.navigate(targetPage);
  };

  // const existingEventHandler = (eachEvent) => {
  //   navigation.navigate("EventPage", { eventId: eachEvent.id });
  // };

  

  return (
    <View>
      <TouchableOpacity onPress={() => newEventHandler("EventCreationPage")}>
        <Text>Creat a New Event</Text>
      </TouchableOpacity>



      <OngoingEventContainer events={events} setEvents={setEvents} navigation={navigation} />

      <CompletedEventContainer />
     
    </View>
  );
};

export default MainPage;