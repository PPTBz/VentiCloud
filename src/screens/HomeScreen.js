import React from "react";
import { Text, TouchableOpacity, Image, StyleSheet, View } from "react-native";
import ViewContainer from "../components/ViewContainer";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.welcomeBG}>
      <ViewContainer>
        <Image 
          style={{ width: 250, height: 250, marginBottom: 3 }}
          source={require('../../assets/logo.png')}
        />
        <TouchableOpacity
          style={{
            padding: 12,
            margin: 5,
            backgroundColor: "#009394",
            width: 230,
            height: 50,
            borderRadius: 12,
          }}
          onPress={() => navigation.navigate("CreateAcc")}
        >
          <Text
            style={{
              color: "#ffffff",
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Create Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 12,
            margin: 5,
            backgroundColor: "#009394",
            width: 230,
            height: 50,
            borderRadius: 12,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={{
              color: "#ffffff",
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </ViewContainer>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  welcomeBG: {
    backgroundColor: "#27384c",
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },

});

export default HomeScreen;
