import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { theme } from './style/StyleSheet';

const ResetPasswordScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={theme.container}>
      <View style={theme.innerContainer}>
        <Text style={theme.title}>Reset Password</Text>
        <Text style={theme.subtitle}>Enter your email to receive a reset link.</Text>

        <TextInput style={theme.input} placeholder="Email Address" placeholderTextColor="#999" />

        <TouchableOpacity style={theme.button}>
          <Text style={theme.buttonText}>Send Link</Text>
        </TouchableOpacity>

        <View style={theme.footer}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={theme.linkText}>Back to Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;