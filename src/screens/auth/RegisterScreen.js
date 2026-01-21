import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

const RegisterScreen = () => {
  return (
    <View style={globalStyles.screen}>
      <View style={styles.container}>
        <Text style={globalStyles.title}>Register</Text>

        <TextInput placeholder="First Name" style={styles.input} />
        <TextInput placeholder="Last Name" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />

        <TouchableOpacity style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginTop: 60,
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    marginTop: 16,
  },
});
