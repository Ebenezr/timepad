// SimpleCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export interface HeaderDisplayCardProps {
  time: string;
  project: string;
}

const HeaderDisplayCard: React.FC<HeaderDisplayCardProps> = ({
  time,
  project,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.details}>
        <Text style={styles.time}>{time}</Text>
        <View style={styles.projectContainer}>
          <FontAwesome
            name='circle-o'
            size={12}
            color='purple'
            style={styles.icon}
          />
          <Text style={styles.project}>{project}</Text>
        </View>
      </View>
      <FontAwesome
        name='chevron-right'
        size={20}
        color='black'
        style={styles.chevron}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#F9F9F9',
    marginBottom: 12,
    // marginTop: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: '100%',
    height: 80,
  },
  details: {
    flexDirection: 'column',
  },
  time: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  projectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  icon: {
    marginRight: 8,
  },
  project: {
    fontSize: 16,
    color: '#333',
  },
  chevron: {
    marginLeft: 16,
  },
});

export default HeaderDisplayCard;
