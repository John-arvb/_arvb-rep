import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import styles from "../styles/styles";

function DetailsScreen({ navigation, route }) {
  const { name, duration, description } = route.params;

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#171717" />

      <View style={styles.detailsContainer}>
        <Text style={styles.detailsEmoji}>🏋️</Text>

        <Text style={styles.detailsTitle}>{name}</Text>

        <Text style={styles.detailsDuration}>
          Duration: {duration}
        </Text>

        <Text style={styles.detailsDescription}>
          {description}
        </Text>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.white}>← GO BACK</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default DetailsScreen;