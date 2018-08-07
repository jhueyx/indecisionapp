'use strict';

console.log('App.js is running!');

//JSX- JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        '  This is some info '
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            ' item one '
        ),
        React.createElement(
            'li',
            null,
            ' item two '
        )
    )
);

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' Jason Huey '
    ),
    React.createElement(
        'p',
        null,
        ' 30 '
    ),
    React.createElement(
        'p',
        null,
        ' San Francisco '
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
