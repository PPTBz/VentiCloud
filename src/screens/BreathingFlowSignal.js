import React, { useState, useEffect } from 'react';
import { View, Text } from "react-native";
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from "react-native-responsive-linechart";

//import db from "../db/firebase";
import { firebase } from '@react-native-firebase/database';


function BreathingFlowSignal () {

  const [in_val, setin_val] = useState('hak')
  const [test, setmytest] = useState([{x: 0, y:0}])


  useEffect(() => {
    // Update the document title using the browser API
    const reference = firebase
    .app()
    .database('https://ventilator-project-final-default-rtdb.firebaseio.com/')
    .ref('/Breathing flow signal');
    console.log('haha')
    reference.on('value', snapshot => {
    console.log('User data: ', test);
    setmytest(test =>[...test,{x: test.length, y:snapshot.val()}]);

    const M = new Map(Object.entries({ 
      language: "JavaScript" 
    }));

  });
}, [test.x]);

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
          Flow L/min
        </Text>
      </View>

      <Chart
        style={{ height: 200, width: 400 }}
        data={test}
        padding={{ left: 65, bottom: 20, right: 30, top: 30 }}
        xDomain={{ min: 1, max: 3 }}
        yDomain={{ min: 0, max: 120 }}
      >
        <VerticalAxis
          tickCount={7}
          theme={{ labels: { formatter: (v) => v.toFixed(0) } }}
        />
        <HorizontalAxis tickCount={3} />
        <Area
          theme={{
            gradient: {
              from: { color: "#009394" },
              to: { color: "#009394", opacity: 0.2 },
            },
          }}
        />
        <Line
          theme={{
            stroke: { color: "#009394", width: 3 },
            scatter: { default: { width: 7, height: 7, rx: 5 } },
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
        Time min
      </Text>
    </View>
  );
};

export default BreathingFlowSignal;
