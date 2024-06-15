import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAuth } from '@/context/AuthProvider';

export default function login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();

  const _login = (username: string, password: string) => {
    if (username === '' || password === '')
      Alert.alert('Error', 'Please enter a username and password');
    else login(username, password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to TimePad.</Text>
          <Text style={styles.subtitle}>
            Login or sign up to start tracking your time.
          </Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder='Enter your email'
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholderTextColor={'#828282'}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder='Enter your password'
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholderTextColor={'#828282'}
            secureTextEntry={true}
          />
        </View>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
        <Button
          style={styles.button}
          title='LOGIN'
          onPress={() => _login(username, password)}
        />
        <Text style={styles.signUpText}>
          Don't have an account? <Text style={styles.signUpLink}>Sign up</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const Button = ({
  title,
  onPress,
  style,
}: {
  title: string;
  onPress: () => void;
  style?: any;
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[style, styles.button]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070417',
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  separator: {
    height: 1,
    backgroundColor: '#828282',
    marginVertical: 20,
    opacity: 0.5,
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#828282',
    textAlign: 'center',
    marginTop: 8,
  },
  label: {
    color: '#fff',
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 6,
    padding: 12,
    color: '#fff',
    backgroundColor: 'rgb(13, 12, 34)',
    opacity: 0.8,
  },
  forgotPassword: {
    color: '#828282',
    textAlign: 'right',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ffff',
    borderRadius: 6,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  orText: {
    color: '#828282',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
  },

  signUpText: {
    color: '#828282',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  signUpLink: {
    color: '#ffff',
  },
  footerText: {
    color: '#828282',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 30,
    paddingHorizontal: 20,
  },
  learnMoreLink: {
    color: '#fff',
  },
});
