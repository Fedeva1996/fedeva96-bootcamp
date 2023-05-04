import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)
const Stats = ({good, neutral, bad}) => (
  <div>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
  </div>
)
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleBad = () => {
    setBad(bad + 1)
  }  
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }  
  const handleGood = () => {
    setGood(good + 1)
  }
  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleBad} text="bad" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleGood} text="bad" />
      <h1>Statistics</h1>
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)