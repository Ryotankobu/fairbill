import { View, Text, TouchableOpacity } from "react-native";
import React from 'react'

const EventPage = ({navigation}) => {

  const buttonhandler = (targetPage) => {
    navigation.navigate(targetPage);
  };

  return (
    <View>
      <Text>this is EventPage</Text>

       <TouchableOpacity onPress={() => buttonhandler("EventResultPage")}>
            <Text>go to EventResultPage</Text>
        </TouchableOpacity>
    </View>
  )
}

export default EventPage;