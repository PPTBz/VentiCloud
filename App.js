// @refresh reset
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import CreateAcc from "./src/screens/CreateAcc";
import Login from "./src/screens/Login";
import Dashboard from "./src/screens/Dashboard";
import BreathingFlowSignal from "./src/screens/BreathingFlowSignal";
import NasalPressure from "./src/screens/NasalPressure";

/*import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyB5I_3OQTgJxD7vvTXOJB-hSq-2XYLg7Fc",
  authDomain: "ventilatorapp-5323b.firebaseapp.com",
  projectId: "ventilatorapp-5323b",
  storageBucket: "ventilatorapp-5323b.appspot.com",
  messagingSenderId: "193358965836",
  appId: "1:193358965836:web:46b433794addc690d818e9",
  measurementId: "G-ZVSBE0CC53",
};

firebase.initializeApp(firebaseConfig);*/

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CreateAcc" component={CreateAcc} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen
        name="BreathingFlowSignal"
        component={BreathingFlowSignal}
      />
      <Stack.Screen name="NasalPressure" component={NasalPressure} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
