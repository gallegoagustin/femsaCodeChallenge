import { Dimensions } from 'react-native';

export const getCustomDimensions = (type: string, value: number) => {
    if (type === 'width') {
        return (Dimensions.get('window').width * value) / 100;
    }
    if (type === 'height') {
        return (Dimensions.get('window').height * value) / 100;
    }
};
