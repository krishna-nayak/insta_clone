import React from 'react';
import {View, Text, StatusBar, ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Icon
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionic from 'react-native-vector-icons/Ionicons';

// Components
import Stories from '../components/Stories';
import Post from '../components/Post';

const Home = () => {
  return (
    <View style={styles.headbar}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <SafeAreaView>
        <View style={{backgroundColor: 'white'}}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingHorizontal: `8%`,
              alignItems: 'center',
              padding: 10,
            }}>
            <FontAwesome name="plus-square-o" size={30} color={'black'} />
            <Text style={styles.text}>Instragram</Text>
            <Feather name="navigation" size={30} color={'black'} />
          </View>

          <ScrollView>
            <Stories />
            <Post />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
              }}>
              <Ionic
                name="ios-reload-circle-sharp"
                style={{fontSize: 60, opacity: 0.2}}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
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
