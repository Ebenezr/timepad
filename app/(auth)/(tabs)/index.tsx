import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import TimeCard from '@/components/TimeCard';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlashList } from '@shopify/flash-list';
import HeaderDisplayCard from '@/components/HeaderDisplayCard';
import { SafeAreaView } from 'react-native-safe-area-context';

const items = [
  {
    icon: <MaterialIcons name='plus' size={24} color='#FFB946' />,
    title: 'Design Sprint',
    time: '1h 30m',
    category: 'Design',
    tag: 'In Progress',
  },
  {
    icon: <MaterialIcons name='edit' size={24} color='#FFB946' />,
    title: 'Code Review',
    time: '2h',
    category: 'Development',
    tag: 'Pending',
  },
  {
    icon: <MaterialIcons name='delete' size={24} color='#FFB946' />,
    title: 'Bug Fixing',
    time: '3h',
    category: 'Debugging',
    tag: 'Completed',
  },
  {
    icon: <MaterialIcons name='search' size={24} color='#FFB946' />,
    title: 'Research',
    time: '4h',
    category: 'Learning',
    tag: 'In Progress',
  },
  {
    icon: <MaterialIcons name='check' size={24} color='#FFB946' />,
    title: 'Testing',
    time: '1h',
    category: 'Quality Assurance',
    tag: 'Pending',
  },
];
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderDisplayCard time='6h 30m' project='Project Name' />

      <View style={styles.listWrapper}>
        <View style={styles.header}>
          <Text style={styles.title}>Today</Text>
          <Text style={styles.subheading}>See All</Text>
        </View>
        <View style={styles.listItems}>
          <FlashList
            data={items}
            estimatedItemSize={10}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ paddingBottom: 20 }}
            renderItem={({ item }) => (
              <TimeCard
                icon={item.icon}
                title={item.title}
                time={item.time}
                category={item.category}
                tag={item.tag}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFAFF',
    display: 'flex',
    flexDirection: 'column',
  },
  listWrapper: {
    width: '100%',
    padding: 20,
  },
  listItems: {
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#070417',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
