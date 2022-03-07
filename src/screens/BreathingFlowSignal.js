import React from "react";
import { View, Text } from "react-native";
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from "react-native-responsive-linechart";

//import db from "../db/firebase";

const BreathingFlowSignal = () => {
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
        Breathing Flow Signal
      </Text>

      <View
        style={{
          position: "absolute",
          paddingTop: 378,
          marginLeft: -5,
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
          Flow L·s^-1
        </Text>
      </View>

      <Chart
        style={{ height: 200, width: 400 }}
        data={[
          { x: 0, y: 0.1 },
          { x: 1, y: 0.4 },
          { x: 2, y: 0.7 },
          { x: 3, y: 0.1 },
          { x: 4, y: 0.4 },
          { x: 5, y: 0.7 },
          { x: 6, y: 0.1 },
          { x: 7, y: 0.4 },
          { x: 8, y: 0.7 },
          { x: 9, y: 0.1 },
          { x: 10, y: 0.4 },
          { x: 11, y: 0.7 },
          { x: 12, y: 0.1 },
          { x: 13, y: 0.4 },
          { x: 14, y: 0.7 },
          { x: 15, y: 0.1 },
          { x: 16, y: 0.4 },
          { x: 17, y: 0.7 },
          { x: 18, y: 0.1 },
          { x: 19, y: 0.4 },
          { x: 20, y: 0.7 },
        ]}
        padding={{ left: 65, bottom: 20, right: 30, top: 30 }}
        xDomain={{ min: 0, max: 20 }}
        yDomain={{ min: -0.4, max: 1 }}
      >
        <VerticalAxis
          tickCount={8}
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

export default BreathingFlowSignal;
