import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

export default function WorkoutCard({ item, onDelete }) {
  return (
    <View style={styles.workoutItem}>
      <Text style={styles.emoji}>{item.emoji}</Text>

      <View style={styles.workoutInfo}>
        <Text style={styles.workoutName}>
          {item.name}
        </Text>

        <Text style={styles.workoutDetails}>
          {item.details}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(item.id)}
      >
        <Text style={styles.deleteText}>
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  );
}