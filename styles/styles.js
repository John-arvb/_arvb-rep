import { StyleSheet } from "react-native";

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

export default styles;