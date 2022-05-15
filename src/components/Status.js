import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

const Status = ({route, navigation}) => {
  const {name, image} = route.params;
  return (
    <View
      style={{
        backgroundColor: 'black',
        height: '100%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar backgroundColor={'black'} barStyle="light-content" />
      <Text style={{color: 'white'}}>{name} Status</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Status;
