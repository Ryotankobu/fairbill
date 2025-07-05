import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Modal,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
import EventPageModal from "./EventPageModal";

const EventPage = ({ navigation, eventDetails }) => {
  const latestEvent = eventDetails[eventDetails.length - 1];
  const [modalVisible, setModalVisible] = useState(false);

  const buttonhandler = (targetPage) => {
    navigation.navigate(targetPage);
  };

  return (
    <View>
      {modalVisible ? (
        <EventPageModal
          modalVisivle={modalVisible}
          setModalVisible={setModalVisible}
        />
      ) : (
        <View>
          <Text>this is EventPage</Text>

          <Text>{latestEvent.eventTitle}</Text>

          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text>Show modal</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => buttonhandler("EventResultPage")}>
            <Text>go to EventResultPage</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <Text>This is a modal</Text>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal> */}



      {/* <Text>this is EventPage</Text>

      <Text>{latestEvent.eventTitle}</Text>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Show modal</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => buttonhandler("EventResultPage")}>
        <Text>go to EventResultPage</Text>
      </TouchableOpacity> */}


      
    </View>
  );
};

const styles = StyleSheet.create({
 modalContainer: {
  backgroundColor: "blue",
  height: "100%",

 }
});

export default EventPage;
