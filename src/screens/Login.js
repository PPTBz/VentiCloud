import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import ViewContainer from "../components/ViewContainer";

const CreateAcc = ({ navigation }) => {
  const [email, onChangeEmail] = React.useState("Email");
  const [username, onChangeUsername] = React.useState("Username");
  const [password, onChangePassword] = React.useState("Password");
  const [confirmPassword, onChangeConfirmPassword] =
    React.useState("Confirm Password");

  return (
      <View style={styles.welcomeBG}>
        <Image 
          style={{ 
            width: 200, 
            height: 200, 
            marginTop: 80,
            marginBottom: 10,
            alignSelf: "center",
          }}
          source={require('../../assets/logo.png')}
        />
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
      />
      <ViewContainer>
      <TouchableOpacity
        style={{
          padding: 8,
          backgroundColor: "#009394",
          width: 200,
          height: 40,
          borderRadius: 10,
          marginBottom: 230,
        }}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text
          style={{
            color: "#ffffff",
            textAlign: "center",
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      </ViewContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    alignSelf: 'center',
    color: 'white',
    height: 40,
    width: 290,
    margin: 2,
    borderWidth: 1,
    borderBottomColor: "#009394",
    borderTopColor: "#27384c",
    borderLeftColor: "#27384c",
    borderRightColor: "#27384c",
    padding: 10,
  },
  welcomeBG: {
    backgroundColor: "#27384c",
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
});


export default CreateAcc;
