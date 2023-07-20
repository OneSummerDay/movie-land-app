import { useEffect } from 'react';

// bdceff9f - Api Key

const API_URL = 'http://www.omdbapi.com?apikey=bdceff9f';


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
      <h1>Hello React</h1>
    );
}

export default App;