import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import PointsBox from './pointsBox';

export default function PointsBoxContainer(props: Props) {
    const { points, month } = props;

    const childProps = {
        points,
        month,
    };

    return <PointsBox {...childProps} />;
}

PointsBoxContainer.propTypes = {
    points: PropTypes.number.isRequired,
    month: PropTypes.string.isRequired,
};

type Props = InferProps<typeof PointsBoxContainer.propTypes>;
