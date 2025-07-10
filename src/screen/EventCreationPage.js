import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState, useEffect } from "react";

const EventCreationPage = ({navigation, events, setEvents}) => {
  const [eventTitle, setEventTitle] = useState("");
  const [memberName, setMemberName] = useState("");
  const [memberList, setMemberList] = useState([]);
  

  const handleSavePress = () => {
    const newEvent = {
      id: Date.now(),
      eventTitle: eventTitle,
      eventMembers: memberList,
      finalised: false,
      bills: [],
    };

    setEvents([...events, newEvent])


    navigation.navigate("EventPage", {eventId: newEvent.id});
  };

  const handleMemberAdded = () => {
    setMemberList([...memberList, memberName])
  

  }


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