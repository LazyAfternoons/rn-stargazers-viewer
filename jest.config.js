module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@rneui/themed|@rneui/base|@rneui/themed-edge|@rneui/base-edge|react-native-size-matters|react-native-ratings|react-native-vector-icons|axios)/)',
  ],
};
