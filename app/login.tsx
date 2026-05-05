import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { theme } from './style/StyleSheet';

const RegisterScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={theme.container}>
      <View style={theme.innerContainer}>
        <Text style={theme.title}>Login</Text>
        <Text style={theme.subtitle}>Dont have account? 
          <TouchableOpacity onPress={() => router.push('/regis')}>
          <Text style={theme.linkText}>Rgister here</Text>
          </TouchableOpacity>
          </Text>

        <TextInput style={theme.input} placeholder="Username" placeholderTextColor="#999" />
        <TextInput style={theme.input} placeholder="Password" secureTextEntry placeholderTextColor="#999" />

        <Text style={theme.subtitle}>Forgot password? 
          <TouchableOpacity onPress={() => router.push('/reset-password')}>
          <Text style={theme.linkText}>Reset here</Text>
          </TouchableOpacity>
          </Text>
        <TouchableOpacity style={theme.button}>
          <Text style={theme.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;