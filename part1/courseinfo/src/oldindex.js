import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import ".styles.css";
const App = (props) => {
  /*
  const contador = useState();
  const contadorValue = contador[0]
  const updateContador = contador[1]
  */

  /*const Counter = (props) => {
    return <h1>{props.number}</h1>
  }*/
  const Counter = ({number}) => {
    return <h1>{number}</h1>
  };

  const [contador, setContador] = useState(0);

  const handleClick = (props) => setContador(contador + props);
  const handleClickReset = () => setContador(0);

  const isEven = contador % 2 === 0;
  const mensajePar = isEven ? 'Es par' : 'Es impar';

  return (
    <div>
      <p>el valor del contador es:</p>
      <Counter number = {contador} />
      <p><small>{mensajePar}</small></p>
      <button onClick={() => { handleClick(1) }}>+ 1</button>
      <button onClick={() => { handleClick(-1) }}>- 1</button>
      <button onClick={() => { handleClickReset() }}>Restaurar</button>
    </div>
  )
}


ReactDOM.render(<App />,
  document.getElementById('root'));
