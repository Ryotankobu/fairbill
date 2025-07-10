import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Modal,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import MultiSelect from "react-native-multiple-select";

const EventPageModal = ({
  modalVisible,
  setModalVisible,
  setBill,
  showingEvent,
  editingBill,
  setEditingBill
}) => {
  const [billDetails, setBillDetails] = useState({
    id: "",
    billTitle: "",
    amount: "",
    paidBy: "",
    involvedMembers: [],
  });

  const defaultPayer = showingEvent.eventMembers[0];
  const [payer, setPayer] = useState(defaultPayer);
  const [selectedMembers, setSelectedMembers] = useState(showingEvent.eventMembers);


  // display an empty bill or existing bill to edit
  useEffect(() => {
    if (editingBill) {
      // If editing an existing bill
      setBillDetails({
        id: editingBill.id,
        billTitle: editingBill.billTitle,
        amount: editingBill.amount.toString(),
        paidBy: editingBill.paidBy,
        involvedMembers: editingBill.involvedMembers,
      });
      setPayer(editingBill.paidBy);
      setSelectedMembers(editingBill.involvedMembers);
    } else if (showingEvent) {
      // If creating a new bill
      setBillDetails({
        id: "",
        billTitle: "",
        amount: "",
        paidBy: "",
        involvedMembers: [],
      });
      setPayer(showingEvent.eventMembers[0]); // default to first member
      setSelectedMembers(showingEvent.eventMembers); // select all by default
    }
  }, [editingBill, showingEvent]);




  const billSaveHandler = () => {
    const newBill = {
      ...billDetails,
      billTitle: billDetails.billTitle,
      amount: billDetails.amount,
      id: billDetails.id || Date.now(),
      paidBy: payer,
      involvedMembers: selectedMembers,
    };
    setBill(newBill);
    setBillDetails({
      id: "",
      billTitle: "",
      amount: "",
      paidBy: "",
      involvedMembers: [],
    });
    setSelectedMembers([]); // Reset after save
    setEditingBill(null);
  };

  const modalCloseHandler = () => {
    setBillDetails({
      id: Date.now(),
      billTitle: "",
      amount: "",
      paidBy: "",
      involvedMembers: [],
    });
  };

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          {/* Bill title input */}
          <TextInput
            placeholder="Bill Title"
            value={billDetails.billTitle}
            onChangeText={(text) =>
              setBillDetails({ ...billDetails, billTitle: text })
            }
          />

          {/* Bill amount input */}
          <TextInput
            placeholder="Amount"
            value={billDetails.amount}
            onChangeText={(text) =>
              setBillDetails({ ...billDetails, amount: parseFloat(text) })
            }
          />

          {/* Payer picker */}
          <Picker
            selectedValue={payer}
            onValueChange={(itemValue) => setPayer(itemValue)}
          >
            {showingEvent.eventMembers.map((eachMember) => (
              <Picker.Item
                key={eachMember}
                label={eachMember}
                value={eachMember}
              />
            ))}
          </Picker>

          {/* involvedMembers multi select */}
          <MultiSelect
            items={showingEvent.eventMembers.map((eachMember) => ({
              id: eachMember,
              name: eachMember,
            }))}
            uniqueKey="id"
            onSelectedItemsChange={setSelectedMembers}
            selectedItems={selectedMembers}
          />

          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
              billSaveHandler();
            }}
          >
            <Text>save</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
              modalCloseHandler();
            }}
          >
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "blue",
    height: "100%",
  },
});

export default EventPageModal;
