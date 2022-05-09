import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={{fontFamily: 'Lobster-Regular'}}>Hello World</Text>
          <Icon name="play" size={24} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
