import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = () => <div><h1>Give Feedback</h1></div>

const Body = () => <div><h1>Statistics</h1></div>

const Button = ({ handleClick, text }) => {
    return (
    <button onClick={handleClick}>
        {text}
    </button>
    )
}

const Statistic = (props) => {
    let good = props.good
    let neutral = props.neutral
    let bad = props.bad
    let allClicks = props.allClicks
    let average = ( (good - bad) / allClicks ).toFixed(1)
    let positive = ( (good / allClicks) * 100).toFixed(1)

    if(allClicks === 0) {
        return (
            <div>No feedback given</div>
        )
    }

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <TableData text="Good" value={good} />
                    </tr>
                    <tr>
                        <TableData text="Neutral" value={neutral} />
                    </tr>
                    <tr>
                        <TableData text="Bad" value={bad} />
                    </tr>
                    <tr>
                        <TableData text="All" value={allClicks} />
                    </tr>
                    <tr>
                        <TableData text="Average" value={average} />
                    </tr>
                    <tr>
                        <td>Positive: </td>
                        <td>{positive}%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const TableData = ({ text, value }) => {
    return (
        <>
        <td>{text}</td>
        <td>{value}</td>
        </>
    )
}

const App = (props) => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [allClicks, setAll] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
        setAll(allClicks + 1)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
        setAll(allClicks + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
        setAll(allClicks + 1)
    }

    return (
        <div>
            <Header />
            <Button handleClick={handleGoodClick} text="good" />
            <Button handleClick={handleNeutralClick} text="neutral" />
            <Button handleClick={handleBadClick} text="bad" />
            <Body />
            <Statistic good={good} neutral={neutral} bad={bad} allClicks={allClicks} />
        </div>
    )
} //end App

ReactDOM.render(<App />,
    document.getElementById('root')
)