import React from 'react';
import {View, Text, StatusBar, ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Icon
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

// Components
import Stories from '../components/Stories';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.headbar}>
        <StatusBar
          backgroundColor="white"
          barStyle="dark-content"
          animated={true}
        />
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: 15,
            alignItems: 'center',
          }}>
          <FontAwesome name="plus-square-o" size={30} color={'black'} />
          <Text style={styles.text}>Instragram</Text>
          <Feather name="navigation" size={30} color={'black'} />
        </View>

        <ScrollView>
          <Stories />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Lobster',
    fontSize: 25,
    fontWeight: '500',
    color: 'black',
  },
  headbar: {
    backgroundColor: 'white',
    height: '100%',
  },
});

export default Home;
