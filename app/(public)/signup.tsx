import { Text, View } from '@/components/Themed';
import { useAuth } from '@/context/AuthProvider';
import { Form, FormikProvider, useFormik } from 'formik';
import { Alert, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import * as Yup from 'yup';
import { Button } from './login';

const logInSchema = Yup.object().shape({
  email: Yup.string().email().required('email is required'),
  password: Yup.string().required('password is required'),
});

export default function signup() {
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

  const {
    errors,
    touched,
    getFieldProps,
    handleSubmit,
    handleChange,
    handleBlur,
    values,
  } = formik;

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
        <FormikProvider value={formik}>
          <Form autoComplete='off' onSubmit={formik.handleSubmit}>
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
                placeholderTextColor={'#828282'}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                secureTextEntry
              />
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>
            <Button
              title='Sign up'
              onPress={handleSubmit}
              style={styles.button}
            />
          </Form>
        </FormikProvider>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: '80%',
  },
  header: {
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
  input: {
    height: 40,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
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
