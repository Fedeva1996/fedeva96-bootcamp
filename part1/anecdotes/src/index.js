import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

function obtenerRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const votos = Array(anecdotes.length).fill(0)
  const [puntos, setPuntos] = useState(votos)
  const [maxIndex, setMaxIndex] = useState(0)
  const handleVotes = () => {
    const copia = [...puntos]
    copia[selected] += 1;
    setPuntos(copia)
    setMaxIndex(copia.indexOf(Math.max(...copia)))
  }

  return (
    <div>
      <p>Vota por las anecdotas</p>
      <Button onClick={() => handleVotes()} text="Votar" />
      <p>Votos:{puntos[selected]}</p>
      <Button onClick={() => setSelected(obtenerRandomInt(anecdotes.length))} text="Cambiar" />
      <p>Anecdota:{props.anecdotes[selected]}</p>
      <h2>Anecdota con más votos</h2>
      <p>{props.anecdotes[maxIndex]}</p>
      <p>Tiene {puntos[maxIndex]} votos</p>
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