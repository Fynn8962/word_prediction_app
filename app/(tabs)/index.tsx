import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ActivityIndicator} from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { predictNextWords } from "../../utils/wordPrediction";




export default function Index() {

  const [searchQuery, setSearchQuery] = useState("");
  const [predictions, setPredictions] = useState<String[]>([]);




  const handleChange = (input: string) => {
    setSearchQuery(input);
    const nextWords = predictNextWords(input, 5);
     setPredictions(nextWords);
  }



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
        style={styles.searchBar}
          placeholder="Type a word..."
          placeholderTextColor="#888"
          clearButtonMode="always"
          autoCapitalize="none"
          autoCorrect={false}
          value={searchQuery}
          onChangeText={handleChange}
        />
      </View>
      <FlatList 
        data={predictions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
        <View style={styles.itemContainer}>
        <Text style={styles.textWord}>{item}</Text>
        </View>
      )}
      
      />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    
  },
  searchContainer: {
    position: 'relative',
    zIndex: 1,
  },
  searchBar: {
    borderWidth: 1,
    marginHorizontal: 20,
    padding: 8,
    borderRadius: 8,
    color: '#fff',
    borderColor: '#ccc'
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10,
  },
  textWord: {
    color: '#fff',
    fontSize: 17,
    marginLeft: 10,
    fontWeight: "600",
  },
});


