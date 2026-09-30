import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import WorkoutDetails from "./screens/WorkoutDetails";

const Stack = createNativeStackNavigator();

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
          component={WorkoutScreen}
          options={{ title: "WORKOUT DETAILS" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
