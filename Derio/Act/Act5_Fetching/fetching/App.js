import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View, Image} from "react-native";

export default function Screen() {
  // State 1: an data na gin fetch sa API
  const [characters, setCharacters] = useState([]);
  // State 2: Loading state para mahibaru-an kun nag fetch pa ang data.
  const [loading, setLoading] = useState(true);
  // State 3: Error state para mahibaru-an kun may error sa pag fetch sang data.
  const [error, setError] = useState(null);

  // Empty dependency array means this useEffect will only run once when the component mounts.
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character",
        );

        // fetch() does not throw on HTTP errors (404, 500), so check response.ok
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        setCharacters(data.results.slice(0, 17)); // Limit to first 10 characters
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.text}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Characters</Text>
      {characters.map((item) => (
        <View key={item.id} style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.text}>
              {item.status} - {item.species}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 48,
    backgroundColor: "#000283",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000283",
  },
  text: {
    color: "white",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    color: "white",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  image: { width: 64, height: 64, borderRadius: 32 },
  info: {marginLeft: 12},
  name: {
    fontWeight: "bold",
    marginBottom: 2,
    color: "white",
  },
});
