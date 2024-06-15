import { View, StyleSheet } from 'react-native';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs';
import React, { ReactNode } from 'react';
import TabBarButton from './TabBarButton';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
  useTheme,
} from '@react-navigation/native';
import { EdgeInsets } from 'react-native-safe-area-context';

type LabelPosition = any;

type TabBarProps = {
  state: TabNavigationState<ParamListBase>;
  descriptors: {
    [key: string]: {
      options: {
        tabBarLabel?:
          | string
          | ((props: {
              focused: boolean;
              color: string;
              position: LabelPosition;
              children: string;
            }) => ReactNode);
        title?: string;
      };
    };
  };
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  insets: EdgeInsets;
};

const TabBar: React.FC<TabBarProps> = ({ state, navigation }) => {
  const primaryColor = '#000000 ';
  const greyColor = '#737373';
  const { colors } = useTheme();

  return (
    <View style={{ ...styles.tabbar, backgroundColor: colors.background }}>
      {state.routes.map((route, index) => {
        if (['_sitemap', '+not-found'].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };
        const onLongPress = () => {
          navigation.navigate(route.name);
        };

        return (
          <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? primaryColor : greyColor}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    borderCurve: 'continuous',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
});

export default TabBar;
