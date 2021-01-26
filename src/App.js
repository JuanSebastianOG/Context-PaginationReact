import './App.css';

import { useEffect, useState } from 'react'
import Movie from './Movie';
import MyProvider from './CounterConext';

import Navbar from './Navbar'
import ConttentCounter from './ConttentCounter';
function App() {

  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=fcd48ca74e06f52d29422c2007f44c82&language=en-US&page=${page}`)
      .then(response => response.json())
      .then(data => setMovies([...movies, ...data.results]));
  }, [page])


  const handleNextPage = (event) => {
    setPage(page => page + 1)
  }
  return (
    <MyProvider>
      <div className="app" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>


        <div className="app__counter" >
          <Navbar />
          <ConttentCounter />
        </div>

        <div className="app__movies" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {movies.map((movie) =>
            <Movie imgurl={movie.poster_path} title={movie.title} vote_average={movie.vote_average} />
          )}
        </div>
        <button onClick={handleNextPage}>Next page</button>

      </div>
    </MyProvider>
  );
}

export default App;
