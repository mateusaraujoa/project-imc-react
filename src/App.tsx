import {useState} from 'react';
import './App.css';

function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState(0);

  console.log(weight, height);

    const calculateImc = () => {
    const imc = weight / (height * height);
    const formattedImc = imc.toFixed(2);
    setResult(+formattedImc);   
  };

  
  return (
    <>
      <h1>Calculadora de IMC</h1>
      <div className="card">
        <div>
          <label>
            Peso: 
            <div className='cardInput'>
            <input type='number' value={weight} onChange={(e) => setWeight(+e.target.value)} placeholder='Peso (kg)'></input>
            </div>
          </label>
          <label>
            Altura: 
            <div className='cardInput'>
            <input type='number' value={height} onChange={(e) => setHeight(+e.target.value)}  placeholder='Altura (m)'></input>
            </div>
          </label>
          <button type="submit" onClick={calculateImc}>Calcular</button>
          <h1>{result}</h1>
        </div>       
      </div>
      
    </>
  )
}

export default App

