<p align="center">
  <img src="doc/img/logo.png" width="150"/></br>
  <h1 align="center">Stargazers Viewer</h1>
</p>

# Index
- [Description](#description)
- [Dependencies](#dependencies)
- [Architecture](#architecture)
  - [Structure](#structure)
  - [Testing](#testing)
  - [Documentation](#documentation)
  - [Versioning](#versioning)
- [Build](#build)

## Description
Stargazers Viewer is a React Native application whose use case is displaying the list of users who starred a GitHub repository, namely, stargazers.

## Dependencies
A brief roundup of the main dependencies used in the project: 
- [@react-navigation/native-stack](https://reactnavigation.org/docs/stack-navigator/): native stack navigator for navigating through screens, with `UINavigationController` and `Fragmet` as underlying implmenetations;
- [@rneui/base and @rneui/themed](https://reactnativeelements.com): React Native Elements UI toolkit which provides several highly customizable components with theme support;
- [@testing-library/react-native](https://testing-library.com): testing library which provides a powerful toolbox for writing maintainable tests;
- [redux-saga-test-plan](https://github.com/jfairbank/redux-saga-test-plan): testing library for Redux Saga;
- [axios](https://axios-http.com): promise based HTTP client for wrapping API calls;
- [i18next & react-i18next](https://www.i18next.com): internalization and string handling framework;
- [react-hook-form](https://react-hook-form.com): concise interface for managing form validation through hooks;
- [react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash): native splash screen support with a CLI for generating necessary assets;
- [react-redux](https://react-redux.js.org): React binding for Redux, a state container for the app;
- [redux-saga](https://redux-saga.js.org): middlware for Redux to allow side-effects operations within Redux.

## Architecture
The application is composed of two screens handled by a navigator. It doesn't provide any authentication method, thus the GitHub API limit rate per hour is lower.
The `Home` screen contains a simple form where the user can input the repository owner, the repository name and can choose through a checkbox if the *starred-at* timestamp has to be included in the list or not. 
The form validation is handled through `react-hook-form`, even though it seems like GitHub doesn't provide official documentation on how these fields should be validated. 
Length has been limited due to being very easy to verify by using the web interface even though these values might change in the future. 

The `List` screen contains the list of stargazers handled through a `FlatList`. Avatar, username and timestamp (if required) form an element of the list. 
Optimization comes in mind when thinking about `FlatList`, which handles the task pretty well in this use case by limiting re-rendering of the single elements.
Pagination is used as per Github's API with a default value of 30 elements per page.
An interesting [article](https://discord.com/blog/how-discord-achieves-native-ios-performance-with-react-native) has been published by Discord on their blog a few years ago, which dives in how they optmized this aspect of their React Native app for iOS. 
A component called [recyclerlistview](https://github.com/Flipkart/recyclerlistview) is mentioned in the blog post but no significant differences have been noticed in this use case.

The state of the application is managed by Redux and Redux Saga, as mentioned earlier (ed: I've always used [jotai](https://jotai.org) as state managament for my React Native applications. Jotai has a completely different approach from the Redux as the state resides within React and it's fully based on `useState` and `useContext` hooks. Even though the learning curve on Jotai is definitely not as steep as Redux's, I found out that there are some limitations to its approach, like not being able to access atom values outside of the React lifecycle. 
I'm currently trying to fork my application to implement Redux over Jotai to get the hang of it).

### Structure
| Codebase              |      Description          |
| :-------------------- | :-----------------------: |
| [api](src/api/)        |      GitHub API           |
| [components](src/components/)  |     Common Components          |
| [localization](src/localization/)      | Translations files and setup     |
| [navigators](src/navigators/)    |   Navigators related files        |
| [store](src/store/)        |   Redux and Redux Saga related files        |
| [types](src/types/)      |   Reused Types        |
| [views](src/views/)        |      Screens of the application          |

### Testing 
Tests for the application are written in [jest](https://jestjs.io) along with [@testing-library/react-native](https://testing-library.com).

`__test__` and `__mock__` folders are defined in each subfolder where tested coded is contained, including `src/components` and `src/store`.
A script to run tests is defined in the `package.json` file and can be invoked by moving into the project folder and by typing: 
```
yarn test
```

### Documentation 
Beside this README, code is documentented by following Microsoft's [TSdoc](https://tsdoc.org) standard proposal. It's based on [JSdoc](https://jsdoc.app) and can be parsed by numerous tool.
A script has been defined in the `package.json`, which uses [typedoc](https://typedoc.org), to generate HTML documentation in `src/doc/typedoc` and can by invoked by moving into the project folder and by typing: 
```
yarn doc
```

### Versioning
Commits of this repository follow the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) standard, albeit without defining scopes.

## Build
Follow [React Native environment setup guide](https://reactnative.dev/docs/environment-setup) to install React Native CLI, according to the desired operating system.

The following instructions have been tested on macOS Ventura with `bash` shell. Virtual environments have been used when needed and the chosen package manager is `yarn`:
* Install [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for managing Node.js versions;
* Install [rbenv](https://github.com/rbenv/rbenv) for managing Ruby versions;
* Install [yarn](https://pm2.keymetrics.io) via npm by typing `npm install --global yarn`;
* Clone the repository and `cd` into the root directory;
* Install the appropriate ruby version by tpying `rbenv install`;
* Install the appropriate node version by tpying `nodenv install`;
* Install dependencies via `yarn install`; 
* **Only on macOS**, install CocoaPods dependencies with [bundler](https://bundler.io) by running `cd ios && bundler installer && bundler exec pod install && cd ..`;
* Start the application on an emulator by running `yarn ios` or `yarn android`.

