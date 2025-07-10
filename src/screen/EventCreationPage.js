import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import TButton from "../components/TButton";
import MemberListContainer from "../components/MemberListContainer";

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

      <MemberListContainer memberList={memberList} />

      <TButton
        title="Save"
        iconName="floppy-o"
        iconColor="red"
        iconSize={20}
        onPress={handleSavePress}
      />
    </View>
  );
}

export default EventCreationPage;