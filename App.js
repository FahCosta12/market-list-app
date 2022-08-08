import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StatusBar,
} from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function App() {
  const [item, setItem] = useState < string > "";
  const [list, setList] = useState < string > [];

  const addItem = () => {
    if (item.length > 0) {
      setList((current) => [item, ...current]);
      setItem("");
    }
  };

  const removeItem = () => {
    setList((current) => current.filter((e, i) => i !== index));
  };

  return (
    <>
      <StatusBar backgroundColor="#ff5969" barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.title}>Market List</Text>
        <View>
          <TextInput
            style={styles.textField}
            value={item}
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
            <Icon name="playlist-remove" color="#4f4f" size={40} />
          </View>
        ) : (
          <ScrollView style={styles.scrollContainer}>
            <View style={styles.itemConstainer} key={index}>
              <Text style={styles.textItem}>
                {list.length - index} - {i}
                {""}
              </Text>
              <TouchableOpacity
                style={styles.buttonRemove}
                onPress={() => removeItem(index)}
              >
                <Icon name="window-close" color="#fff" size={15} />
              </TouchableOpacity>
            </View>
            ))
          </ScrollView>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff5969",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 26,
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
    marginRight: 15,
  },

  textField: {
    height: 50,
    width: width - 100,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 20,
  },

  buttonAdd: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    backgroundColor: "#1ED760",
    borderRadius: 100,
    marginLeft: 10,
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
