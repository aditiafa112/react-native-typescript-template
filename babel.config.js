module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['nativewind/babel'],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: ['API_URL', 'API_TOKEN'],
        safe: true,
        allowUndefined: false,
        verbose: false,
      },
    ],
  ],
};
