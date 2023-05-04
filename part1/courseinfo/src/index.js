import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'

const History = (props) => {
    if (props.counters.length === 0) {
      return (
        <h3>
          Aun no se ha usado el contador
        </h3>
      )
    }
  
    return (
      <div>
        Historial: {props.counters.join(', ')}
      </div>
    )
  }
  
  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )
const App = () => {
    //const [left, setLeft] = useState(0)
    //const [right, setRight] = useState(0)
    const [clicks, setClicks] = useState([])

    const [counters, setCounters] = useState({
        left: 0,
        right: 0,
    })


    const handleClickLeft = () => {
        setCounters({
            ...counters,
            left: counters.left + 1,
        })
        setClicks(prevClicks => ([...prevClicks, 'L']))
    }
    const handleClickRight = () => {
        setCounters({
            ...counters,
            right: counters.right + 1,
        })
        setClicks(prevClicks => ([...prevClicks, 'R']))
    }

    return (
        <div>
            {counters.left}
            <Button onClick={handleClickLeft} text="left"/>
            <Button onClick={handleClickRight} text="right" />
            {counters.right}
            <p>Clicks totales: {clicks.length}</p>
            <History counters={clicks} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root'));
