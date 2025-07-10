import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Modal,
  StyleSheet,
} from "react-native";
import React from "react";

const BillDisplayContainer = ({
  showingEvent,
  setEvents,
  setModalVisible,
  setEditingBill,
}) => {
  const deleteButtonHandler = (deleteBillId) => {
    const updatedEvents = events.map((eachEvent) =>
      eachEvent.id === eventId
        ? {
            ...eachEvent,
            bills: eachEvent.bills.filter((bill) => bill.id !== deleteBillId),
          }
        : eachEvent
    );
    setEvents(updatedEvents);
  };

  const editButtonHandler = (editingBillId) => {
    const foundBill = showingEvent.bills.find(
      (bill) => bill.id === editingBillId
    );
    if (foundBill) {
      setEditingBill(foundBill);
      setModalVisible(true);
    }
  };

  return (
    <View>
      {showingEvent.bills.map((eachBill, index) => (
        <View key={index} style={{ backgroundColor: "red", marginTop: "10" }}>
          <Text>
            {eachBill.billTitle}-{eachBill.amount}-{eachBill.paidBy}-
            {eachBill.involvedMembers}
          </Text>
          <TouchableOpacity onPress={() => deleteButtonHandler(eachBill.id)}>
            <Text>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => editButtonHandler(eachBill.id)}>
            <Text>Edit</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default BillDisplayContainer;
