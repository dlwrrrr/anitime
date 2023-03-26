import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import Firebase from "../firebase";

class Login extends React.Component {
  state = {
    ID: ``,
    pW: ``,
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          value={this.state.id}
          placeholder="ID"
          onChangeText={(id) => this.setState({ id })}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputBox}
          value={this.state.password}
          placeholder="PW"
          onChangeText={(pw) => this.setState({ pw })}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Button title="Don't have an account yet? Sign up" />
      </View>
    );
  }
}

export default Login;