import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
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

  return (
    <View style={styles.container}>
      <Header />
      <AddItem />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
