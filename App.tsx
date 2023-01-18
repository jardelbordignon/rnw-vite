import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
  Image,
} from 'react-native';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundColor = isDarkMode ? '#444444' : '#f2f2f2';
  const color = isDarkMode ? '#f2f2f2' : '#444444';
  const height = Platform.OS === 'web' ? '100vh' : undefined;

  return (
    <SafeAreaView style={[s.wrapper, {backgroundColor, height}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <ScrollView>
        <View style={s.header}>
          <Text style={[s.title, {color}]}>Your cross-platform app</Text>
          <Image
            source={{uri: 'https://www.pngrepo.com/png/79442/180/atom.png'}}
            style={s.logo}
          />
        </View>
        <View style={s.body}>
          <Text style={[s.subtitle, {color}]}>{Platform.OS} version</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop: 60,
    gap: 30,
  },
  body: {
    alignItems: 'center',
    marginTop: 80,
  },
  title: {
    fontSize: 56,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 32,
  },
  logo: {
    width: 180,
    height: 180,
  },
});

export default App;
