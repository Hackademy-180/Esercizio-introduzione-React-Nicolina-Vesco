import Navbar from "./components/Navbar.jsx"
import Header from "./components/Header.jsx"
import List from "./components/List.jsx"
import { useState } from 'react'
import Form from "./components/Form.jsx"

function App() {
    //Esercizio State management
    const [counter, setCounter] = useState(0);

    const increment =()=>{
      setCounter((prev)=> prev + 1)
    }
    const decrement =()=>{
      setCounter((prev)=> prev-1)
    }


    // Esercizio componenti
  const product = ['Scarpe', 'Felpe', 'Pantaloni'];
  
  return (
    <>

      <Navbar />
      <Header />
      <List product={product} />

      {/* Esercizio introduzione a react */}
      <h1 className="title">Introduzione React</h1>
      <input type="text" className='input-text' placeholder='Scrivi il tuo testo qui'/>
      <label htmlFor="text" className='label-text' />

      {/* Esercizio state management */}
      <h2>State management</h2>
      <p>Contattore: {counter}</p>
      <button id = 'increment' onClick={increment}>+</button>
      <button id = 'decrement' onClick={decrement}>-</button>

      
      <Form />

    </>
  )

}

export default App
