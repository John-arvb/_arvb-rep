import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";

import styles from "../styles/styles";

function WorkoutScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#171717" />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>WORKOUT PROGRAMS</Text>

        <Text style={styles.subtitle}>
          Choose a workout program to view its details.
        </Text>

        {/* CHEST & BACK */}
        <TouchableOpacity
          style={styles.programCard}
          onPress={() =>
            navigation.navigate("Details", {
              name: "Chest & Back",
              duration: "2 hours",
              description:
                "A workout focused on chest and back muscles.",
            })
          }
        >
          <Text style={styles.programEmoji}>💪</Text>

          <View style={styles.workoutInfo}>
            <Text style={styles.cardTitle}>Chest & Back</Text>

            <Text style={styles.programText}>2 hours</Text>

            <Text style={styles.red}>VIEW DETAILS →</Text>
          </View>
        </TouchableOpacity>

        {/* LEG DAY */}
        <TouchableOpacity
          style={styles.programCard}
          onPress={() =>
            navigation.navigate("Details", {
              name: "Leg Day",
              duration: "1 hour",
              description:
                "A lower-body workout focusing on quads, hamstrings, and calves.",
            })
          }
        >
          <Text style={styles.programEmoji}>🦵</Text>

          <View style={styles.workoutInfo}>
            <Text style={styles.cardTitle}>Leg Day</Text>

            <Text style={styles.programText}>1 hour</Text>

            <Text style={styles.red}>VIEW DETAILS →</Text>
          </View>
        </TouchableOpacity>

        {/* UPPER BODY */}
        <TouchableOpacity
          style={styles.programCard}
          onPress={() =>
            navigation.navigate("Details", {
              name: "Upper Body",
              duration: "48 minutes",
              description:
                "An upper-body workout focused on chest, shoulders, and arms.",
            })
          }
        >
          <Text style={styles.programEmoji}>🏋️</Text>

          <View style={styles.workoutInfo}>
            <Text style={styles.cardTitle}>Upper Body</Text>

            <Text style={styles.programText}>48 minutes</Text>

            <Text style={styles.red}>VIEW DETAILS →</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.white}>← BACK TO DASHBOARD</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default WorkoutScreen;