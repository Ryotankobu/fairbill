import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome";

const TButton = ({title, iconName, iconColor, iconSize, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.content}>
        <Icon
          name={iconName}
          size={iconSize}
          color={iconColor}
          style={styles.icon}
        />
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "yellow",
    height: 40,
    width: 120,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
});

export default TButton