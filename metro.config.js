const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const {
  wrapWithReanimatedMetroConfig,
} = require("react-native-reanimated/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

// watch the src folder
config.watchFolders = [path.resolve(__dirname, "src")];

module.exports = wrapWithReanimatedMetroConfig(
  withNativeWind(config, { input: "./src/global.css" })
);
