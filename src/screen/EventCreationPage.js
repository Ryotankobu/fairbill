import { View, Text, TouchableOpacity } from "react-native";
import React from 'react'

const EventCreationPage = ({navigation}) => {

  const buttonhandler = () => {
    navigation.navigate("EventPage");
  };

  return (
    <View>
      <Text>this is EventCreationPage</Text>

      <TouchableOpacity onPress={buttonhandler}>
          <Text>go to EventPage</Text>
      </TouchableOpacity>

    </View>
  );
}

export default EventCreationPage;