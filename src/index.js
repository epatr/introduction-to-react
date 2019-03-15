import * as React from 'react';
import * as ReactDOM from 'react-dom';

const HelloWorld = () => {
    return React.createElement('header', null, 
        React.createElement('h1', null, 'Hello World!')
    );
};

ReactDOM.render(
    React.createElement(HelloWorld),
    document.querySelector('#root'),
);