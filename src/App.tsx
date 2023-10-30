import './App.css'

function App() {

  return (
    <>
      <h1>Calculadora de IMC</h1>
      <div className="card">
        <div>
          <label>
            Peso: 
            <div className='cardInput'>
            <input type='text' value='Insira aqui o seu peso'></input>
            </div>
          </label>
          <label>
            Altura: 
            <div className='cardInput'>
            <input type='text' value='Insira aqui a sua altura'></input>
            </div>
          </label>
          <button type="submit">Calcular</button>
        </div>       
      </div>
      
    </>
  )
}

export default App