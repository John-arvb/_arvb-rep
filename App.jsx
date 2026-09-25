import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
  Pressable,
  StatusBar,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const activities = [
  ["💪", "Upper Body Workout", "Chest • Shoulders • Arms", "48 min"],
  ["🏃", "Morning Run", "Cardio • 5.2 km", "32 min"],
  ["🦵", "Leg Day", "Quads • Hamstrings • Calves", "52 min"],
];

const defaultWorkouts = [
  {
    emoji: "🏋️",
    name: "Upper Body",
    details: "9 exercises • 2 hours",
  },
  {
    emoji: "💪",
    name: "Full Arms",
    details: "9 exercises • 3 hours 30 min",
  },
  {
    emoji: "🦵",
    name: "Leg Day",
    details: "6 exercises • 2 hours",
  },
];

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
    setWorkouts(workouts.filter((workout) => workout.id !== id));
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#171717" />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.small}>MONDAY, SEPTEMBER 21</Text>

            <Text style={styles.title}>Good Morning</Text>

            <Text style={styles.redTitle}>Gym Bros!</Text>
          </View>

          <Pressable style={styles.profile}>
            <Text style={styles.white}>D</Text>
          </Pressable>
        </View>

        {/* TODAY'S WORKOUT */}
        <View style={styles.redCard}>
          <Text style={styles.small}>TODAY'S WORKOUT</Text>

          <Text style={styles.big}>UPPER BODY 💪</Text>

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
            <Text style={styles.startText}>VIEW WORKOUTS →</Text>
          </Pressable>
        </View>

        {/* WEEKLY PROGRESS */}
        <Text style={styles.section}>WEEKLY PROGRESS</Text>

        <View style={styles.card}>
          <View style={styles.row}>
            <View>
              <Text style={styles.bigWhite}>4 / 5</Text>

              <Text style={styles.gray}>WORKOUTS COMPLETED</Text>
            </View>

            <Text style={styles.red}>80%</Text>
          </View>

          <View style={styles.progress}>
            <View style={styles.fill} />
          </View>

          <Text style={styles.days}>
            M ✓   T ✓   W ✓   T ✓   F ○   S ○   S ○
          </Text>     
        </View>

        {/* FITNESS STATS */}
        <Text style={styles.section}>FITNESS STATS</Text>

        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={styles.statEmoji}>🔥</Text>

            <Text style={styles.bigWhite}>2,840</Text>

            <Text style={styles.gray}>CALORIES</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statEmoji}>⏱️</Text>

            <Text style={styles.bigWhite}>186</Text>

            <Text style={styles.gray}>MINUTES</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statEmoji}>🏋️</Text>

            <Text style={styles.bigWhite}>24</Text>

            <Text style={styles.gray}>WORKOUTS</Text>
          </View>
        </View>

        {/* WORKOUT PROGRAMS */}
        <Text style={styles.section}>WORKOUT PROGRAMS</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter New Workout"
          placeholderTextColor="#777"
          value={workoutName}
          onChangeText={setWorkoutName}
          onSubmitEditing={addWorkout}
        />

        <TouchableOpacity style={styles.add} onPress={addWorkout}>
          <Text style={styles.white}>Add Workout</Text>
        </TouchableOpacity>

        {/* WORKOUT LIST */}
        <FlatList
          data={workouts}
          scrollEnabled={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.workoutItem}>
              <Text style={styles.emoji}>{item.emoji}</Text>

              <View style={styles.workoutInfo}>
                <Text style={styles.workoutName}>{item.name}</Text>

                <Text style={styles.workoutDetails}>
                  {item.details}
                </Text>
              </View>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteWorkout(item.id)}
              >
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />

        {/* RECENT ACTIVITY */}
        <Text style={styles.section}>RECENT ACTIVITY</Text>

        <View style={styles.card}>
          {activities.map((activity, index) => (
            <View style={styles.activity} key={index}>
              <Text style={styles.emoji}>{activity[0]}</Text>

              <View style={styles.workoutInfo}>
                <Text style={styles.white}>{activity[1]}</Text>

                <Text style={styles.gray}>{activity[2]}</Text>
              </View>

              <Text style={styles.red}>{activity[3]}</Text>
            </View>
          ))}
        </View>

        {/* MOTIVATION */}
        <View style={styles.redCard}>
          <Text style={styles.big}>TRAIN HARD.</Text>

          <Text style={styles.big}>BE BETTER.</Text>

          <Text style={styles.desc}>
            Consistency creates results.
          </Text>
        </View>
      </ScrollView>

      {/* BOTTOM NAVIGATION */}
      <View style={styles.nav}>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Text style={styles.navActive}>
            🏠{"\n"}HOME
          </Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Workouts")}>
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
    </SafeAreaView>
  );
}

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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#171717",
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontWeight: "800",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Workouts"
          component={WorkoutScreen}
          options={{ title: "WORKOUTS" }}
        />

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "WORKOUT DETAILS" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#171717",
  },

  container: {
    padding: 20,
    paddingBottom: 100,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  small: {
    color: "#AAAAAA",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 29,
    fontWeight: "900",
    marginTop: 6,
  },

  redTitle: {
    color: "#E50914",
    fontSize: 29,
    fontWeight: "900",
  },

  subtitle: {
    color: "#999999",
    fontSize: 14,
    marginTop: 8,
    marginBottom: 25,
  },

  profile: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#E50914",
    justifyContent: "center",
    alignItems: "center",
  },

  white: {
    color: "#FFFFFF",
    fontWeight: "700",
  },

  redCard: {
    backgroundColor: "#E50914",
    borderRadius: 20,
    padding: 22,
    marginBottom: 28,
  },

  big: {
    color: "#FFFFFF",
    fontSize: 27,
    fontWeight: "900",
    marginTop: 7,
  },

  desc: {
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 12,
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  start: {
    backgroundColor: "#171717",
    borderRadius: 10,
    padding: 14,
    alignItems: "center",
    marginTop: 22,
  },

  startText: {
    color: "#FFFFFF",
    fontWeight: "800",
  },

  section: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "900",
    letterSpacing: 1,
    marginBottom: 12,
    marginTop: 8,
  },

  card: {
    backgroundColor: "#242424",
    borderRadius: 16,
    padding: 18,
    marginBottom: 25,
  },

  bigWhite: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "900",
  },

  gray: {
    color: "#8E8E8E",
    fontSize: 11,
    marginTop: 4,
  },

  red: {
    color: "#E50914",
    fontWeight: "900",
  },

  progress: {
    height: 8,
    backgroundColor: "#3A3A3A",
    borderRadius: 10,
    marginTop: 18,
    overflow: "hidden",
  },

  fill: {
    height: "100%",
    width: "80%",
    backgroundColor: "#E50914",
  },

  days: {
    color: "#AAAAAA",
    fontSize: 12,
    marginTop: 15,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  stat: {
    backgroundColor: "#242424",
    borderRadius: 15,
    width: "31%",
    padding: 13,
  },

  statEmoji: {
    fontSize: 20,
    marginBottom: 7,
  },

  input: {
    height: 50,
    backgroundColor: "#242424",
    borderRadius: 10,
    paddingHorizontal: 15,
    color: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#3A3A3A",
    marginBottom: 10,
  },

  add: {
    backgroundColor: "#E50914",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },

  workoutItem: {
    backgroundColor: "#242424",
    borderRadius: 14,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  emoji: {
    fontSize: 25,
    marginRight: 13,
  },

  workoutInfo: {
    flex: 1,
  },

  workoutName: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },

  workoutDetails: {
    color: "#888888",
    fontSize: 12,
    marginTop: 4,
  },

  deleteButton: {
    paddingHorizontal: 10,
    paddingVertical: 7,
  },

  deleteText: {
    color: "#E50914",
    fontSize: 12,
    fontWeight: "800",
  },

  activity: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: "#333333",
  },

  nav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 75,
    backgroundColor: "#202020",
    borderTopWidth: 1,
    borderTopColor: "#333333",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  navText: {
    color: "#777777",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 18,
  },

  navActive: {
    color: "#E50914",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    lineHeight: 18,
  },

  programCard: {
    backgroundColor: "#242424",
    borderRadius: 17,
    padding: 20,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  programEmoji: {
    fontSize: 42,
    marginRight: 18,
  },

  cardTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 6,
  },

  programText: {
    color: "#999999",
    fontSize: 14,
    marginBottom: 12,
  },

  homeButton: {
    backgroundColor: "#E50914",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginTop: 10,
  },

  detailsContainer: {
    flex: 1,
    backgroundColor: "#171717",
    padding: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  detailsEmoji: {
    fontSize: 70,
    marginBottom: 20,
  },

  detailsTitle: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "center",
  },

  detailsDuration: {
    color: "#E50914",
    fontSize: 17,
    fontWeight: "800",
    marginTop: 12,
  },

  detailsDescription: {
    color: "#AAAAAA",
    fontSize: 16,
    lineHeight: 25,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 30,
  },

  backButton: {
    backgroundColor: "#E50914",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 35,
  },
});
