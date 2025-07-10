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
import TButton from "../components/TButton";
import BillDisplayContainer from "../components/BillDisplayContainer";

const EventPage = ({ navigation, events, setEvents, route }) => {
  const eventId = route.params.eventId;
  const showingEvent = events.find(e => e.id === eventId)
  const [modalVisible, setModalVisible] = useState(false);
  const [bill, setBill] = useState("")
  const [editingBill, setEditingBill] = useState(null)
  

  const buttonHandler = (targetPage) => {
    navigation.navigate(targetPage);
  };

  // const deleteButtonHandler = (deleteBillId) => {
  //   const updatedEvents = events.map((eachEvent) => 
  //     eachEvent.id === eventId ? {
  //       ...eachEvent,
  //       bills: eachEvent.bills.filter((bill) => bill.id !== deleteBillId)
  //     } : eachEvent
  //   );
  //   setEvents(updatedEvents);
  // }

  // const editButtonHandler = (editingBillId) => {
  //   const foundBill = showingEvent.bills.find((bill) => bill.id === editingBillId);
  //   if (foundBill) {
  //     setEditingBill(foundBill);
  //     setModalVisible(true)
  //   }
  // }

  useEffect(() => {
    if (!bill || !showingEvent) return;

    const updatedEvents = events.map((event) => {
      if (event.id !== eventId) return event;

      // If editing, replace the bill. Otherwise, add new.
      const isEditing = event.bills.some((b) => b.id === bill.id);
      const updatedBills = isEditing
        ? event.bills.map((b) => (b.id === bill.id ? bill : b))
        : [...event.bills, bill];

      return { ...event, bills: updatedBills };
    });

    setEvents(updatedEvents);
    setBill(null);
    setEditingBill(null);
  }, [bill]);

  return (
    <View>
      {modalVisible ? (
        <EventPageModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setBill={setBill}
          showingEvent={showingEvent}
          editingBill={editingBill}
          setEditingBill={setEditingBill}
        />
      ) : showingEvent ? (
        <View>
          <Text>{showingEvent.eventTitle}</Text>

          <TButton
            title="New Bill"
            iconName="plus-circle"
            iconColor="red"
            iconSize={20}
            onPress={() => setModalVisible(true)}
          />

          <BillDisplayContainer
            showingEvent={showingEvent}
            setEvents={setEvents}
            setModalVisible={setModalVisible}
            setEditingBill={setEditingBill}
          />
          {/* 
          {showingEvent.bills.map((eachBill, index) => (
            <View
              key={index}
              style={{ backgroundColor: "red", marginTop: "10" }}
            >
              <Text>
                {eachBill.billTitle}-{eachBill.amount}-{eachBill.paidBy}-
                {eachBill.involvedMembers}
              </Text>
              <TouchableOpacity
                onPress={() => deleteButtonHandler(eachBill.id)}
              >
                <Text>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => editButtonHandler(eachBill.id)}>
                <Text>Edit</Text>
              </TouchableOpacity>
            </View>
          ))} */}

          <TButton
            title="Finalise"
            iconName="check-square"
            iconColor="red"
            iconSize={20}
            onPress={() => buttonHandler("EventResultPage")}
          />
        </View>
      ) : (
        <View>
          <Text>Event not found</Text>
          <Text>{eventId}</Text>
        </View>
      )}
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
