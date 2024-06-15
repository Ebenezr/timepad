import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const icons: { [key: string]: React.ComponentType<any> } = {
  index: (props) => <MaterialIcons name='plus-circle' size={36} {...props} />,
  report: (props) => <Ionicons name='pie-chart-outline' size={30} {...props} />,
  timer: (props) => (
    <MaterialIcons name='clock-time-five-outline' size={30} {...props} />
  ),
};

// clock-time-five-outline
// plus-circle
// pie-chart-outline
