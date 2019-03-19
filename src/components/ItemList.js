import * as React from 'react';

export const ItemList = () => {
    const items = ['red', 'green', 'blue'];

    return <ul>
        { items.map(item => <li key={item}>{item}</li>) }
    </ul>;
};