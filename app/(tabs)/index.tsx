import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ActivityIndicator, TouchableOpacity} from "react-native";
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

  const handleWordPress = (selectedWord: string) => {
    if (searchQuery.trim() == '') {
      setSearchQuery(selectedWord)
    } else {
      setSearchQuery(searchQuery + ' ' + selectedWord)
    }

    const newQuery = searchQuery.trim() == '' ? selectedWord : searchQuery + ' '  + selectedWord;
    const nextWords = predictNextWords(newQuery, 5)
    setPredictions(nextWords)
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
        <TouchableOpacity
        style={styles.itemContainer}
        onPress= {() => handleWordPress(item.toString())}
        activeOpacity={0.7}
        >
        <Text style={styles.textWord}>{item}</Text>
        </TouchableOpacity>
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
    borderWidth: 2,
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    borderColor: '#4a4e52',
    backgroundColor: '#2f3437',
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#2f3437',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
   
    elevation: 3,
  },
  textWord: {
    color: '#fff',
    fontSize: 17,
    marginLeft: 10,
    fontWeight: "600",
  },

  itemContainerHover: {
    backgroundColor: '#3a3f42',
  }
});


