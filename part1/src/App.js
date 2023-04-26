import './App.css';
import Mensaje from './Mensaje';
const Description = () => {
  return <p>Esta es una app de prueba del curso FullStackOpen</p>
};
function App() {
  return (
    <div className="App">
      <Mensaje color='red' msg='Estamos trabajando' />
      <Mensaje color='blue' msg='en un curso' />
      <Mensaje color='green' msg='de react'/>
      <Description />
    </div>
  );
}

export default App;
