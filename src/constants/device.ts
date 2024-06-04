import { Dimensions, Platform } from 'react-native';

export const { height: deviceHeight, width: deviceWidth } = Dimensions.get(
  'screen',
);
export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
