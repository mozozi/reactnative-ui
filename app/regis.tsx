import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { theme } from './style/StyleSheet';

const RegisterScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={theme.container}>
      <View style={theme.innerContainer}>
        <Text style={theme.title}>Create Account</Text>
        <Text style={theme.subtitle}>Already have an account?, 
          <TouchableOpacity onPress={() => router.push('/login')}>
          <Text style={theme.linkText}>Login here</Text>
          </TouchableOpacity>
          </Text>

        <TextInput style={theme.input} placeholder="Username" placeholderTextColor="#999" />
        <TextInput style={theme.input} placeholder="Email" placeholderTextColor="#999" />
        <TextInput style={theme.input} placeholder="Password" secureTextEntry placeholderTextColor="#999" />
        <TextInput style={theme.input} placeholder="Confirm Password" secureTextEntry placeholderTextColor="#999" />


        <TouchableOpacity style={theme.button}>
          <Text style={theme.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;