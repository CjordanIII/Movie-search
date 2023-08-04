
import {useState,useEffect} from "react"
// importing componets
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';


import './App.css';

function App() {
  // =====apikey=====
  const apiKey = process.env.REACT_APP_MOVIE0API_KEY
  
  // State to hold movie data
  const [movie,setMovie]=useState(null)
  

  //Functions to getMovie (fetch)
  const getMovie = async (searchTerm)=>{
    // make fetch request and store response
    const response = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&t=${searchTerm}`

    )
    const data = await response.json()
    setMovie(data)
  }
  useEffect(()=>{
    getMovie("Clueless")
  },[])

  return (
    <div className="App">
      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie}/>

    </div>
  );
}

export default App;
