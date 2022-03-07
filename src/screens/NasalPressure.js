import React from "react";
import { View, Text } from "react-native";
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from "react-native-responsive-linechart";

const NasalPressure = () => {
  return (
    <View>
      <Text
        style={{
          paddingTop: 250,
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 20,
          color: "#009394",
        }}
      >
        Nasal Pressure
      </Text>

      <View
        style={{
          position: "absolute",
          paddingTop: 378,
          marginLeft: -38,
        }}
      >
        <Text
          style={{
            transform: [{ rotate: "-90deg" }],
            textAlign: "center",
            fontSize: 12,
            color: "#009394",
          }}
        >
          Nasal Pressure cmH2O
        </Text>
      </View>

      <Chart
        style={{ height: 200, width: 400 }}
        data={[
          { x: 0, y: 5.9 },
          { x: 1, y: 4.9 },
          { x: 2, y: 10 },
          { x: 3, y: 6.5 },
          { x: 4, y: 4.9 },
          { x: 5, y: 10 },
          { x: 6, y: 6.5 },
          { x: 7, y: 4.9 },
          { x: 8, y: 10 },
          { x: 9, y: 6.5 },
          { x: 10, y: 4.9 },
          { x: 11, y: 10 },
          { x: 12, y: 6.5 },
          { x: 13, y: 4.9 },
          { x: 14, y: 10 },
          { x: 15, y: 6.5 },
          { x: 16, y: 4.9 },
          { x: 17, y: 10 },
          { x: 18, y: 6.5 },
          { x: 19, y: 4.9 },
          { x: 20, y: 6.5 },
        ]}
        padding={{ left: 65, bottom: 20, right: 30, top: 30 }}
        xDomain={{ min: 0, max: 20 }}
        yDomain={{ min: 2, max: 12 }}
      >
        <VerticalAxis
          tickCount={11}
          theme={{ labels: { formatter: (v) => v.toFixed(2) } }}
        />
        <HorizontalAxis tickCount={5} />
        <Area
          theme={{
            gradient: {
              from: { color: "#009394" },
              to: { color: "#009394", opacity: 0.4 },
            },
          }}
        />
        <Line
          theme={{
            stroke: { color: "#009394", width: 3 },
            scatter: { default: { width: 4, height: 4, rx: 2 } },
          }}
        />
      </Chart>
      <Text
        style={{
          paddingTop: 10,
          textAlign: "center",
          fontSize: 12,
          color: "#009394",
        }}
      >
        Time s
      </Text>
    </View>
  );
};

export default NasalPressure;
