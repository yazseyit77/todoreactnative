import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import { getCurrentFrame } from "expo/build/AR";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";
import { uuid } from "uuidv4";

const App = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: "Wake up at 6:30am" },
    { id: uuid(), text: "Do Algorithm challenges" },
    { id: uuid(), text: "Prepare 5 GitHub Commits" },
    { id: uuid(), text: "Prepare 1 blog post" },
    { id: uuid(), text: "Networking Connection" }
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };
  const addItem = text => {
    if (!text) {
      Alert.alert("Error", "Please add an item!", { text: "Ok" });
    } else {
      setItems(prevItems => {
        return [{ id: uuid(), text }, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
      <AddItem addItem={addItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
