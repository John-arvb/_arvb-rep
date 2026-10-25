import React, { useState } from "react";

import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Pressable,
  StatusBar,
} from "react-native";

import WorkoutCard from "../components/WorkoutCard";
import ActivityCard from "../components/ActivityCard";
import BottomNav from "../components/BottomNav";

import { defaultWorkouts, activities } from "../data/workoutData";

import styles from "../styles/styles";

function HomeScreen({ navigation }) {
  const [workoutName, setWorkoutName] = useState("");
  const [workouts, setWorkouts] = useState(defaultWorkouts);

  const addWorkout = () => {
    if (!workoutName.trim()) return;

    const newWorkout = {
      id: Date.now().toString(),
      emoji: "🏋️",
      name: workoutName.trim(),
      details: "New workout",
    };

    setWorkouts([...workouts, newWorkout]);
    setWorkoutName("");
  };

  const deleteWorkout = (id) => {
    setWorkouts(
      workouts.filter((workout) => workout.id !== id)
    );
  };

  return (
    <SafeAreaView style={styles.safe}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#171717"
      />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >

        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.small}>
              MONDAY, SEPTEMBER 21
            </Text>

            <Text style={styles.title}>
              Good Morning
            </Text>

            <Text style={styles.redTitle}>
              Gym Bros!
            </Text>
          </View>

          <Pressable style={styles.profile}>
            <Text style={styles.white}>
              D
            </Text>
          </Pressable>
        </View>

        {/* TODAY'S WORKOUT */}
        <View style={styles.redCard}>
          <Text style={styles.small}>
            TODAY'S WORKOUT
          </Text>

          <Text style={styles.big}>
            UPPER BODY 💪
          </Text>

          <Text style={styles.desc}>
            Build strength, improve endurance, and become your best self.
          </Text>

          <View style={styles.row}>

            <Text style={styles.white}>
              48{"\n"}MINUTES
            </Text>

            <Text style={styles.white}>
              6{"\n"}EXERCISES
            </Text>

            <Text style={styles.white}>
              420{"\n"}KCAL
            </Text>

          </View>

          <Pressable
            style={styles.start}
            onPress={() => navigation.navigate("Workouts")}
          >
            <Text style={styles.startText}>
              VIEW WORKOUTS →
            </Text>
          </Pressable>
        </View>

        {/* WEEKLY PROGRESS */}
        <Text style={styles.section}>
          WEEKLY PROGRESS
        </Text>

        <View style={styles.card}>
          <View style={styles.row}>

            <View>
              <Text style={styles.bigWhite}>
                4 / 5
              </Text>

              <Text style={styles.gray}>
                WORKOUTS COMPLETED
              </Text>
            </View>

            <Text style={styles.red}>
              80%
            </Text>

          </View>

          <View style={styles.progress}>
            <View style={styles.fill} />
          </View>

          <Text style={styles.days}>
            M ✓   T ✓   W ✓   T ✓   F ○   S ○   S ○
          </Text>
        </View>

        {/* FITNESS STATS */}
        <Text style={styles.section}>
          FITNESS STATS
        </Text>

        <View style={styles.statsRow}>

          <View style={styles.stat}>
            <Text style={styles.statEmoji}>
              🔥
            </Text>

            <Text style={styles.bigWhite}>
              2,840
            </Text>

            <Text style={styles.gray}>
              CALORIES
            </Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statEmoji}>
              ⏱️
            </Text>

            <Text style={styles.bigWhite}>
              186
            </Text>

            <Text style={styles.gray}>
              MINUTES
            </Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statEmoji}>
              🏋️
            </Text>

            <Text style={styles.bigWhite}>
              24
            </Text>

            <Text style={styles.gray}>
              WORKOUTS
            </Text>
          </View>

        </View>

        {/* WORKOUT PROGRAMS */}
        <Text style={styles.section}>
          WORKOUT PROGRAMS
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter New Workout"
          placeholderTextColor="#777"
          value={workoutName}
          onChangeText={setWorkoutName}
          onSubmitEditing={addWorkout}
        />

        <TouchableOpacity
          style={styles.add}
          onPress={addWorkout}
        >
          <Text style={styles.white}>
            Add Workout
          </Text>
        </TouchableOpacity>

        {/* WORKOUT LIST */}
        <FlatList
          data={workouts}
          scrollEnabled={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <WorkoutCard
              item={item}
              onDelete={deleteWorkout}
            />
          )}
        />

        {/* RECENT ACTIVITY */}
        <Text style={styles.section}>
          RECENT ACTIVITY
        </Text>

        <View style={styles.card}>
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              activity={activity}
            />
          ))}
        </View>

        {/* MOTIVATION */}
        <View style={styles.redCard}>

          <Text style={styles.big}>
            TRAIN HARD.
          </Text>

          <Text style={styles.big}>
            BE BETTER.
          </Text>

          <Text style={styles.desc}>
            Consistency creates results.
          </Text>

        </View>

      </ScrollView>

      {/* BOTTOM NAVIGATION */}
      <BottomNav navigation={navigation} />

    </SafeAreaView>
  );
}

export default HomeScreen;