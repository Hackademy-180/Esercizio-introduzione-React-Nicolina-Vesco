import Navbar from "./components/Navbar.jsx"
import Header from "./components/Header.jsx"
import List from "./components/List.jsx"

function App() {
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
    </>
  )

}

export default App
