console.log ('App.js is running!');

//JSX- JavaScript XML
var template = (
        <div>   
            <h1>Indecision App</h1> 
            <p>  This is some info </p>
            <ol> 
                <li> item one </li>
                <li> item two </li>
            </ol>
        </div>);

var template2 = (
    <div> 
        <h1> Jason Huey </h1>
        <p> 30 </p>
        <p> San Francisco </p>
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template2,appRoot);