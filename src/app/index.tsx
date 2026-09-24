import React, { useState } from "react";
import {
  SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList,
  StyleSheet, ScrollView, Pressable, StatusBar
} from "react-native";

const activities = [
  ["💪", "Upper Body Workout", "Chest • Shoulders • Arms", "48 min"],
  ["🏃", "Morning Run", "Cardio • 5.2 km", "32 min"],
  ["🦵", "Leg Day", "Quads • Hamstrings • Calves", "52 min"],
];

const defaultWorkouts = [
  ["🏋️‍♂️", "Upper Body", "9 exercises • 2 hours"],
  ["💪", "Full Arms", "9 exercises • 3 hours 30 min"],
  ["🦵", "Leg Day", "6 exercises • 2 hours"],
];

export default function App() {

  const deleteWorkout = (index: number) => {
  setWorkouts(workouts.filter((_, i) => i !== index));
};
  const [workoutName, setWorkoutName] = useState("");
  const [workouts, setWorkouts] = useState(defaultWorkouts);

  const addWorkout = () => {
    if (!workoutName.trim()) return;
    setWorkouts([
      ...workouts,
      ["🏋️", workoutName, "New workout"]
    ]);
    setWorkoutName("");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#171717" />

      <ScrollView contentContainerStyle={styles.container}>
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
            <Text style={styles.white}>48{"\n"}MINUTES</Text>
            <Text style={styles.white}>6{"\n"}EXERCISES</Text>
            <Text style={styles.white}>420{"\n"}KCAL</Text>
          </View>

          <Pressable style={styles.start}>
            <Text style={styles.white}>START WORKOUT →</Text>
          </Pressable>
        </View>

        {/* PROGRESS */}
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
          <Text style={styles.days}>M ✓　T  ✓　W  ✓　T  ✓　F  ○　S ○　S ○</Text>
        </View>

        {/* FITNESS STATS */}
        <Text style={styles.section}>FITNESS STATS</Text>
        <View style={styles.row}>
          {[
            ["🔥", "2,840", "CALORIES"],
            ["⏱️", "186", "MINUTES"],
            ["🏋️", "24", "WORKOUTS"],
          ].map(x => (
            <View style={styles.stat} key={x[2]}>
              <Text>{x[0]}</Text>
              <Text style={styles.bigWhite}>{x[1]}</Text>
              <Text style={styles.gray}>{x[2]}</Text>
            </View>
          ))}
        </View>

        {/* WORKOUT PROGRAMS */}
        <Text style={styles.section}>WORKOUT PROGRAMS</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter New Workout"
          placeholderTextColor="#777"
          value={workoutName}
          onChangeText={setWorkoutName}
        />

        <TouchableOpacity style={styles.add} onPress={addWorkout}>
          <Text style={styles.white}>Add Workout</Text>
        </TouchableOpacity>

        <FlatList data ={workouts} keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) =>( <View style={styles.workoutItem}>
            <Text style= {styles.workout}>{item}</Text>

            <TouchableOpacity style= {styles.deleteButton} 
            onPress={() => deleteWorkout( index )}>

               <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
          )}  
          />

        {workouts.map((w, i) => (
          <Pressable style={styles.workout} key={i}>
            <Text style={styles.emoji}>{w[0]}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.white}>{w[1]}</Text>
              <Text style={styles.gray}>{w[2]}</Text>
            </View>
            <Text style={styles.red}>→</Text>
          </Pressable>
        ))}

        {/* RECENT ACTIVITY */}
        <Text style={styles.section}>RECENT ACTIVITY</Text>

        <View style={styles.card}>
          {activities.map((a, i) => (
            <View style={styles.activity} key={i}>
              <Text style={styles.emoji}>{a[0]}</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.white}>{a[1]}</Text>
                <Text style={styles.gray}>{a[2]}</Text>
              </View>
              <Text style={styles.red}>{a[3]}</Text>
            </View>
          ))}
        </View>

        {/* MOTIVATION */}
        <View style={styles.redCard}>
          <Text style={styles.big}>TRAIN HARD.</Text>
          <Text style={styles.big}>BE BETTER.</Text>
          <Text style={styles.desc}>Consistency creates results.</Text>
        </View>
      </ScrollView>

      {/* NAVIGATION */}
      <View style={styles.nav}>
        {["🏠\nHOME", "🏋️\nWORKOUTS", "📊\nPROGRESS", "👤\nPROFILE"].map(
          (x, i) => (
            <Pressable key={i}>
              <Text style={i === 0 ? styles.navActive : styles.navText}>
                {x}
              </Text>
            </Pressable>
          )
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#171717" },
  container: { padding: 20, paddingBottom: 100 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  small: { color: "#aaa", fontSize: 10, fontWeight: "bold" },

  title: { color: "#fff", fontSize: 26, fontWeight: "bold" },

  redTitle: { color: "#E53935", fontSize: 26, fontWeight: "bold" },

  workoutItem: { color: "#fff", fontSize: 15, fontWeight: "bold", padding: 12,
  marginBottom: 8, borderRadius: 8, backgroundColor: "#d6d1d1", flexDirection: 'row',
  justifyContent: 'space-between',  alignItems: 'center'},

  workoutText: { fontSize: 15, fontWeight: 'bold'},

  deleteButton: { padding: 8, borderRadius: 6, backgroundColor: 'red',},
  
  deleteText: {color: 'white', fontWeight: 'bold'},



  profile: {
    width: 44, height: 44, borderRadius: 22,
    backgroundColor: "#E53935",
    alignItems: "center", justifyContent: "center"
  },
  redCard: {
    backgroundColor: "#E53935",
    borderRadius: 20,
    padding: 20,
    marginBottom: 25
  },
  big: { color: "#fff", fontSize: 25, fontWeight: "bold", marginVertical: 5 },
  bigWhite: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  white: { color: "#fff", fontWeight: "bold" },
  gray: { color: "#929292", fontSize: 10, marginTop: 4 },
  desc: { color: "#ffecec", marginVertical: 10 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  start: {
    backgroundColor: "#171717",
    padding: 13,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15
  },
  section: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
    marginTop: 5
  },
  card: {
    backgroundColor: "#242424",
    borderRadius: 16,
    padding: 16,
    marginBottom: 25
  },
  red: { color: "#E53935", fontWeight: "bold" },
  progress: {
    height: 7,
    backgroundColor: "#3a3a3a",
    borderRadius: 5,
    marginVertical: 15
  },
  fill: {
    width: "80%",
    height: "100%",
    backgroundColor: "#E53935",
    borderRadius: 5
  },
  days: { color: "#aaa", fontSize: 11 },
  stat: {
    flex: 1,
    backgroundColor: "#242424",
    padding: 14,
    borderRadius: 14,
    marginHorizontal: 3
  },
  input: {
    backgroundColor: "#f3eeee",
    borderColor: "#e20505",
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10
  },
  add: {
    backgroundColor: "#cf1b1b",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15
  },
  workout: {
    backgroundColor: "#fda0a0",
    borderRadius: 15,
    padding: 14,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 12
  },
  emoji: { fontSize: 23 },
  activity: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    gap: 12
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
    alignItems: "center"
  },
  navText: { color: "#858585", textAlign: "center", fontSize: 10 },
  navActive: { color: "#E53935", textAlign: "center", fontSize: 10 }
});
