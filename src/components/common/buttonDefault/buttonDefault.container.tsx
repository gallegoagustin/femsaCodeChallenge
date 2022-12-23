import React from 'react';
import ButtonDefault from './buttonDefault';
import PropTypes, { InferProps } from 'prop-types';

export default function ButtonDefaultContainer(props: Props) {
    const { title, styles, onPress, disabled } = props;

    const handlePressFunction = () => {
        if (onPress && disabled !== true) {
            onPress();
        }
    };

    const childProps = {
        title,
        containerStyles: styles,
        handlePressFunction,
        disabled,
    };

    return <ButtonDefault {...childProps} />;
}

ButtonDefaultContainer.propTypes = {
    title: PropTypes.string.isRequired,
    styles: PropTypes.object,
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

type Props = InferProps<typeof ButtonDefaultContainer.propTypes>;
