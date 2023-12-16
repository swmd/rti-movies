import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const DESIRED_WIDTH = 375;

export const DeviceWidth = width;
export const DeviceHeight = height;
export const scale = (value: number) => (DeviceWidth * value) / DESIRED_WIDTH;
