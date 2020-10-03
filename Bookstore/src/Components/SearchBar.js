import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
const SearchBar = () => {
  return (
    <View style={styles.background}>
      <AntDesign name="search1" style={styles.Icon} />
      <TextInput
        style={styles.input}
        placeholder="please enter the name of the book you want:"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "95%",
    alignSelf: "center",
    height: 40,
    flexDirection: "row",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 3,
  },
  Icon: {
    marginLeft: 10,
    fontSize: 24,
    color: "black",
    alignSelf: "center",
  },
  input: {
    width: 300,
    height: "80%",
    alignSelf: "center",
    paddingLeft: 5,
    marginLeft: 5,
  },
});
export default SearchBar;
