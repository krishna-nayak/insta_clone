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
  <StatusBar backgroundColor="white" barStyle="dark-content" animated={true} />
  <View>
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
  </View>
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

Status Bar is doees not changing there color ... bug have beign detected in the App.

Let solve the Probleam
