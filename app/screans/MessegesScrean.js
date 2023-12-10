import React, { useState } from "react";
import { FlatList } from "react-native";
import ListItem from "../components/ListItem";
import AppScreen from "../components/AppScreen";
import Seperator from "../components/Seperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMesseges = [
  {
    id: 1,
    title: "message 1",
    description: "this is a messege",
    image: require("../assets/profile.jpg"),
  },
  {
    id: 2,
    title: "message 2",
    description: "this is a messege",
    image: require("../assets/profile.jpg"),
  },
  {
    id: 3,
    title: "message 3",
    description: "this is a messege",
    image: require("../assets/profile.jpg"),
  },
  {
    id: 4,
    title: "message 4",
    description: "this is a messege",
    image: require("../assets/profile.jpg"),
  },
];

function MessegesScrean({ navigation }) {
  const [messeges, setMesseges] = useState(initialMesseges);
  const [refreshing, setrefreshing] = useState(false);

  const handleDelete = (messege) => {
    setMesseges(messeges.filter((m) => m.id !== messege.id));
  };

  return (
    <AppScreen>
      <FlatList
        data={messeges}
        keyExtractor={(messege) => messege.id.toString()}
        contentContainerStyle={{}}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => navigation.navigate("chat")}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={Seperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMesseges([
            {
              id: 4,
              title: "message 4",
              description: "this is a messege",
              image: require("../assets/profile.jpg"),
            },
          ]);
        }}
      />
    </AppScreen>
  );
}

export default MessegesScrean;
