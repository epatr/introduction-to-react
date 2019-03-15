import * as React from 'react';
import * as ReactDOM from 'react-dom';

// const HelloWorld = () => {
//     return React.createElement('header', null, 
//         React.createElement('h1', null, 'Hello World!')
//     );
// };

const HelloWorld = () => 
    <React.Fragment>
        <header>
            <h1>Hello World</h1>
        </header>
        <footer>
            <small>Copyright 2019 Some Nonsense</small>
        </footer>
    </React.Fragment>;

ReactDOM.render(
    <HelloWorld />,
    document.querySelector('#root'),
);