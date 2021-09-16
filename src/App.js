
import { useState } from 'react';
import './App.css';
import Add from './components/Add';
import MovieList from './components/MovieList';
import Search from './components/Search';
import { moviesData } from './Data';

function App() {
  const [movies, setMovies] = useState(moviesData)
  const [searchvalue, setSearchvalue] = useState('')
  const [rate, setRate] = useState(1)
  const hendeladd = (newmovie) => {
    setMovies([...movies,newmovie]);
    
  }
 const handelsearchvalue =(e)=>{
   setSearchvalue(e.target.value);
 }
  const handelrate = (rate) => {
    setRate(rate);
  }
  
  
  return (
    <div className="App">
      <Search handelrate={handelrate} rate={rate} handelsearchvalue={handelsearchvalue} searchvalue={searchvalue} 
      />
    <MovieList films={movies.filter((el)=>(el.name.toLowerCase().includes(searchvalue.toLowerCase().trim()) && el.rating>=rate ))}  />
    <Add   hendeladd={hendeladd} />
    </div>
  );
}

export default App;
