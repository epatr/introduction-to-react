import * as React from 'react';
import * as ReactDOM from 'react-dom';

// const HelloWorld = () => {
//     return React.createElement('header', null, 
//         React.createElement('h1', null, 'Hello World!')
//     );
// };

const HelloWorld = () => 
    <header>
        <h1>Hello World</h1>
    </header>;

ReactDOM.render(
    <HelloWorld />,
    document.querySelector('#root'),
);