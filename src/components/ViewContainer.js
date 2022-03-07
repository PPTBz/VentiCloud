import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../theme/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: "gray",
  },
});

const ViewContainer = ({ children, backgroundColor }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>{children}</View>
  );
};

export default ViewContainer;
