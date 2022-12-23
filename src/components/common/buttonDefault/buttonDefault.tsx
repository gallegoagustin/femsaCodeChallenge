import { View, Text, Pressable } from 'react-native';
import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import styles from './buttonDefault.styles';

export default function ButtonDefault(props: Props) {
    const { title, containerStyles, handlePressFunction, disabled } = props;

    return (
        <Pressable
            style={[styles.buttonContainer, containerStyles ? containerStyles : styles.defaultButtonStyles, disabled === true ? styles.disabled : null]}
            onPress={() => handlePressFunction()}
        >
            <View>
                <Text style={styles.buttonTitle}>{title}</Text>
            </View>
        </Pressable>
    );
}

ButtonDefault.propTypes = {
    title: PropTypes.string.isRequired,
    containerStyles: PropTypes.object,
    handlePressFunction: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

type Props = InferProps<typeof ButtonDefault.propTypes>;
