import { useState, useEffect } from 'react';
import { StatusBar, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView, initialWindowMetrics } from 'react-native-safe-area-context';
import { useTheme } from './Theme';
import mainStyles from './Styles/MainStyles';
import * as Font from 'expo-font';
import Bar from './MainBar/Bar';
import CollectionView from './CollectionView/Collection';

const App = () => {
  const [fontLoaded, setFontLoaded] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    Font.loadAsync({
      'StackSans': require('../assets/fonts/Stack_Sans/StackSansNotch-VariableFont_wght.ttf'),
    }).then(() => setFontLoaded(true))
  }, [])

  if (!fontLoaded) return <></>;

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView style={[mainStyles.wrapper, {backgroundColor: theme.primary}]}>
        <StatusBar
          barStyle={theme.name == "dark" ? 'light-content': 'dark-content'}
          backgroundColor={theme.primary}
        />
        <Bar />
        <CollectionView />
        <Pressable onPress={toggleTheme} style={mainStyles.themeButton}>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
