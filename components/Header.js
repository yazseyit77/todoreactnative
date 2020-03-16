import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getCurrentFrame } from "expo/build/AR";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Todo List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: "darkslateblue"
  },
  text: {
    color: "#fff",
    fontSize: 23,
    textAlign: "center"
  }
});

export default Header;
