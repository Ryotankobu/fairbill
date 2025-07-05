import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState, useEffect } from "react";

const EventCreationPage = ({navigation, eventDetails, setEventDetails}) => {
  const [eventTitle, setEventTitle] = useState("");
  const [memberName, setMemberName] = useState("");
  const [memberList, setMemberList] = useState([]);

  const handleSavePress = () => {

    setEventDetails([
      ...eventDetails,
      {
        eventTitle: eventTitle,
        eventmembers: memberList
      }
    ])

    navigation.navigate("EventPage");
  };

  const handleMemberAdded = () => {
    setMemberList([...memberList, memberName])
  

  }

  // useEffect(() => {
  // console.log(eventDetails)
  // }, [memberList])

  return (
    <View>
      <Text>this is EventCreationPage</Text>

      <TextInput
        placeholder="Event Title"
        value={eventTitle}
        onChangeText={setEventTitle}
      />

      <TextInput
        placeholder="Member Name"
        value={memberName}
        onChangeText={setMemberName}
        onSubmitEditing={() => handleMemberAdded()}
      />
    {memberList.map((eachMember, index) => (
        <Text key={index}>{eachMember}</Text>
      ))}

      <TouchableOpacity onPress={handleSavePress}>
        <Text>Save button, go to EventPage</Text>
      </TouchableOpacity>
    </View>
  );
}

export default EventCreationPage;