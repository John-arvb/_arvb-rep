import React from "react";
import { View, Pressable, Text } from "react-native";
import styles from "../styles/styles";

export default function BottomNav ({ navigation }) {
  return (
  <View style={styles.nav}>

        <Pressable 
        onPress={() => navigation.navigate("Home")}>
          <Text style={styles.navActive}>
            🏠{"\n"}HOME
          </Text>
        </Pressable>

        <Pressable 
        onPress={() => navigation.navigate("Workouts")}>
          <Text style={styles.navText}>
            🏋️{"\n"}WORKOUTS
          </Text>
        </Pressable>

        <Pressable> 
          <Text style={styles.navText}>
            📊{"\n"}PROGRESS
          </Text>
        </Pressable>

        <Pressable>
          <Text style={styles.navText}>
            👤{"\n"}PROFILE
          </Text>
        </Pressable>

      </View>
  );
}

