import { useThemeStore } from '@/store/themeStore';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { forwardRef, useMemo } from 'react';
import { Button, StyleSheet } from 'react-native';

interface CustomBottomSheetProps {}

type Ref = BottomSheet;

const CustomBottomSheet = forwardRef<Ref, CustomBottomSheetProps>(
  (props, ref) => {
    const snapPoints = useMemo(() => ['25%'], []);

    const theme = useThemeStore((state) => state.theme);
    const setTheme = useThemeStore((state) => state.setTheme);

    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
      <BottomSheet
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose
        backgroundStyle={{ backgroundColor: '#0D0A1C' }}
        handleIndicatorStyle={{ backgroundColor: '#ffff' }}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Button title='Toggle Theme' onPress={toggleTheme} />
        </BottomSheetView>
      </BottomSheet>
    );
  }
);

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

export default CustomBottomSheet;
