import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const MainPage = ({navigation}) => {

  const buttonhandler = (targetPage) => {
    navigation.navigate(targetPage)

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
    </View>
  );
}

export default MainPage;