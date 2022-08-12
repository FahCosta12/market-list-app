import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StatusBar,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    if (item.length > 0) {
      setList((current) => [...current, item]);
      setItem("");
    }
  };

  const removeItem = (index) => {
    setList((current) => current.filter((e, i) => i !== index));
  };

  return (
    <>
      <StatusBar backgroundColor="#d3d3d3" barStyle="dark-content" />

      <View style={styles.container}>
        <Text style={styles.title}>Market List</Text>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.textField}
            value={item}
            autoCorrect={true}
            autoCapitalize="sentences"
            onChangeText={(e) => setItem(e)}
            placeholder="Enter the item"
          />
          <TouchableOpacity style={styles.buttonAdd} onPress={addItem}>
            <Icon name="plus" color="#fff" size={20} />
          </TouchableOpacity>
        </View>
        {list.length === 0 ? (
          <View style={styles.emptyListContainer}>
            <Text style={styles.textEmptyList}>List's empty</Text>
            <Icon name="playlist-remove" color="#444fff" size={40} />
          </View>
        ) : (
          <ScrollView style={styles.scrollContainer}>
            {list.map((i, index) => (
              <View style={styles.itemConstainer} key={index}>
                <Text style={styles.textItem}>
                  {index + 1} - {i}
                </Text>
                <TouchableOpacity
                  style={styles.buttonRemove}
                  onPress={() => removeItem(index)}
                >
                  <Icon name="window-close" color="#fff" size={15} />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFE4B0",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "bold",
    padding: 15,
    paddingHorizontal: 114,
    backgroundColor: "#444fff",
  },

  textContainer: {
    flexDirection: "row",
    marginTop: 30,
  },

  emptyListContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: height - 190,
  },

  textEmptyList: {
    color: "#4f4f4f",
    fontSize: 25,
    marginRight: 10,
  },

  textField: {
    height: 50,
    width: width - 100,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    fontSize: 20,
    backgroundColor: "#fff",
  },

  buttonAdd: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    backgroundColor: "#444fff",
    borderRadius: 100,
    marginLeft: 10,
    marginVertical: 20,
    marginTop: 1,
  },

  buttonRemove: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    backgroundColor: "#f83030",
    borderRadius: 100,
  },

  itemConstainer: {
    marginTop: 20,
    width: width - 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  textItem: {
    color: "#4f4f4f",
    fontSize: 20,
  },

  scrollContainer: {
    marginTop: 10,
  },
});
