# Instagram-Clone

## This repo contain a clone of Instagram work on both android & IOS devies by the help of _Recat Native_. This repo conatian my progression on this Project and steps how I completed this Project

## 🗓 Day 1

- Setting up the development [environment of React Native](https://reactnative.dev/docs/environment-setup).
- Basic [Introduction on React Native](https://reactnative.dev/docs/getting-started).

Let's start creating the `React Native` Project name as `insta_clone`

```bash
npx react-native init insta_clone
```

For better understanding go through the documatation [environment of React Native](https://reactnative.dev/docs/environment-setup).

We are building Navbar for our application. We need some UI icon with Font for Instagram. So we need to install few dependencies.

### [React Native Navigation](https://reactnavigation.org/docs/getting-started)

Adding the Dependency of React Native Navigation only need to install these npm pakages.

```bash
 npm install @react-navigation/native
```

```bash
npm install react-native-screens react-native-safe-area-context
```

```bash
npm install @react-navigation/native-stack
```

```bash
npm install @react-navigation/bottom-tabs
```

### [React Native Vector Icon](https://www.npmjs.com/package/react-native-vector-icons)

```bash
npm i react-native-vector-icons
```

### React native Fonts

- [Adding custom fonts in React Native](https://www.bigbinary.com/learn-react-native/adding-custom-fonts)
- [Lobster Font](https://fonts.google.com/specimen/Lobster)

Now, Link the newly added asset and dependences by running the following command:

```bash
npx react-native link
```

Let test the program by run this command on terminal

```bash
npx react-native start
```

Now, Start the emulator for function on app

```bash
npx react-native run-android
```

And for IOS

```bash
npx react-native run-ios
```

---

## 🗓 Day 2

Let's Building bottom nav bar, but First let Structure the folder and file.

On source `src` folder let create folder `components`, `screen`, `stroage` within screen folder we start create file `Home.js`, `Activity.js`, `Profile.js`, `Reels.js` and `Search.js`. Follow as:

```structure
── src
    ├── components
    ├── screen
    │   ├── Activity.js
    │   ├── Home.js
    │   ├── Profile.js
    │   ├── Reels.js
    │   └── Search.js
    └── storage
        └── images
```

Let start Coding of one file we created

### Home.js

```js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
```

---

### Activity.js

```js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Activity = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Activity Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Activity;
```

---

### Profile.js

```js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const Profile = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Profile Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Profile;
```

---

### Reels.js

```js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const Reels = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Reels Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Reels;
```

---

### Search.js

```js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const Search = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Search Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Search;
```

Now, Start working on `App.js`.

Start importing all dependence for [React Navigation](https://reactnavigation.org/docs/getting-started) form node package.

```js
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
```

Inside `App` methods let start calling method `createNativeStackNavigator` store in `Stack` and `createBottomTabNavigator` store in `Tab`.

```js
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
```

within the `App` methods creating new methods named as `BottomTabScreen` which return Bottom Naviagtion structure.

### BottomTabScreen

```js
const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,

        tabBarIcon: ({focused, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
            size = focused ? size + 8 : size + 2;
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'ios-search-outline';
          } else if (route.name === 'Reels') {
            iconName = focused
              ? 'caret-forward-circle'
              : 'caret-forward-circle-outline';
          } else if (route.name === 'Activity') {
            iconName = focused ? 'ios-heart' : 'ios-heart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
          }
          return <Icon name={iconName} size={size} color={'#000'} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Reels" component={Reels} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
```

Now `App` method return `NavigatorContainer` within `Stack.Naigator` and `Stack.Screen` with component as `BottomTabScreen`.

```js
<NavigationContainer>
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Bottom" component={BottomTabScreen} />
  </Stack.Navigator>
</NavigationContainer>
```

At the end `App.js` will look like,

### App.js

```js
import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Components
import Home from './src/screen/Home';
import Search from './src/screen/Search';
import Activity from './src/screen/Activity';
import Profile from './src/screen/Profile';
import Reels from './src/screen/Reels';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarShowLabel: true,
          headerShown: false,

          tabBarIcon: ({focused, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
              size = focused ? size + 8 : size + 2;
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'ios-search-outline';
            } else if (route.name === 'Reels') {
              iconName = focused
                ? 'caret-forward-circle'
                : 'caret-forward-circle-outline';
            } else if (route.name === 'Activity') {
              iconName = focused ? 'ios-heart' : 'ios-heart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
            }
            return <Icon name={iconName} size={size} color={'#000'} />;
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Reels" component={Reels} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Bottom" component={BottomTabScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
```

## 🗓 Day 3

Let build Home Page of Instragram. Strating with Header Bar. which will look something like this.

---

## Image

---

Building this we need to import `SafeAreaView` from `react-native-safe-area-context` package on `Home.js`. This allows you to position your content appropriately around notches, status bars, home indicators, and other such device and operating system interface elements.

Then Adding `View` with the `height` of `100%`. and fontFamily as `Lobster` added in source file externally in `Day 1` with font color as `Black`
and few more styling with style of StatusBar i.e: Component to control the app's status bar. Added some UI element form `FontAwesome` `name="plus-square-o"` and `Feather` `name="navigation"`

```js
<View
  style={{
    fontFamily: 'Lobster',
    fontSize: 25,
    fontWeight: '500',
    color: 'black',
  }}>
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
        <Text
          style={{
            fontFamily: 'Lobster',
            fontSize: 25,
            fontWeight: '500',
            color: 'black',
          }}>
          Instragram
        </Text>
        <Feather name="navigation" size={30} color={'black'} />
      </View>

      <ScrollView>
        <Stories />
      </ScrollView>
    </View>
  </SafeAreaView>
</View>
```

This complete the header part now Let work on Stroies component. For that `ScrollView` followed by `Stories` component.

```js
<ScrollView>
  <Stories />
</ScrollView>
```

At the end Home.js look like.

### Home.js

```js
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
```

On component stories we will added this code.

### Stories.js

```js
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
      style={{padding: 20}}>
      {storyInfo.map((data, index) => (
        <TouchableOpacity key={index} onPress={() => navigation.push('Status')}>
          <View
            style={{
              position: 'relative',
              flexDirection: 'column',
              paddingHorizontal: 8,
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
```

On `Status.js` component add some basic Status screen component.

## Day 4

Status Bar is doees not changing there color ios but it change it color in Android Devices. After reserching I find the solution present in [StackOverFlow](https://stackoverflow.com/questions/39297291/how-to-set-ios-status-bar-background-color-in-react-native).

Code for screen component is

```js
<View style={{backgroundColor: 'black', height: '100%'}}>
  <StatusBar backgroundColor={'black'} barStyle="light-content" />
  <SafeAreaView>
    <View
      style={{
        height: '100%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* BAR */}
      <View
        style={{
          height: 3,
          width: '95%',
          borderWidth: 1,
          backgroundColor: 'gray',
          position: 'absolute',
          top: 18,
        }}>
        <Animated.View
          style={{
            height: '100%',
            backgroundColor: 'white',
            width: progressAnimation,
          }}></Animated.View>
      </View>
      {/* Profile */}
      <View
        style={{
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          top: 10,
          left: 0,
          width: '90%',
        }}>
        <View
          style={{
            borderRadius: 100,
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={image}
            style={{
              borderRadius: 100,
              backgroundColor: 'orange',
              resizeMode: 'cover',
              width: '92%',
              height: '92%',
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
          }}>
          <Text style={{color: 'white', fontSize: 15, paddingLeft: 10}}>
            {name}
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic
              name="close"
              style={{fontSize: 20, color: 'white', opacity: 0.6}}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* IMAGE Stories Status */}
      <Image
        source={image}
        style={{position: 'absolute', width: '100%', height: 600}}
      />
      {/* TEXT INPUT÷ */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginVertical: 10,
          width: '100%',
        }}>
        <TextInput
          placeholder="send message"
          placeholderTextColor={'white'}
          style={{
            borderColor: 'white',
            borderRadius: 25,
            width: '85%',
            height: 50,
            paddingLeft: 20,
            borderWidth: 1,
            fontSize: 20,
            color: 'white',
          }}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="navigation" style={{fontSize: 30, color: 'white'}} />
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
</View>
```

Adding animation for status-bar line for 5 seconds. and get back to Screen after 5 second.

```js
React.useEffect(() => {
  let timer = setTimeout(() => {
    navigation.goBack();
  }, 5000);

  Animated.timing(progress, {
    toValue: 5,
    duration: 5000,
    useNativeDriver: false,
  }).start();
  return () => clearTimeout(timer);
});

const [progress, setProgress] = React.useState(new Animated.Value(0));
const progressAnimation = progress.interpolate(
  {
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  },
  [],
);
```

at the End the look like.

### Status.js

```js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Status = ({route, navigation}) => {
  const {name, image} = route.params;

  React.useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);

    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  });

  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const progressAnimation = progress.interpolate(
    {
      inputRange: [0, 5],
      outputRange: ['0%', '100%'],
    },
    [],
  );
  return (
    <View style={{backgroundColor: 'black', height: '100%'}}>
      <StatusBar backgroundColor={'black'} barStyle="light-content" />
      <SafeAreaView>
        <View
          style={{
            height: '100%',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* BAR */}
          <View
            style={{
              height: 3,
              width: '95%',
              borderWidth: 1,
              backgroundColor: 'gray',
              position: 'absolute',
              top: 18,
            }}>
            <Animated.View
              style={{
                height: '100%',
                backgroundColor: 'white',
                width: progressAnimation,
              }}></Animated.View>
          </View>
          {/* Profile */}
          <View
            style={{
              padding: 15,
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
              top: 10,
              left: 0,
              width: '90%',
            }}>
            <View
              style={{
                borderRadius: 100,
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={image}
                style={{
                  borderRadius: 100,
                  backgroundColor: 'orange',
                  resizeMode: 'cover',
                  width: '92%',
                  height: '92%',
                }}
              />
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '100%',
              }}>
              <Text style={{color: 'white', fontSize: 15, paddingLeft: 10}}>
                {name}
              </Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionic
                  name="close"
                  style={{fontSize: 20, color: 'white', opacity: 0.6}}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* IMAGE Stories Status */}
          <Image
            source={image}
            style={{position: 'absolute', width: '100%', height: 600}}
          />
          {/* TEXT INPUT÷ */}
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginVertical: 10,
              width: '100%',
            }}>
            <TextInput
              placeholder="send message"
              placeholderTextColor={'white'}
              style={{
                borderColor: 'white',
                borderRadius: 25,
                width: '85%',
                height: 50,
                paddingLeft: 20,
                borderWidth: 1,
                fontSize: 20,
                color: 'white',
              }}
            />
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather
                name="navigation"
                style={{fontSize: 30, color: 'white'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Status;
```

## Day 5

Added a new Components name as `Post.js`. Display the post of Other user.

### Post.js

```js
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const Post = () => {
  const postInfo = [
    {
      postTitle: 'mr shermon',
      postPersonImage: require('../storage/images/userProfile.png'),
      postImage: require('../storage/images/post1.jpeg'),
      likes: 765,
      isLiked: false,
    },
    {
      postTitle: 'chillhouse',
      postPersonImage: require('../storage/images/profile5.jpeg'),
      postImage: require('../storage/images/post2.jpeg'),
      likes: 345,
      isLiked: false,
    },
    {
      postTitle: 'Tom',
      postPersonImage: require('../storage/images/profile4.jpeg'),
      postImage: require('../storage/images/post3.jpg'),
      likes: 734,
      isLiked: false,
    },
    {
      postTitle: 'The_Groot',
      postPersonImage: require('../storage/images/profile3.jpeg'),
      postImage: require('../storage/images/post4.jpeg'),
      likes: 875,
      isLiked: false,
    },
  ];
  return (
    <View>
      {postInfo.map((data, index) => {
        const [like, setLike] = React.useState(data.isLiked);
        return (
          <View
            key={index}
            style={{
              paddingBottom: 10,
              borderBottomColor: 'gray',
              borderBottomWidth: 0.1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={data.postPersonImage}
                  style={{width: 40, height: 40, borderRadius: 100}}
                />
                <View style={{paddingLeft: 5}}>
                  <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                    {data.postTitle}
                  </Text>
                </View>
              </View>
              <Feather name="more-vertical" style={{fontSize: 20}} />
            </View>
            <View
              style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={data.postImage}
                style={{width: '100%', height: 400}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 12,
                paddingVertical: 15,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity onPress={() => setLike(!like)}>
                  <AntDesign
                    name={like ? 'heart' : 'hearto'}
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: like ? 'red' : 'black',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionic
                    name="ios-chatbubble-outline"
                    style={{fontSize: 20, paddingRight: 10}}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather name="navigation" style={{fontSize: 20}} />
                </TouchableOpacity>
              </View>
              <Feather name="bookmark" style={{fontSize: 20}} />
            </View>
            <View style={{paddingHorizontal: 15}}>
              <Text>
                Liked by {like ? 'you and' : ''}
                {like ? data.likes + 1 : data.likes} others
              </Text>
              <Text
                style={{fontWeight: '700', fontSize: 14, paddingVertical: 2}}>
                If enjoy the video ! Please like and Subscribe :)
              </Text>
              <Text style={{opacity: 0.4, paddingVertical: 2}}>
                View all Comments
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={data.postPersonImage}
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: 100,
                      backgroundColor: 'orange',
                      marginRight: 10,
                    }}
                  />
                  <TextInput
                    placeholder="Add a comment"
                    style={{opacity: 0.5}}
                  />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Entypo
                    name="emoji-happy"
                    style={{fontSize: 15, color: 'lightgreen'}}
                  />
                  <Entypo
                    name="emoji-neutral"
                    style={{fontSize: 15, color: 'pink'}}
                  />
                  <Entypo
                    name="emoji-sad"
                    style={{fontSize: 15, color: 'red'}}
                  />
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Post;
```

Some updation in `Home.js` screen file need:

### Home.js

```js
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
```
