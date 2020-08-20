import { Platform } from 'react-native';

const iosPlatform = 'ios';

export const isIOS = (): boolean => Platform.OS === iosPlatform;
