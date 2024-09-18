import { Platform, StatusBar } from 'react-native';
import {
  hasNotch,
  hasDynamicIsland,
  getDeviceId,
} from 'react-native-device-info';

const isIphone = Platform.OS === 'ios' && !Platform.isPad && !Platform.isTV;

const isIphoneXAbove = () => isIphone && (hasNotch() || hasDynamicIsland());

const getIphoneStatusBar = () => {
  const deviceId = getDeviceId();

  // @ts-ignore
  if (!!iphonesStatusbarHeight[deviceId]) {
    // @ts-ignore
    return iphonesStatusbarHeight[deviceId];
  }

  return 20;
};

export const getStatusBarHeight = () => {
  return Platform.select({
    ios: getIphoneStatusBar(),
    android: StatusBar.currentHeight,
    default: 0,
  });
};

export const getBottomSpace = () => (isIphoneXAbove() ? 34 : 0);

const iphonesStatusbarHeight = {
  'iPhone10,3': 44, // iPhone X
  'iPhone10,6': 44, // iPhone X
  'iPhone11,2': 44, // iPhone XS
  'iPhone11,4': 44, // iPhone XS MAX
  'iPhone11,6': 44, // // iPhone XS MAX
  'iPhone11,8': 48, // iPhone XR
  'iPhone12,1': 48, // iPhone 11
  'iPhone12,3': 44, // iPhone 11 Pro
  'iPhone12,5': 44, // iPhone 11 Pro Max
  'iPhone13,1': 50, // iPhone 12 Mini
  'iPhone13,2': 47, // iPhone 12
  'iPhone13,3': 47, // iPhone 12 Pro
  'iPhone13,4': 47, // iPhone 12 Pro Max
  'iPhone14,4': 50, // iPhone 13 Mini
  'iPhone14,5': 47, // iPhone 13
  'iPhone14,2': 47, // iPhone 13 Pro
  'iPhone14,3': 47, // iPhone 13 Pro Max
  'iPhone14,7': 47, // iPhone 14
  'iPhone14,8': 47, // iPhone 14 Plus
  'iPhone15,2': 54, // iPhone 14 Pro
  'iPhone15,3': 54, // iPhone 14 Pro Max
  'iPhone15,4': 54, // iPhone 15
  'iPhone15,5': 54, // iPhone 15 Plus
  'iPhone16,1': 54, // iPhone 15 Pro
  'iPhone16,2': 54, // iPhone 15 Pro Max
  'iPhone17,3': 54, // iPhone 16
  'iPhone17,4': 54, // iPhone 16 Plus
  'iPhone17,1': 54, // iPhone 16 Pro
  'iPhone17,2': 54, // iPhone 16 Pro Max
};
