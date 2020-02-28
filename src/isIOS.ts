import { Platform } from 'react-native';

const IOS_PLATFORM = 'ios';

export const isIOS = (): boolean => Platform.OS === IOS_PLATFORM;
