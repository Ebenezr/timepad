import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import CustomBottomSheet from '@/components/CustomBottomSheet';
import { useAuth } from '@/context/AuthProvider';
import { Button } from '@/app/(public)/login';

export default function Timer() {
  const { logout, user } = useAuth();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timer</Text>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <Text>{user?.email}</Text>

      <Button title='Logout' onPress={logout} />
      {/* <CustomBottomSheet /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFAFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
