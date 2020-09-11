import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Character from './components/Character'
import './App.css';

const App = () => {

  const [character, setCharacter] = useState([])
  const [film , setFilmInfo] = useState([])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect( () => {

    axios
      .get('http://swapi.dev/api/people/')
      .then(response => {

        setCharacter(response.data.results)
        setFilmInfo(response.data.results.films)
      })
      .catch(error => {
        console.log('HEY JOON, YOU FAILED TO FETCH DATA')
      })


  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        character.map( (eachChar) => {
          return <Character key={eachChar.created} info={eachChar} filmList={film}/>
        })
      }
    </div>
  );
}

export default App;
