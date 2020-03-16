import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button
} from "react-native";
import { getCurrentFrame } from "expo/build/AR";

const AddItem = ({ item, addItem }) => {
  const [text, setText] = useState("");

  const onChange = textValue => setText(textValue);

  return (
    <TouchableOpacity style={styles.btn}>
      <View style={styles.listItemView}>
        <TextInput
          placeholder="Add Item ..."
          style={styles.input}
          onChangeText={onChange}
        />
        <Button
          title="Add Item"
          style={styles.btnText}
          onPress={() => addItem(text)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    padding: 8,
    fontSize: 16,
    backgroundColor: "#c2bad8",
    marginLeft: 30,
    marginRight: 30,
    textAlign: "center",
    width: 700
  },
  btn: {
    padding: 9,
    margin: 5,
    paddingRight: 150
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center"
  }
});

export default AddItem;
