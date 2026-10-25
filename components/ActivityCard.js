import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/styles";

export default function ActivityCard({ activity }) {
  return (
    <View style={styles.activity}>
      <Text style={styles.emoji}>
        {activity[0]}
      </Text>

      <View style={styles.workoutInfo}>
        <Text style={styles.white}>
          {activity[1]}
        </Text>

        <Text style={styles.gray}>
          {activity[2]}
        </Text>
      </View>

      <Text style={styles.red}>
        {activity[3]}
      </Text>
    </View>
  );
}