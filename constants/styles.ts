import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    padding: 16,
  },
  pillButton: {
    padding: 10,
    height: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLink: {
    color: Colors.light.primary,
    fontSize: 18,
    fontWeight: '500',
  },
  descriptionText: {
    fontSize: 18,
    marginTop: 20,
    color: Colors.light.gray,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  pillButtonSmall: {
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextSmall: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    marginBottom: 10,
  },
  block: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 16,
    gap: 20,
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
  header: {
    marginBottom: 30,
    alignItems: 'center',
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
  separator: {
    height: 1,
    backgroundColor: '#828282',
    marginVertical: 20,
    opacity: 0.5,
    marginBottom: 40,
  },
});
