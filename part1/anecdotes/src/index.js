import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = (props) => {
    return (
        <>
        <h1>Anecdote of the day</h1>
        <div>
            {props.anecdote}
        </div>
        <div>
            has {props.value} vote{props.value === 1 ? <></> : <>s</>}
        </div>
        </>
    )
}

const Button = ({ text, handleClick}) => {
    return (
      <button onClick={handleClick} >
          {text}
      </button>
    )
}

const Statistics = ({ votes, array }) => {
  let i = votes.indexOf(Math.max(...votes))
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <div>{array[i]}</div>
      <div>has {votes[i]} vote{votes[i] === 1 ? <></> : <>s</>}</div>
    </div>
  )
}

const App = (props) => {
  const arrayLength = props.anecdotes.length
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(arrayLength).fill(0))

  const setToRandom = (props) => () => {
    setSelected( Math.floor(Math.random() * Math.floor(props)) )
  }

  const handleVote = (selected) => () => {
    const copy = [...votes]
    copy[selected] += 1
    setVote(copy)
  }

  return (
    <div>
        <Display anecdote={props.anecdotes[selected]} value={votes[selected]} />
        <Button text="vote" handleClick={handleVote(selected)} />
        <Button text="next anecdote" handleClick={setToRandom(6)} />
        <Statistics votes={votes} array={props.anecdotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)