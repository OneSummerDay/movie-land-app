import { useEffect, useState } from 'react';

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg'

// bdceff9f - Api Key

const API_URL = "http://www.omdbapi.com?apikey=bdceff9f";

const movie1 = {
  'Title': 'Amazing Spider Man',
  'Year': '2012',
  'imdbID': 'tt2586634',
  'Type': 'movie',
  'Poster': 'N/A'
}


const App = () => {
  const [movies, setMovies] = useState([]);



  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}$s=${title}`);
    const data = await response.json();

    setMovies(data.Search)
  }

  useEffect = (() => {
    searchMovies('Spiderman');
  }, [])

    return (
      <div className='app'>
        <h1>MovieLand</h1>

        <div className='search'>
          <input 
            placeholder='Search for movies'
            value='Superman'
            onChange={() => {}}
          />
          <img 
            src={SearchIcon}
            alt='search'
            onClick={() => {}}
          />
        </div>

        {
          movies?.length > 0
          ?  (
            <div className='container'>
               {movies.map((movie) => 
                 <MovieCard movie={movie}/>
               )}
             </div>
             )
          : (
            <div className='empty'>
              <h2>No movies founded</h2>
            </div>
          )
        }

      </div>
    );
}

export default App;