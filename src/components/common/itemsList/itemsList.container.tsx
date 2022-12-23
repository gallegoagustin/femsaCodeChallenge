import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import ItemsList from './itemsList';

export default function ItemsListContainer(props: Props) {
    const { items, filter } = props;

    const [filteredItems, setFilteredItems] = React.useState<Array<any> | null>([]);

    const handleFilterChange = () => {
        if (items === null) setFilteredItems(null);
        if (items !== null && filter === 'all') {
            setFilteredItems(items);
        }
        if (items !== null && filter === 'won') {
            const filtered = items.filter(item => !item.is_redemption);
            setFilteredItems(filtered);
        }
        if (items !== null && filter === 'lost') {
            const filtered = items.filter(item => item.is_redemption);
            setFilteredItems(filtered);
        }
    };

    React.useEffect(() => {
        handleFilterChange();
    }, [filter, items]);

    const childProps = {
        items: filteredItems,
    };

    return <ItemsList {...childProps} />;
}

ItemsListContainer.propTypes = {
    items: PropTypes.array,
    filter: PropTypes.string.isRequired,
};

type Props = InferProps<typeof ItemsListContainer.propTypes>;
