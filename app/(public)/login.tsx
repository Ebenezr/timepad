import React from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Yup from 'yup';
import { useAuth } from '@/context/AuthProvider';
import { FormikProvider, useFormik } from 'formik';
import { Link } from 'expo-router';
import { defaultStyles } from '@/constants/styles';

const logInSchema = Yup.object().shape({
  email: Yup.string().email().required('email is required'),
  password: Yup.string().required('password is required'),
});

export default function login() {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async () => {
      try {
        await login(values.email, values.password);
      } catch (error: any) {
        Alert.alert('Error', error.message);
      }
    },
    validationSchema: logInSchema,
  });

  const { errors, touched, handleSubmit, handleChange, handleBlur, values } =
    formik;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to TimePad.</Text>
          <Text style={styles.subtitle}>
            Login or sign up to start tracking your time.
          </Text>
        </View>
        <View style={defaultStyles.separator} />
        <FormikProvider value={formik}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder='Enter your email'
              style={styles.input}
              placeholderTextColor={'#828282'}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            {errors.email && touched.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder='Enter your password'
              style={styles.input}
              value={values.password}
              placeholderTextColor={'#828282'}
              secureTextEntry={true}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
            />
            {errors.password && touched.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
          </View>
          <Link
            href='(public)/reset-password'
            style={defaultStyles.textLink}
            asChild
          >
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </Link>
          <Button style={styles.button} title='LOGIN' onPress={handleSubmit} />
        </FormikProvider>
        <Text style={styles.signUpText}>
          Don't have an account? <Text style={styles.signUpLink}>Sign up</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

export const Button = ({
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
  errorText: {
    color: 'red',
    fontSize: 10,
    marginTop: 5,
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
