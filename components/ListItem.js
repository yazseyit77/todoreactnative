import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { getCurrentFrame } from "expo/build/AR";
// import { Ionicons } from "@expo/vector-icons";

const ListItem = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Button
          title="Remove"
          color="firebrick"
          onPress={() => deleteItem(item.id)}
        />
        {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee"
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  listItemText: {
    fontSize: 18
  }
});

export default ListItem;
