import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const MainPage = ({navigation, events}) => {

  const buttonhandler = (targetPage) => {
    navigation.navigate(targetPage)
  }

  const existingEventHandler = (eachEvent) => {
    navigation.navigate("EventPage", { eventId: eachEvent.id });
  }


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
        <TouchableOpacity
          onPress={() => existingEventHandler(eachEvent)}
          key={index}
        >
          <Text>{eachEvent.eventTitle}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default MainPage;