import { useEffect } from 'react';

import './App.css';
import SearchIcon from './search.svg'

// bdceff9f - Api Key

const API_URL = 'http://www.omdbapi.com?apikey=bdceff9f';

const movie1 = {
  'Title': 'Amazing Spider Man',
  'Year': '2012',
  'imdbID': 'tt2586634',
  'Type': 'movie',
  'Poster': 'N/A'
}


const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}$s=${title}`);
    const data = await response.json();

    console.log(data.Search)
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
        <div className='container'>

        </div>
      </div>
    );
}

export default App;