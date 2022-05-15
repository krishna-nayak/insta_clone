import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import {useNavigation} from '@react-navigation/native';

const Stories = () => {
  const navigation = useNavigation();

  const storyInfo = [
    {
      id: 1,
      name: 'Your Story',
      image: require('../storage/images/userProfile.png'),
    },
    {
      id: 0,
      name: 'Ram_Charan',
      image: require('../storage/images/profile1.jpeg'),
    },
    {
      id: 0,
      name: 'Tom',
      image: require('../storage/images/profile2.jpeg'),
    },
    {
      id: 0,
      name: 'The_Groot',
      image: require('../storage/images/profile3.jpeg'),
    },
    ,
    {
      id: 0,
      name: 'loverland',
      image: require('../storage/images/profile4.jpeg'),
    },
    ,
    {
      id: 0,
      name: 'chillhouse',
      image: require('../storage/images/profile5.jpeg'),
    },
  ];

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{padding: 1}}>
      {storyInfo.map((data, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            navigation.push('Status', {name: data.name, image: data.image})
          }>
          <View
            style={{
              position: 'relative',
              flexDirection: 'column',
              marginHorizontal: 7,
            }}>
            {data.id == 1 ? (
              <View
                style={{
                  position: 'absolute',
                  bottom: 15,
                  right: 10,
                  zIndex: 1,
                  borderRadius: 100,
                  overflow: 'hidden',
                }}>
                <Entypo
                  name="circle-with-plus"
                  style={{
                    fontSize: 20,
                    color: '#405de6',
                    backgroundColor: 'white',
                  }}
                />
              </View>
            ) : null}

            <View
              style={{
                width: 68,
                height: 68,
                backgroundColor: 'white',
                borderWidth: 1.8,
                borderRadius: 100,
                borderColor: '#c13584',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={data.image}
                style={{
                  resizeMode: 'cover',
                  width: '92%',
                  height: '92%',
                  borderRadius: 100,
                  backgroundColor: 'orange',
                  // padding: 1,
                }}
              />
            </View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 10,
                opacity: data.id == 0 ? 1 : 0.5,
                color: 'black',
              }}>
              {data.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Stories;
