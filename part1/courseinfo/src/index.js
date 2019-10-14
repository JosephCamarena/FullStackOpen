import React, { useState } from 'react'
import ReactDOM from 'react-dom'
//SAVE THIS AS part1dNotes
//Complex states
//this one is better for this app:
    //conditional rendering:
const History = (props) => {
    if(props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }

    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}

// const Button = ({ onClick, text }) => (
//     <button onClick={onClick}>
//         {text}
//     </button>
// )

const Display = (props) => <div>{props.value}</div>

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App = (props) => {
    const [value, setValue] = useState(10)
    
//single function
    // const setToValue = (newValue) => {
    //     setValue(newValue)
    // }

    // return (
    //     <div>
    //         {value}
    //         <button onClick={() => setToValue(1000)}>thousand</button>
    //         <button onClick={() => setToValue(0)}>reset</button>
    //         <button onClick={() => setToValue(value + 1)}>increment</button>
    //     </div>
    // )

    //function returning a function
    const setToValue = (newValue) => () => {
        setValue(newValue)
    }

    return (
        <div>
            <Display value={value} />
            <Button handleClick={setToValue(1000)} text="thousand" />
            <Button handleClick={setToValue(0)} text="reset" />
            <Button handleClick={setToValue(value + 1)} text="increment" />
        </div>
    )
}

// const App = (props) => {
//     //useState must only be called as a declaration:
//     // only from the inside of a function body that defines
//     //                  a React component
//     const [left, setLeft] = useState(0)
//     const [right, setRight] = useState(0)
//     const [allClicks, setAll] = useState([])

//     const handleLeftClick = () => {
//         setAll(allClicks.concat('L'))
//         setLeft(left + 1)
//     }

//     const handleRightClick = () => {
//         setAll(allClicks.concat('R'))
//         setRight(right + 1)
//     }

//     return (
//         <div>
//             <div>
//                 {left}
//                 <Button onClick={handleLeftClick} text='left' />
//                 <Button onClick={handleRightClick} text='right' />
//                 {right}
//                 <History allClicks={allClicks} />
//             </div>
//         </div>
//     )
// }

//single object state functionality
// const App = (props) => {
//     const [clicks, setClicks] = useSate({
//         left: 0, right: 0
//     })

//     const handleLeftClick = () =>
//         setClicks({ ...clicks, left: clicks.left + 1})

//     const handleRightClick = () =>
//         setClicks({ ...clicks, right: clicks.right + 1})

//     // const handleLeftClick = () => {
//     //     const newClicks = {
//     //         ...clicks,
//     //         left: clicks.left + 1,
//     //         //right: clicks.right
//     //     }
//     //     setClicks(newClicks)
//     // }

//     // const handleRightClick = () => {
//     //     const newClicks = {
//     //         ...clicks,
//     //         // left: clicks.left,
//     //         right: clicks.right + 1
//     //     }
//     //     setClicks(newClicks)
//     // }

//     return (
//         <div>
//             <div>
//                 {clicks.left}
//                 <button onClick={handleLeftClick}>left</button>
//                 <button onClick={handleRightClick}>right</button>
//                 {clicks.right}
//             </div>
//         </div>
//     )
// }

ReactDOM.render(<App />, document.getElementById('root'))
