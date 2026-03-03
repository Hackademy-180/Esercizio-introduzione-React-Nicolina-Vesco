// import Navbar from "./components/Navbar.jsx"
// import Header from "./components/Header.jsx"
// import List from "./components/List.jsx"
// import { useEffect, useState } from 'react'
// import Form from "./components/Form.jsx"
// import Main from "./components/Main.jsx"
// import ListLi from "./components/ListLi.jsx"
import { BrowserRouter, Routes, Route } from "react-router"
import Homepage from "./views/Homepage.jsx"
import Posts from "./views/Posts.jsx"
import Layout from "./components/Layout.jsx"
import DetailView from "./views/DetailView.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/info" element={<Posts />} />
            <Route path="/info/:id" element={<DetailView />} />
          </Route>



        </Routes>
      </BrowserRouter>
    </>
  )

}





// function App() {
// Esercizio gestione side-effect
//  const [users, setUsers] = useState();
//   const [trigger, setTrigger] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const getData = async ()=>{
//     const promise = await fetch('https://jsonplaceholder.typicode.com/users');
//     const json = await promise.json();
//     setUsers(json);
//     console.log(json);
//   }

//   useEffect(()=>{

//     if(trigger){
//       setTimeout(()=>{
//         getData();
//         setIsLoading(false)
//       }, 2000)
//     }

//   }, [trigger] );

//   const handleClick = ()=>{
//     if (isVisible){
//       setIsVisible(false);
//       setTrigger(false);
//       setUsers(null);
//     }else{
//       setIsVisible(true);
//       setTrigger(true);
//       setIsLoading(true);
//     }
//   }


//   // Compound components da finire ancora
//   const [nameList, setNameList] = useState(["Scarpe", "Felpe"]);
//   const [newName, setNewName] = useState();

//   const handleChange = (e)=>{
//     setNewName(e.target.value);
//   }


//   const addNewName = (name) => {
//     setNameList((prev) => [...prev, name]);
//   }
//Esercizio State management
// const [counter, setCounter] = useState(0);

// const increment =()=>{
//   setCounter((prev)=> prev + 1)
// }
// const decrement =()=>{
//   setCounter((prev)=> prev-1)
// }


// Esercizio componenti
// const product = ['Scarpe', 'Felpe', 'Pantaloni'];

// return (
<>

  {/* <Navbar />
      <Header />
      <List product={product} /> */}

  {/* Esercizio introduzione a react */}
  {/* <h1 className="title">Introduzione React</h1>
      <input type="text" className='input-text' placeholder='Scrivi il tuo testo qui'/> */}
  {/* <label htmlFor="text" className='label-text' /> */}

  {/* Esercizio state management */}
  {/* <h2>State management</h2>
      <p>Contattore: {counter}</p>
      <button id = 'increment' onClick={increment}>+</button>
      <button id = 'decrement' onClick={decrement}>-</button> */}


  {/* <Form /> */}
  {/* 
      <Navbar />
      <Header /> */}
  {/* Async */}
  {/* <h1>Async Lesson</h1>
      <button onClick={handleClick}>Click here!</button>
      {isLoading && <p>Loading data...</p>}
      <ul>
        {isVisible && users && users.map((user)=>{
          return <li>{user.name} - {user.email}</li>
        })}
      </ul> */}


  {/* Compound components*/}
  {/* <Main>
        <Form handleChange={handleChange} addNewName={addNewName} newName={newName}></Form>
        <List>
          {nameList.map((name, item) => (
            <List.Li key={item}>{name}
            </List.Li>
          ))}
        </List>

      </Main> */}

</>
// )

// }

export default App
