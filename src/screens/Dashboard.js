import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import Colors from "../theme/Colors";
import ViewContainer, { styles } from "../components/ViewContainer";

const Dashboard = ({ navigation }) => {
  return (
    <>
      <ViewContainer>
        <ImageBackground
            source={require('../../assets/dashboardBG.png')}
            style={{width: '100%', height: '100%'}}>
        <Text
          style={{
            padding: 20,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
            color: "#006270",
            marginTop: 250,
          }}
        >
          The Dashboard
        </Text>
        <TouchableOpacity
          style={{
            padding: 12,
            margin: 5,
            backgroundColor: "#006270",
            width: 280,
            height: 50,
            borderRadius: 12,
            alignSelf: 'center',
          }}
          onPress={() => navigation.navigate("BreathingFlowSignal")}
        >
          <Text
            style={{
              color: "#ffffff",
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Breathing Flow Signal
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 12,
            margin: 5,
            backgroundColor: "#006270",
            width: 280,
            height: 50,
            borderRadius: 12,
            alignSelf: 'center',
          }}
          onPress={() => navigation.navigate("NasalPressure")}
        >
          <Text
            style={{
              color: "#ffffff",
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Nasal Pressure
          </Text>
        </TouchableOpacity>
        </ImageBackground>
      </ViewContainer>
    </>
  );
};

export default Dashboard;
