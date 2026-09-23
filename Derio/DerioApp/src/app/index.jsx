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
    title: "Salary Deposit",
    category: "$Income",
    change: "+$1,000.00",
    icon: "💰",
    color: "#D9FBE8",
  },
  {
    title: "Withdrawal",
    category: "$Expense",
    change: "-$500.00",
    icon: "💳",
    color: "#FFE5E5",
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F7F8FC"
      />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.dateText}>
              MONDAY, SEPTEMBER 21
            </Text>

            <Text style={styles.eyebrow}>
              Good Morning, Derio
            </Text>
          </View>

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              Add Transaction
            </Text>
          </Pressable>
        </View>

        {/* BALANCE STATS */}
        <View style={styles.balanceStats}>
          <View style={styles.balanceStatsRow}>
            <Text style={styles.balanceLabel}>
              Total Points
            </Text>

            <View style={styles.statusPoint}>
              <View style={styles.statusDot} />

              <Text style={styles.statusText}>
                Active
              </Text>
            </View>
          </View>

          <Text style={styles.balanceValue}>
            $24,680.00
          </Text>

          <View style={styles.balanceBottomRow}>
            <Text style={styles.cardCaption}>
              This month you have earned
            </Text>

            <Text style={styles.cardChange}>
              +$12.80 increase from last month
            </Text>
          </View>
        </View>

        {/* OVERVIEW */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Overview
          </Text>

          <Pressable>
            <Text style={styles.linkText}>
              View Support
            </Text>
          </Pressable>
        </View>

        <View style={styles.statsRow}>
          {stats.map((stat) => (
            <View
              style={styles.statsCard}
              key={stat.label}
            >
              <Text style={styles.statsLabel}>
                {stat.label}
              </Text>

              <Text style={styles.statsValue}>
                {stat.value}
              </Text>

              <Text style={styles.statsChange}>
                {stat.change} vs last month
              </Text>
            </View>
          ))}
        </View>

        {/* QUICK ACTIONS */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Quick Actions
          </Text>
        </View>

        <View style={styles.actionsRow}>
          {[
            { icon: "💰", label: "Deposit" },
            { icon: "💳", label: "Withdraw" },
            { icon: "📄", label: "Statement" },
            { icon: "⚙️", label: "Settings" },
          ].map((action) => (
            <Pressable
              style={styles.actionCard}
              key={action.label}
            >
              <View style={styles.actionIcon}>
                <Text style={styles.actionIconText}>
                  {action.icon}
                </Text>
              </View>

              <Text style={styles.actionLabel}>
                {action.label}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* RECENT ACTIVITIES */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Recent Activities
          </Text>

          <Pressable>
            <Text style={styles.linkText}>
              See All
            </Text>
          </Pressable>
        </View>

        <View style={styles.activityCard}>
          {activities.map((activity, index) => (
            <View
              style={[
                styles.activityRow,
                index !== activities.length - 1 &&
                  styles.activityDivider,
              ]}
              key={activity.title}
            >
              <View
                style={[
                  styles.activityIcon,
                  {
                    backgroundColor: activity.color,
                  },
                ]}
              >
                <Text style={styles.activityIconText}>
                  {activity.icon}
                </Text>
              </View>

              <View style={styles.activityDetails}>
                <Text style={styles.activityTitle}>
                  {activity.title}
                </Text>

                <Text style={styles.activityCategory}>
                  {activity.category}
                </Text>
              </View>

              <Text
                style={[
                  styles.activityChange,
                  activity.change.startsWith("+") &&
                    styles.activityChangePositive,
                ]}
              >
                {activity.change}
              </Text>
            </View>
          ))}
        </View>

        {/* SMART SPENDING TIP */}
        <View style={styles.tipCard}>
          <View style={styles.tipIcon}>
            <Text style={styles.tipIconText}>
              💡
            </Text>
          </View>

          <View style={styles.tipContent}>
            <Text style={styles.tipTitle}>
              Smart Spending Tip
            </Text>

            <Text style={styles.tipText}>
              Set a budget for your monthly expenses and
              track your spending to avoid overspending.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* BOTTOM NAVIGATION */}
      <View style={styles.bottomNav}>
        {[
          {
            icon: "🏠",
            label: "Home",
            active: true,
          },
          {
            icon: "📊",
            label: "Activity",
          },
          {
            icon: "💳",
            label: "Cards",
          },
          {
            icon: "⚙️",
            label: "Settings",
          },
        ].map((item) => (
          <Pressable
            style={styles.navItem}
            key={item.label}
          >
            <Text
              style={[
                styles.navIcon,
                item.active && styles.activeNavIcon,
              ]}
            >
              {item.icon}
            </Text>

            <Text
              style={[
                styles.navLabel,
                item.active && styles.activeNavLabel,
              ]}
            >
              {item.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F7F8FC",
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
    fontSize: 12,
    fontWeight: "600",
    color: "#8A8F98",
    marginBottom: 5,
  },

  eyebrow: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E2430",
  },

  button: {
    backgroundColor: "#1E2430",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },

  balanceStats: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 20,
    marginBottom: 24,
  },

  balanceStatsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  balanceLabel: {
    fontSize: 14,
    color: "#737984",
    fontWeight: "600",
  },

  statusPoint: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EAFBF1",
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 20,
  },

  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 7,
    backgroundColor: "#27AE60",
    marginRight: 5,
  },

  statusText: {
    fontSize: 11,
    color: "#27AE60",
    fontWeight: "600",
  },

  balanceValue: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1E2430",
    marginTop: 12,
  },

  balanceBottomRow: {
    marginTop: 12,
  },

  cardCaption: {
    fontSize: 12,
    color: "#8A8F98",
  },

  cardChange: {
    fontSize: 12,
    color: "#27AE60",
    fontWeight: "600",
    marginTop: 4,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E2430",
  },

  linkText: {
    fontSize: 12,
    color: "#5B63D3",
    fontWeight: "600",
  },

  statsRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
  },

  statsCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 15,
  },

  statsLabel: {
    fontSize: 12,
    color: "#8A8F98",
    marginBottom: 7,
  },

  statsValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E2430",
  },

  statsChange: {
    fontSize: 10,
    color: "#27AE60",
    marginTop: 6,
  },

  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  actionCard: {
    width: "23%",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 10,
    alignItems: "center",
  },

  actionIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#F0F1FF",
    alignItems: "center",
    justifyContent: "center",
  },

  actionIconText: {
    fontSize: 20,
  },

  actionLabel: {
    fontSize: 10,
    color: "#5E636D",
    marginTop: 7,
    textAlign: "center",
  },

  activityCard: {
    backgroundColor: "#FFFFFF",
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
    borderBottomColor: "#F0F1F4",
  },

  activityIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  activityIconText: {
    fontSize: 19,
  },

  activityDetails: {
    flex: 1,
    marginLeft: 12,
  },

  activityTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1E2430",
  },

  activityCategory: {
    fontSize: 11,
    color: "#8A8F98",
    marginTop: 3,
  },

  activityChange: {
    fontSize: 13,
    fontWeight: "700",
    color: "#E74C3C",
  },

  activityChangePositive: {
    color: "#27AE60",
  },

  tipCard: {
    flexDirection: "row",
    backgroundColor: "#FFF8E6",
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },

  tipIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  tipIconText: {
    fontSize: 20,
  },

  tipContent: {
    flex: 1,
    marginLeft: 12,
  },

  tipTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1E2430",
    marginBottom: 5,
  },

  tipText: {
    fontSize: 11,
    lineHeight: 17,
    color: "#6F6A5C",
  },

  bottomNav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 75,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#ECEEF2",
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
    opacity: 0.5,
  },

  activeNavIcon: {
    opacity: 1,
  },

  navLabel: {
    fontSize: 10,
    color: "#8A8F98",
    marginTop: 4,
  },

  activeNavLabel: {
    color: "#5B63D3",
    fontWeight: "700",
  },
});