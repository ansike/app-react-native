import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function Home(props) {
  console.log(props);
  
  // navigation
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>
        Home Screen
        {/* <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Orders')}
        /> */}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default Home;
