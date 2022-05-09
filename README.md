# Instagram-Clone

## This repo contain a clone of Instagram work on both android & IOS devies by the help of _Recat Native_. This repo conatian my progression on this Project and steps how I completed this Project.

---

## 🗓 Day 1

- Setting up the development [environment of React Native](https://reactnative.dev/docs/environment-setup).
- Basic [Introduction on React Native](https://reactnative.dev/docs/getting-started).

Let's start creating the `React Native` Project name as `insta_clone`

```
npx react-native init insta_clone
```

For better understanding go through the documatation [environment of React Native](https://reactnative.dev/docs/environment-setup).

We are building Navbar for our application. We need some UI icon with Font for Instagram. So we need to install few dependencies.

### [React Native Navigation](https://reactnavigation.org/docs/getting-started)

Adding the Dependency of React Native Navigation only need to install these npm pakages.

```
 npm install @react-navigation/native
```

```
npm install react-native-screens react-native-safe-area-context
```

```
npm install @react-navigation/native-stack
```

```
npm install @react-navigation/bottom-tabs
```

- [React Native Vector Icon](https://www.npmjs.com/package/react-native-vector-icons).

```
npm i react-native-vector-icons
```

- React native Fonts.
  - [Adding custom fonts in React Native](https://www.bigbinary.com/learn-react-native/adding-custom-fonts)
  - [Lobster Font](https://fonts.google.com/specimen/Lobster)

Now, Link the newly added asset and dependences by running the following command:

```
npx react-native link
```

Let test the program by run this command on terminal

```
npx react-native start
```

Now, Start the emulator for function on app

```
npx react-native run-android
```

And for IOS

```
npx react-native run-ios
```

---
