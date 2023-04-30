import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ListItem from "../ListItem";
import ListItemSeparator from "../ListItemSeparator";
import ListItemDeleteAction from "../ListItemDeleteAction";

let initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: {
      uri: "https://media.gq-magazine.co.uk/photos/63ee06e8b1322681bf7aa628/1:1/w_1080,h_1080,c_limit/Keanu-Reeves.jpg",
    },
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: {
      uri: "https://upload.wikimedia.org/wikipedia/commons/3/33/Mark_Kassen%2C_Tony_C%C3%A1rdenas_and_Chris_Evans_%28cropped%29.jpg",
    },
  },
];

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (id) => {
    const newMessages = messages.filter((m) => m.id !== id);
    setMessages(newMessages);
  };

  return (
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subtitle={item.description}
          imagePath={item.image}
          onPress={() => console.log("message selected ", item)}
          renderRightActions={() => (
            <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
          )}
        />
      )}
      ItemSeparatorComponent={<ListItemSeparator />}
      style={styles.listContainer}
      refreshing={refreshing}
      onRefresh={() => setMessages(initialMessages)}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 20,
  },
});
export default MessagesScreen;
