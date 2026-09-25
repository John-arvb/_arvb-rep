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
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";


type RootStackParamList = {
  Home: undefined;
  Workouts: undefined;
  Details: {
    name: string;
    duration: string;
    description: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();


const activities = [
  [
    "💪",
    "Upper Body Workout",
    "Chest • Shoulders • Arms",
    "48 min",
  ],
  [
    "🏃",
    "Morning Run",
    "Cardio • 5.2 km",
    "32 min",
  ],
  [
    "🦵",
    "Leg Day",
    "Quads • Hamstrings • Calves",
    "52 min",
  ],
];

type Workout = {
  emoji: string;
  name: string;
  details: string;
};

const defaultWorkouts: Workout[] = [
  {
    emoji: "🏋️‍♂️",
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

type HomeProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

function HomeScreen({ navigation }: HomeProps) {
  const [workoutName, setWorkoutName] = useState("");
  const [workouts, setWorkouts] =
    useState<Workout[]>(defaultWorkouts);

  const addWorkout = () => {
    if (!workoutName.trim()) {
      return;
    }

    const newWorkout: Workout = {
      emoji: "🏋️",
      name: workoutName,
      details: "New workout",
    };

    setWorkouts([...workouts, newWorkout]);
    setWorkoutName("");
  };

  const deleteWorkout = (index: number) => {
    setWorkouts(
      workouts.filter((_, i) => i !== index)
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
            <Text style={styles.white}>D</Text>
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
            Build strength, improve endurance, and become
            your best self.
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

          {/* REQUIRED navigation.navigate() */}

          <Pressable
            style={styles.start}
            onPress={() =>
              navigation.navigate("Workouts")
            }
          >
            <Text style={styles.white}>
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
            M ✓　T ✓　W ✓　T ✓　F ○　S ○　S ○
          </Text>
        </View>

        {/* FITNESS STATS */}

        <Text style={styles.section}>
          FITNESS STATS
        </Text>

        <View style={styles.row}>
          {[
            ["🔥", "2,840", "CALORIES"],
            ["⏱️", "186", "MINUTES"],
            ["🏋️", "24", "WORKOUTS"],
          ].map((item) => (
            <View
              style={styles.stat}
              key={item[2]}
            >
              <Text>{item[0]}</Text>

              <Text style={styles.bigWhite}>
                {item[1]}
              </Text>

              <Text style={styles.gray}>
                {item[2]}
              </Text>
            </View>
          ))}
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
          keyExtractor={(_, index) =>
            index.toString()
          }
          renderItem={({ item, index }) => (
            <View style={styles.workoutItem}>
              <Text style={styles.emoji}>
                {item.emoji}
              </Text>

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
                onPress={() =>
                  deleteWorkout(index)
                }
              >
                <Text style={styles.deleteText}>
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />

        {/* RECENT ACTIVITY */}

        <Text style={styles.section}>
          RECENT ACTIVITY
        </Text>

        <View style={styles.card}>
          {activities.map((activity, index) => (
            <View
              style={styles.activity}
              key={index}
            >
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

      <View style={styles.nav}>
        <Pressable>
          <Text style={styles.navActive}>
            🏠{"\n"}HOME
          </Text>
        </Pressable>

        <Pressable
          onPress={() =>
            navigation.navigate("Workouts")
          }
        >
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

type WorkoutProps = NativeStackScreenProps<
  RootStackParamList,
  "Workouts"
>;

function WorkoutScreen({ navigation }: WorkoutProps) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#171717"
      />

      <ScrollView
        contentContainerStyle={styles.container}
      >
        <Text style={styles.title}>
          WORKOUT PROGRAMS
        </Text>

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
          <Text style={styles.programEmoji}>
            💪
          </Text>

          <View style={styles.workoutInfo}>
            <Text style={styles.cardTitle}>
              Chest & Back
            </Text>

            <Text style={styles.programText}>
              2 hours
            </Text>

            <Text style={styles.red}>
              VIEW DETAILS →
            </Text>
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
          <Text style={styles.programEmoji}>
            🦵
          </Text>

          <View style={styles.workoutInfo}>
            <Text style={styles.cardTitle}>
              Leg Day
            </Text>

            <Text style={styles.programText}>
              1 hour
            </Text>

            <Text style={styles.red}>
              VIEW DETAILS →
            </Text>
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
          <Text style={styles.programEmoji}>
            🏋️
          </Text>

          <View style={styles.workoutInfo}>
            <Text style={styles.cardTitle}>
              Upper Body
            </Text>

            <Text style={styles.programText}>
              48 minutes
            </Text>

            <Text style={styles.red}>
              VIEW DETAILS →
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

type DetailsProps = NativeStackScreenProps<
  RootStackParamList,
  "Details"
>;

function DetailsScreen({
  navigation,
  route,
}: DetailsProps) {
  const {
    name,
    duration,
    description,
  } = route.params;

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#171717"
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.detailsEmoji}>
          🏋️
        </Text>

        {/* route.params data */}

        <Text style={styles.detailsTitle}>
          {name}
        </Text>

        <Text style={styles.detailsDuration}>
          Duration: {duration}
        </Text>

        <Text style={styles.detailsDescription}>
          {description}
        </Text>

        {/* REQUIRED navigation.goBack() */}

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.white}>
            ← Back to Workouts
          </Text>
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
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "FITCORE",
          }}
        />

        <Stack.Screen
          name="Workouts"
          component={WorkoutScreen}
          options={{
            title: "Workouts",
          }}
        />

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: "Workout Details",
          }}
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
    paddingBottom: 110,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  small: {
    color: "#aaa",
    fontSize: 10,
    fontWeight: "bold",
  },

  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 8,
  },

  subtitle: {
    color: "#aaa",
    fontSize: 14,
    marginBottom: 20,
  },

  redTitle: {
    color: "#E53935",
    fontSize: 26,
    fontWeight: "bold",
  },

  profile: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#E53935",
    alignItems: "center",
    justifyContent: "center",
  },

  redCard: {
    backgroundColor: "#E53935",
    borderRadius: 20,
    padding: 20,
    marginBottom: 25,
  },

  big: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 5,
  },

  bigWhite: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  white: {
    color: "#fff",
    fontWeight: "bold",
  },

  gray: {
    color: "#929292",
    fontSize: 10,
    marginTop: 4,
  },

  desc: {
    color: "#ffecec",
    marginVertical: 10,
    lineHeight: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  start: {
    backgroundColor: "#171717",
    padding: 13,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },

  section: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
    marginTop: 5,
  },

  card: {
    backgroundColor: "#242424",
    borderRadius: 16,
    padding: 16,
    marginBottom: 25,
  },

  red: {
    color: "#E53935",
    fontWeight: "bold",
  },

  progress: {
    height: 7,
    backgroundColor: "#3a3a3a",
    borderRadius: 5,
    marginVertical: 15,
  },

  fill: {
    width: "80%",
    height: "100%",
    backgroundColor: "#E53935",
    borderRadius: 5,
  },

  days: {
    color: "#aaa",
    fontSize: 11,
  },

  stat: {
    flex: 1,
    backgroundColor: "#242424",
    padding: 14,
    borderRadius: 14,
    marginHorizontal: 3,
  },

  input: {
    backgroundColor: "#f3eeee",
    borderColor: "#e20505",
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },

  add: {
    backgroundColor: "#cf1b1b",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },

  workoutItem: {
    backgroundColor: "#fda0a0",
    borderRadius: 15,
    padding: 14,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  workoutInfo: {
    flex: 1,
  },

  emoji: {
    fontSize: 23,
  },

  workoutName: {
    color: "#171717",
    fontSize: 15,
    fontWeight: "bold",
  },

  workoutDetails: {
    color: "#444",
    fontSize: 11,
    marginTop: 4,
  },

  deleteButton: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#E53935",
  },

  deleteText: {
    color: "#fff",
    fontWeight: "bold",
  },

  activity: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    gap: 12,
  },

  nav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 75,
    backgroundColor: "#202020",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  navText: {
    color: "#858585",
    textAlign: "center",
    fontSize: 10,
  },

  navActive: {
    color: "#E53935",
    textAlign: "center",
    fontSize: 10,
  },

  programCard: {
    backgroundColor: "#242424",
    borderRadius: 16,
    padding: 18,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  programEmoji: {
    fontSize: 40,
    marginRight: 15,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 5,
  },

  programText: {
    color: "#aaa",
    fontSize: 14,
    marginBottom: 12,
  },

  detailsContainer: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
  },

  detailsEmoji: {
    fontSize: 60,
    textAlign: "center",
    marginBottom: 20,
  },

  detailsTitle: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },

  detailsDuration: {
    color: "#E53935",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  detailsDescription: {
    color: "#ccc",
    fontSize: 16,
    lineHeight: 25,
    textAlign: "center",
    marginBottom: 30,
  },

  backButton: {
    backgroundColor: "#E53935",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});
