import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  StatusBar,
} from "react-native";

const stats = [
  {
    name: "Upper Body",
    category: "Chest, Back",
    exercises: "9 exercises",
    duration: "2 hours",
    icon: "🏋️‍♂️",
  },

  {
    name: "Full arms",
    category: "Shoulder, Biceps, Triceps, Forearms",
    exercises: "9 exercises",
    duration: "3 hours and a half",
    icon: "💪",
  },

  {
    name: "Leg Day!",
    category: "Quads, Hamstrings, Calves",
    exercises: "6 exercises",
    duration: "2 hours",
    icon: "🦵",
  },
];
const activities = [
  {
    title: "Upper Body Workout",
    subtitle: "Chest • Shoulders • Arms",
    value: "48 min",
    icon: "💪",
  },
  {
    title: "Morning Run",
    subtitle: "Cardio • 5.2 km",
    value: "32 min",
    icon: "🏃",
  },
  {
    title: "Leg Day",
    subtitle: "Quads • Hamstrings • Calves",
    value: "52 min",
    icon: "🦵",
  },
];


const workouts = [
  {
    name: "Upper Body",
    exercises: "9 exercises",
    duration: "2 hours",
    icon: "🏋️‍♂️",
  },
  {
    name: "Full Arms",
    exercises: "9 exercises",
    duration: "3 hours 30 min",
    icon: "💪",
  },
  {
    name: "Leg Day",
    exercises: "6 exercises",
    duration: "2 hours",
    icon: "🦵",
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#171717" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.dateText}>MONDAY, SEPTEMBER 21</Text>

            <Text style={styles.greetings}>Good Morning</Text>

            <Text style={styles.name}>Gym Bros!</Text>
          </View>

          <Pressable style={styles.profileButton}>
            <Text style={styles.profileText}>D </Text>
          </Pressable>
        </View>

        {/* BROS CARD */}
        <View style={styles.brosCard}>
          <View style={styles.brosTop}>
            <View>
              <Text style={styles.brosLabel}>TODAYS WORKOUT</Text>

              <Text style={styles.brosTitle}>UPPER BODY</Text>
            </View>

            <Text style={styles.brosIcon}>💪</Text>
          </View>

          <Text style={styles.brosDescription}>
            Build strength, improve endurance, and become your best self.
          </Text>

          <View style={styles.brosBottomRow}>
            <View>
              <Text style={styles.brosStatValue}>48</Text>
              <Text style={styles.brosStatLabel}>MINUTES</Text>
            </View>

            <View>
              <Text style={styles.brosStatValue}>6</Text>

              <Text style={styles.brosStatLabel}>EXERCISES</Text>
            </View>

            <View>
              <Text style={styles.brosStatValue}>420</Text>

              <Text style={styles.brosStatValue}>KCAL</Text>
            </View>
          </View>

          <Pressable style={styles.startsButton}>
            <Text style={styles.startButtonText}>START WORKOUT</Text>

            <Text style={styles.arrow}>→</Text>
          </Pressable>
        </View>

        {/* PROGRESS */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>WEEKLY PROGRESS</Text>

          <Text style={styles.sectionLink}>THIS WEEK</Text>
        </View>
        <View style={styles.progressCard}>
          <View style={styles.progressTop}>
            <View>
              <Text style={styles.progressValue}>4 / 5</Text>

              <Text style={styles.progressLabel}>WORKOUTS COMPLETED</Text>
            </View>

            <Text style={styles.progressPercent}>80%</Text>
          </View>

          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>

          <View style={styles.daysRow}>
            <View style={styles.day}>
              <Text style={styles.dayLetter}>M</Text>
              <View style={styles.completedDot}>
                <Text style={styles.check}>✓</Text>
              </View>
            </View>

            <View style={styles.day}>
              <Text style={styles.dayLetter}>T</Text>
              <View style={styles.completedDot}>
                <Text style={styles.check}>✓</Text>
              </View>
            </View>

            <View style={styles.day}>
              <Text style={styles.dayLetter}>W</Text>
              <View style={styles.completedDot}>
                <Text style={styles.check}>✓</Text>
              </View>
            </View>

            <View style={styles.day}>
              <Text style={styles.dayLetter}>T</Text>
              <View style={styles.completedDot}>
                <Text style={styles.check}>✓</Text>
              </View>
            </View>

            <View style={styles.day}>
              <Text style={styles.dayLetter}>F</Text>
              <View style={styles.emptyDot} />
            </View>

            <View style={styles.day}>
              <Text style={styles.dayLetter}>S</Text>
              <View style={styles.emptyDot} />
            </View>

            <View style={styles.day}>
              <Text style={styles.dayLetter}>S</Text>
              <View style={styles.emptyDot} />
            </View>
          </View>
        </View>

        {/* FITNESS STATS */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>FITNESS STATS</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statIcon}>🔥</Text>

            <Text style={styles.statValue}>2,840</Text>

            <Text style={styles.statLabel}>CALORIES</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statIcon}>⏱️</Text>

            <Text style={styles.statValue}>186</Text>

            <Text style={styles.statLabel}>MINUTES</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statIcon}>🏋️</Text>

            <Text style={styles.statValue}>24</Text>

            <Text style={styles.statLabel}>WORKOUTS</Text>
          </View>
        </View>

        {/* WORKOUT PROGRAMS */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>WORKOUT PROGRAMS</Text>

          <Text style={styles.sectionLink}>SEE ALL</Text>
        </View>

        {workouts.map((workout) => (
          <Pressable style={styles.workoutCard} key={workout.name}>
            <View style={styles.workoutIcon}>
              <Text style={styles.workoutEmoji}>{workout.icon}</Text>
            </View>

            <View style={styles.workoutInfo}>
              <Text style={styles.workoutName}>{workout.name}</Text>

              <Text style={styles.workoutDetails}>
                {workout.exercises} • {workout.duration}
              </Text>
            </View>

            <Text style={styles.workoutArrow}>→</Text>
          </Pressable>
        ))}

        {/* RECENT ACTIVITY */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>RECENT ACTIVITY</Text>

          <Text style={styles.sectionLink}>SEE ALL</Text>
        </View>

        <View style={styles.activityCard}>
          {activities.map((activity, index) => (
            <View
              key={activity.title}
              style={[
                styles.activityRow,
                index !== activities.length - 1 && styles.activityDivider,
              ]}
            >
              <View style={styles.activityIcon}>
                <Text style={styles.activityEmoji}>{activity.icon}</Text>
              </View>

              <View style={styles.activityInfo}>
                <Text style={styles.activityTitle}>{activity.title}</Text>

                <Text style={styles.activitySubtitle}>{activity.subtitle}</Text>
              </View>

              <Text style={styles.activityValue}>{activity.value}</Text>
            </View>
          ))}
        </View>

        {/* MOTIVATION */}
        <View style={styles.motivationCard}>
          <Text style={styles.motivationSlash}>//</Text>

          <Text style={styles.motivationTitle}>TRAIN HARD.</Text>

          <Text style={styles.motivationTitle}>BE BETTER.</Text>

          <Text style={styles.motivationText}>
            Consistency creates results.
          </Text>
        </View>
      </ScrollView>

      {/* BOTTOM NAVIGATION */}
      <View style={styles.bottomNav}>
        <Pressable style={styles.navItem}>
          <Text style={styles.activeNavIcon}>🏠</Text>

          <Text style={styles.activeNavLabel}>HOME</Text>
        </Pressable>

        <Pressable style={styles.navItem}>
          <Text style={styles.navIcon}>🏋️</Text>

          <Text style={styles.navLabel}>WORKOUTS</Text>
        </Pressable>

        <Pressable style={styles.navItem}>
          <Text style={styles.navIcon}>📊</Text>

          <Text style={styles.navLabel}>PROGRESS</Text>
        </Pressable>

        <Pressable style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>

          <Text style={styles.navLabel}>PROFILE</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
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
  dateText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#9A9A9A",
    letterSpacing: 1,
    marginBottom: 5,
  },
  greetings: {
    fontSize: 26,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  name: {
    fontSize: 26,
    fontWeight: "800",
    color: "#E53935",
  },
  profileButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#E53935",
    alignItems: "center",
    justifyContent: "center",
  },
  profileText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },

  brosCard: {
    backgroundColor: "#E53935",
    borderRadius: 22,
    padding: 20,
    marginBottom: 26,
  },
  brosTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  brosLabel: {
    fontSize: 11,
    fontWeight: "800",
    color: "#FFD9D8",
    letterSpacing: 1,
  },
  brosTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: "#FFFFFF",
    marginTop: 5,
  },
  brosIcon: {
    fontSize: 40,
  },
  brosDescription: {
    color: "#FFECEC",
    fontSize: 13,
    lineHeight: 19,
    marginTop: 14,
    maxWidth: "92%",
  },
  brosBottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#EF6663",
  },
  brosStatValue: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "900",
  },
  brosStatLabel: {
    color: "#FFD9D8",
    fontSize: 9,
    fontWeight: "700",
    marginTop: 2,
  },
  startsButton: {
    backgroundColor: "#171717",
    borderRadius: 12,
    paddingVertical: 13,
    paddingHorizontal: 16,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  startButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  arrow: {
    color: "#FFFFFF",
    fontSize: 18,
    marginLeft: 8,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "900",
    color: "#FFFFFF",
    letterSpacing: 0.5,
  },
  sectionLink: {
    fontSize: 10,
    color: "#E53935",
    fontWeight: "800",
  },

  progressCard: {
    backgroundColor: "#242424",
    borderRadius: 18,
    padding: 18,
    marginBottom: 26,
  },
  progressTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressValue: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "900",
  },
  progressLabel: {
    color: "#929292",
    fontSize: 9,
    fontWeight: "700",
    marginTop: 3,
  },
  progressPercent: {
    color: "#E53935",
    fontSize: 20,
    fontWeight: "900",
  },
  progressBar: {
    height: 7,
    backgroundColor: "#3A3A3A",
    borderRadius: 5,
    marginTop: 16,
    overflow: "hidden",
  },
  progressFill: {
    width: "80%",
    height: "100%",
    backgroundColor: "#E53935",
    borderRadius: 5,
  },
  daysRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
  },
  day: {
    alignItems: "center",
  },
  dayLetter: {
    color: "#929292",
    fontSize: 10,
    fontWeight: "700",
    marginBottom: 7,
  },
  completedDot: {
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: "#E53935",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyDot: {
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: "#343434",
  },
  check: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "900",
  },

  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 26,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#242424",
    borderRadius: 15,
    padding: 14,
  },
  statIcon: {
    fontSize: 19,
    marginBottom: 10,
  },
  statValue: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "900",
  },
  statLabel: {
    color: "#929292",
    fontSize: 8,
    fontWeight: "700",
    marginTop: 4,
  },

  workoutCard: {
    backgroundColor: "#242424",
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  workoutIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
  },
  workoutEmoji: {
    fontSize: 23,
  },
  workoutInfo: {
    flex: 1,
    marginLeft: 12,
  },
  workoutName: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },
  workoutDetails: {
    color: "#929292",
    fontSize: 10,
    marginTop: 4,
  },
  workoutArrow: {
    color: "#E53935",
    fontSize: 22,
    fontWeight: "700",
  },

  activityCard: {
    backgroundColor: "#242424",
    borderRadius: 16,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  activityRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  activityDivider: {
    borderBottomWidth: 1,
    borderBottomColor: "#363636",
  },
  activityIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
  },
  activityEmoji: {
    fontSize: 19,
  },
  activityInfo: {
    flex: 1,
    marginLeft: 12,
  },
  activityTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  activitySubtitle: {
    fontSize: 10,
    color: "#929292",
    marginTop: 3,
  },
  activityValue: {
    fontSize: 11,
    fontWeight: "800",
    color: "#E53935",
  },

  motivationCard: {
    backgroundColor: "#E53935",
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
  },
  motivationSlash: {
    color: "#FFD9D8",
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 8,
  },
  motivationTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "900",
    lineHeight: 27,
  },
  motivationText: {
    color: "#FFECEC",
    fontSize: 11,
    marginTop: 8,
  },

  bottomNav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 75,
    backgroundColor: "#202020",
    borderTopWidth: 1,
    borderTopColor: "#343434",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  navIcon: {
    fontSize: 20,
    opacity: 0.45,
  },
  activeNavIcon: {
    fontSize: 20,
    opacity: 1,
  },
  navLabel: {
    fontSize: 9,
    color: "#858585",
    marginTop: 4,
    fontWeight: "700",
  },
  activeNavLabel: {
    color: "#E53935",
    fontWeight: "800",
  },
});
