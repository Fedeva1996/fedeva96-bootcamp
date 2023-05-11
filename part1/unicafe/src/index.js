import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)
const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return (
      <h2>Aun no se ha puntuado</h2>
    )
  }

  return (<div>
    <Statistic text="Good" value={good} />
    <Statistic text="Neutral" value={neutral} />
    <Statistic text="Bad" value={bad} />
    <Statistic text="All" value={all} />
    <Statistic text="Average" value={average} />
    <Statistic text="Positive" value={positive} />
  </div>)
}
const Statistic = ({ text, value }) => (
  <div>
    {text}: {value}
  </div>
);
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + bad + neutral;
  const average = (good - bad) / 3;
  const positive = (all ? (good * 100) / all : 0) + "%";

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => setBad(bad + 1)} text="Bad" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button onClick={() => setGood(good + 1)} text="Good" />
      <h1>Statistics</h1>
      {<Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />}
    </div>
  );
};

ReactDOM.render(<App />,
  document.getElementById('root')
);