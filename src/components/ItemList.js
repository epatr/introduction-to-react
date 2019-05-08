import * as React from 'react';

export const ItemList = props => {
    // const items = []; // ['red', 'green', 'blue'];

    return <ul>
        { 
            props.items.length === 0
            ? <li>No items</li>
            : props.items.map(item => <li key={item}>{item}</li>) 
            }
    </ul>;
};