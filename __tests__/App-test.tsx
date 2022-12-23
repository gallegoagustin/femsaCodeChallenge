/**
 * @format
 */

import 'react-native';
import React from 'react';
import ButtonDefault from '../src/components/common/buttonDefault/buttonDefault.container';
import ItemsList from '../src/components/common/itemsList/itemsList.container';
import PointsBox from '../src/components/common/pointsBox/pointsBox.container';
import { normalizeDates } from '../src/utils';
import { render, fireEvent } from '@testing-library/react-native';
import api from '../src/api';
import { axiosDataInstance } from '../src/api';
import renderer from 'react-test-renderer';

jest.mock('@react-navigation/native', () => {
    const mockFunction = jest.fn();
    return {
        useNavigation: () => ({
            navigate: mockFunction,
        }),
    };
});

jest.mock('axiosDataInstance', () => {
    const mockFunc = jest.fn(() => {
        return {
            get: jest.fn(),
        };
    });
    return {
        create: mockFunc,
    };
});

describe('Default Button Tests', () => {
    test('Render', () => {
        renderer.create(<ButtonDefault title="Button" onPress={() => console.log('tested')} />);
    });
    test('Handle Button Press', () => {
        const mockFunction = jest.fn();
        mockFunction.mockReturnValue('passed');
        const { getByText } = render(<ButtonDefault title="Button" onPress={mockFunction} />);
        fireEvent.press(getByText('Button'));
        expect(mockFunction.mock.results[0].value).toBe('passed');
    });
    test('Handle Disabled Button Press', () => {
        const mockFunction = jest.fn();
        mockFunction.mockReturnValue('passed');
        const { getByText } = render(<ButtonDefault title="Button" onPress={mockFunction} disabled={true} />);
        fireEvent.press(getByText('Button'));
        expect(mockFunction.mock.results).toHaveLength(0);
    });
});

describe('Items List', () => {
    test('Render', () => {
        renderer.create(
            <ItemsList
                items={[
                    {
                        createdAt: '2016-07-04T06:34:25.607Z',
                        product: 'Lorem',
                        points: 123,
                        image: 'example.url',
                        is_redemption: false,
                        id: '1',
                    },
                    {
                        createdAt: '2016-07-04T06:34:25.607Z',
                        product: 'Lorem',
                        points: 123,
                        image: 'example.url',
                        is_redemption: false,
                        id: '2',
                    },
                    {
                        createdAt: '2016-07-04T06:34:25.607Z',
                        product: 'Lorem',
                        points: 123,
                        image: 'example.url',
                        is_redemption: false,
                        id: '3',
                    },
                ]}
                filter={'all'}
            />,
        );
    });
    test('Has correct items', () => {
        const { getByText } = render(
            <ItemsList
                items={[
                    {
                        createdAt: '2016-07-04T06:34:25.607Z',
                        product: 'Title1',
                        points: 123,
                        image: 'example.url',
                        is_redemption: false,
                        id: '1',
                    },
                    {
                        createdAt: '2016-07-04T06:34:25.607Z',
                        product: 'Title2',
                        points: 123,
                        image: 'example.url',
                        is_redemption: false,
                        id: '2',
                    },
                    {
                        createdAt: '2016-07-04T06:34:25.607Z',
                        product: 'Title3',
                        points: 123,
                        image: 'example.url',
                        is_redemption: false,
                        id: '3',
                    },
                ]}
                filter={'all'}
            />,
        );
        const titles = [getByText('Title1'), getByText('Title2'), getByText('Title3')];
        expect(titles.length).toBe(3);
    });
    test('Shows error message', () => {
        const { getByTestId } = render(<ItemsList items={null} filter={'all'} />);
        const message = [getByTestId('errorListId')];
        expect(message.length).toBe(1);
    });
    test('Shows empty message', () => {
        const { getByTestId } = render(<ItemsList items={[]} filter={'all'} />);
        const message = [getByTestId('emptyListId')];
        expect(message.length).toBe(1);
    });
});

describe('Points Box', () => {
    test('Render', () => {
        renderer.create(<PointsBox points={1234} month={'Enero'} />);
    });
    test('Has correct content', () => {
        const { getByText } = render(<PointsBox points={1} month={'Marzo'} />);
        const texts = [getByText('Marzo'), getByText('1 pts')];
        expect(texts.length).toBe(2);
    });
    test('Shows error message', () => {
        const { getByTestId } = render(<PointsBox points={-1} month={'Febrero'} />);
        const message = [getByTestId('errorPointsId')];
        expect(message.length).toBe(1);
    });
});

describe('Utils', () => {
    test('Normalize dates length', () => {
        expect(
            normalizeDates([
                {
                    createdAt: '2016-07-04T06:34:25.607Z',
                    product: 'Lorem',
                    points: 123,
                    image: 'example.url',
                    is_redemption: false,
                    id: '1',
                },
            ]),
        ).toHaveLength(1);
    });
    test('Normalize dates data', () => {
        expect(
            typeof normalizeDates([
                {
                    createdAt: '2016-07-04T06:34:25.607Z',
                    product: 'Lorem',
                    points: 123,
                    image: 'example.url',
                    is_redemption: false,
                    id: '1',
                },
            ])[0].createdAt,
        ).toBe('string');
    });
});

describe('Endpoint Call', () => {
    test('Should return correct data', async () => {
        (axiosDataInstance.get as jest.Mock).mockResolvedValue({
            data: [
                {
                    createdAt: '2016-07-04T06:34:25.607Z',
                    product: 'Title1',
                    points: 123,
                    image: 'example.url',
                    is_redemption: false,
                    id: '1',
                },
                {
                    createdAt: '2016-07-04T06:34:25.607Z',
                    product: 'Title2',
                    points: 123,
                    image: 'example.url',
                    is_redemption: false,
                    id: '2',
                },
                {
                    createdAt: '2016-07-04T06:34:25.607Z',
                    product: 'Title3',
                    points: 123,
                    image: 'example.url',
                    is_redemption: false,
                    id: '3',
                },
            ],
        });
        const response = await api.products.getProductsList();
        expect(response).toHaveLength(3);
        expect(typeof response[0].product).toBe('string');
        expect(response[1]).toHaveProperty('id');
    });
});
