import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export interface CardProps {
  icon: React.ReactNode;
  title: string;
  time: string;
  category: string;
  tag: string;
}
const TimeCard = ({ icon, title, time, category, tag }: CardProps) => {
  return (
    <View style={styles.card}>
      {/* <View style={styles.iconContainer}>{icon}</View> */}
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.row}>
          <Text style={styles.category}>{category}</Text>
          <Text style={styles.tag}>{tag}</Text>
        </View>
        <Text style={styles.time}>{time}</Text>
      </View>
      <TouchableOpacity style={styles.playButton}>
        <Ionicons name='play' size={30} color='#4F4F4F' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    height: 80,
    width: '100%',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  category: {
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 8,
  },
  tag: {
    backgroundColor: '#FFCDD2',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  time: {
    color: '#757575',
    marginTop: 4,
  },
  playButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 50,
  },
  playText: {
    fontSize: 18,
    color: '#757575',
  },
});

export default TimeCard;
