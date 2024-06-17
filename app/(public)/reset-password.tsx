import { useAuth } from '@/context/AuthProvider';
import { Form, FormikProvider, useFormik } from 'formik';
import {
  Alert,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import * as Yup from 'yup';
import { Button } from './login';
import { defaultStyles } from '@/constants/styles';
import { Link } from 'expo-router';

const resetPasswordSchema = Yup.object().shape({
  email: Yup.string().email().required('email is required'),
});

export default function resetPassword() {
  const { resetPassword } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: async () => {
      try {
        await resetPassword(values.email);
      } catch (error: any) {
        Alert.alert('Error', error.message);
      }
    },
    validationSchema: resetPasswordSchema,
  });

  const { errors, touched, handleSubmit, handleChange, handleBlur, values } =
    formik;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={defaultStyles.header}>
          <Text style={defaultStyles.title}>Reset your password.</Text>
          <Text style={defaultStyles.subtitle}>
            Enter your email to reset your password.
          </Text>
        </View>
        <View style={defaultStyles.separator} />
        <FormikProvider value={formik}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder='Enter your email'
              style={defaultStyles.input}
              placeholderTextColor={'#828282'}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            {errors.email && touched.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
          </View>
          <Button
            title='Reset password'
            onPress={handleSubmit}
            style={styles.button}
          />
        </FormikProvider>
        <Link href='(public)/login' asChild>
          <Text style={styles.signUpText}>Back to login</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070417',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  header: {
    marginBottom: 20,
  },
  signUpText: {
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
    color: '#ffff',
  },
  forgotPassword: {
    color: '#828282',
    textAlign: 'right',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#828282',
  },
  separator: {
    height: 1,
    backgroundColor: '#E5E5E5',
    marginVertical: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },

  errorText: {
    fontSize: 12,
    color: 'red',
    marginTop: 5,
  },
  button: {
    marginTop: 20,
  },
});
