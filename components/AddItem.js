import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button
} from "react-native";
import { getCurrentFrame } from "expo/build/AR";

const AddItem = ({ item, deleteItem }) => {
  return (
    <View>
      <TextInput placeholder="Add Item ..." style={styles.input} />
      <TouchableOpacity style={styles.btn}>
        <Button title="Add Item" style={styles.btnText} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16
  },
  btn: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5,
    width: 170,
    justifyContent: "center"
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center"
  }
});

export default AddItem;
