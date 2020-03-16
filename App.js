import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { getCurrentFrame } from "expo/build/AR";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import { uuid } from "uuid";

const App = () => {
  const [items, setItems] = useState([
    { id: uuid, text: "Wake up at 6:30am" },
    { id: uuid, text: "Do Algorithm challenges" },
    { id: uuid, text: "Prepare 5 GitHub Commits" },
    { id: uuid, text: "Prepare 1 blog post" },
    { id: uuid, text: "Networking Connection" }
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
});

export default App;
