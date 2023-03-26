import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Firebase from "../firebase";

class Signup extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleSignUp = () => {
    const { email, password } = this.state;
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate("ProfileScreen"))
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <TextInput
          style={styles.inputBox}
          value={this.state.name}
          placeholder="Full name"
          onChangeText={(name) => this.setState({ name })}
        /> */}
        <TextInput
          style={styles.inputBox}
          value={this.state.email}
          placeholder="Email"
          onChangeText={(email) => this.setState({ email })}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputBox}
          value={this.state.password}
          placeholder="Password"
          onChangeText={(password) => this.setState({ password })}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Signup;