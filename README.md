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
