import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import CustomBottomSheet from '@/components/CustomBottomSheet';

export default function Timer() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timer</Text>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <CustomBottomSheet />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
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
