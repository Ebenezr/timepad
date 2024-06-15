import { Button, StyleSheet, Text } from 'react-native';

import { View } from '@/components/Themed';
import CustomBottomSheet from '@/components/CustomBottomSheet';

export default function Report() {
  return (
    <View style={styles.container}>
      <Text>report</Text>
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
    color: 'red',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
