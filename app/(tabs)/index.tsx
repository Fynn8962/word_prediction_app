import React from "react";
import { Text, View, StyleSheet} from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";

export default function Index() {

    const [isLoading, setLoading] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [fullData, setFullData] = React.useState([]);
    const [text, onChangeText] = React.useState('');

    // Functional component to render each item in the FlatList
    

    const DATA = [
      { id: "1", title: "Data Structures" },
      { id: "2", title: "STL" },
      { id: "3", title: "C++" },
      { id: "4", title: "Java" },
      { id: "5", title: "Python" },
      { id: "6", title: "CP" },
      { id: "7", title: "ReactJs" },
      { id: "8", title: "NodeJs" },
      { id: "9", title: "MongoDb" },
      { id: "10", title: "ExpressJs" },
      { id: "11", title: "PHP" },
      { id: "12", title: "MySql" },
    ];

    const Item = ({ title }) => (
      <View style={styles.item}>
        <Text style={styles.itemText}>{title}</Text> 
      </View>
    );


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        onChangeText={onChangeText}
        value={text}
        placeholder="Type a word..."
        clearButtonMode="always"
        autoCapitalize="none"
      />
      <FlatList data={DATA} renderItem={({ item }) => <Item title={item.title} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: "center"

  },
  text: {
    color: '#fff',
  },
  searchBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#fff',
    color: '#fff',
    borderRadius: 8,
  },
  item: {
    backgroundColor: "red", // Background color for each item
    padding: 20, // Padding inside each item
    marginVertical: 8, // Vertical margin between items
    marginHorizontal: 16, // Horizontal margin between items
    borderRadius: 8,
  },
  itemText: {
    color: "white", // Text color
    fontSize: 18, // Font size for the text
  },
});
