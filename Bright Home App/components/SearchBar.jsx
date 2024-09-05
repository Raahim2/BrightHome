import React from "react";
import { TextInput, View, Image } from "react-native";
import { StyleSheet } from "react-native";

export default function SearchBar() {
  return (
    <>
      <View style={styles.searchBar}>
        <Image source={require('../assets/Icons/search.png')} style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search..."
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    margin:5,
    marginLeft:20,
    marginRight:20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});
