import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}, you are {props.age} years old</p>
        </div>
    )
}

const App = () => {
    var name= 'Joe'
    var age = 10

    return (
        <div>
            <h1>Greetings</h1>
            <Hello name="Maya" age={25+3} />
            <Hello name={name} age={age} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));