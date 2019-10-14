import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// const Header = (props) => {
//     // console.log(props)
//     return (
//         <div>
//             <h1>{props.course}</h1>
//         </div>
//     )
// }

// const Part = (props) => {
//     // console.log(props)
//     return (
//         <div>
//             <p>{props.parts} {props.exercises}</p>
//         </div>
//     )
// }

// const Content = (props) => {
//     // console.log(props.parts[0].name)
//     return (
//         <div>
//             <Part parts={props.parts[0].name} exercises={props.parts[0].exercises} />
//             <Part parts={props.parts[1].name} exercises={props.parts[1].exercises} />
//             <Part parts={props.parts[2].name} exercises={props.parts[2].exercises} />
//         </div>
//     )
// }

// const Total = (props) => {
//     // console.log(props)
//     return (
//         <div>
//             <p>Number of exercises {props.parts[0].exercises +
//                 props.parts[1].exercises +
//                 props.parts[2].exercises}</p>
//         </div>
//     )
// }

// const App = () => {
//     const course = {
//         name: 'Half Stack application development',
//         parts: [
//             {
//                 name: 'Fundamentals of React',
//                 exercises: 10
//             },
//             {
//                 name: 'Using props to pass data',
//                 exercises: 7
//             },
//             {
//                 name: 'State of a component',
//                 exercises: 14
//             }
//         ]
//     }
//     return (
//         <div>
//             <Header course={course.name} />
//             <Content parts={course.parts}/>
//             <Total parts={course.parts} />
//         </div>
//     )
// }
    //DESTRUCTURING
        // //Iteration 3
        // const Hello = ({ name, age }) => {
        //     //Iteration 2
        //     // const { name, age } = props
        //     //Iteration 1
        //     // const name = props.name
        //     // const age = props.age

        //     const bornYear = () => new Date().getFullYear() - age

        //     return (
        //         <div>
        //             <p>
        //                 Hello {name}, you are {age} years old
        //             </p>
        //             <p>So you were probably born in {bornYear()}</p>
        //         </div>
        //     )
        // }

        // const App = () => {
        //     const name = 'Peter'
        //     const age = 12;

        //     return (
        //         <div>
        //             <h1>Greetings</h1>
        //             <Hello name="Joseph" age={18 + 12} />
        //             <Hello name={name} age={age} />
        //         </div>
        //     )
        // }
    // //Page re-rendering
    // const App = (props) => {
    //     const [ counter, setCounter ] = useState(0)
    //     setTimeout(
    //         () => setCounter(counter + 1),
    //         1000
    //     )

    //     console.log('rendering...', counter)

    //     return (
    //         <div>{counter}</div>
    //     )
    // }

    // // setInterval(() => {
    // //     refresh()
    // //     counter += 1
    // // }, 1000)
    // ReactDOM.render(
    //     <App />,
    //     document.getElementById('root')
    // )

    const Display = ({ counter }) => <div>{counter}</div>
    
    const Button = ({ onClick, text }) => (
        <button onClick={onClick}>
            {text}
        </button>
    )

    //Event handling - Button clicking ++counter && Reset
    const App = (props) => {
        const [ counter, setCounter ] = useState(0)
        const setToValue = (value) => setCounter(value)

        return (
            <div>
                <Display counter={counter}/>
                <Button
                    onClick={() => setToValue(counter + 1)}
                    text='plus'
                />
                <Button
                    onClick={() => setToValue(0)}
                    text='zero'
                />
                <Button
                    onClick={() => setToValue(counter - 1)}
                    text='minus'
                />
            </div>
        )

        //helper functions: better to use these, b/c naming conventions
        // const increaseByOne = () =>
        //     setCounter(counter + 1)

        // const setToZero = () =>
        //     setCounter(0)

        //this:
        // const setToValue = (value) => {
        //     return () => {
        //         setCounter(value)
        //     }
        // }
        //rewrites to:
        //^ double arrow function; thought of as functions that have 
        //to be called twice in order to get the final result
        //known as a currying technique

        // const handleClick = () => {
        //     console.log('clicked')
        // }

        // return (
        //     <div>
        //         <div>{counter}</div>
        //         <button onClick={handleClick}>
        //             plus
        //         </button>
        //     </div>
        // )
    }

ReactDOM.render(<App />, document.getElementById('root'))