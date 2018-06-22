# **Basic source structure for a React Native project using Expo & Ignite**

## I. Learn React Native:
* [React Native Basic Tutorial](https://facebook.github.io/react-native/docs/tutorial.html)
* [React Native Cheatsheet](https://github.com/refinery29/react-native-cheat-sheet)
* [React Native Styling Cheatsheet](https://github.com/vhpoet/react-native-styling-cheat-sheet)
* [Expo SDK API](https://docs.expo.io/versions/latest/sdk/index.html)
* [Ignite CLI](https://github.com/infinitered/ignite)

## II. To start with Project

1. Setup CLIs

> `npm i -g react-native-cli`<br/>
> `npm i -g ignite-cli`

2. Setup Expo XDE

> Go to [https://github.com/expo/xde](https://github.com/expo/xde) to download & install Expo XDE tool which helps create & debug app on mobile

3. Install Expo Client

> Go to App Store/Google Playstore, find and install `Expo Client` app on your Iphone/Android device

4. Clone source code from this repository to your PC

> `git clone https://github.com/truonggiangdao/rn-expo-base.git`

5. Remove .git folder on your source code (so that you can use on your project GIT repo)

> `cd rn-expo-base`<br/>
> `rm -rf ./.git`

6. Install package dependencies

> `npm i`

7. Open Expo XDE on your PC and run this project

## III. Coding Convention

This project is setted up with following Style guides:

* [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
* [Eslint Plugin React](https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules)
* [Eslint Plugin React Native](https://github.com/Intellicode/eslint-plugin-react-native#list-of-supported-rules)

To run code checking (linting):

> `npm run lint`

## IV. Unit testing

Each components in your project should have a test file. Naming convention: `yourComponent.test.js` where `yourComponent` is the name of the component you are writing test for. To run unit test:

> `npm run test`