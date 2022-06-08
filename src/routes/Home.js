import React, { useEffect, useState } from 'react';
import Movies from '../components/Movies';

function Home()  {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
    
  const getmovies = async () => {
    const json = await(
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
        )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }

  useEffect(() => {
    getmovies();
  },[]);
  
  
  console.log(movies);
  
  return (
    <div className="App">
      {
        loading ? <h1>Loading,,,</h1> 
        : movies.map((mvi) =>(
            <Movies 
              id ={mvi.id}
              key = {mvi.id}
              title = {mvi.title}
              genres = {mvi.genres}
              coverImg = {mvi.medium_cover_image}
              summary = {mvi.summary}
            />
          )
        )
        
      }

    </div>
  );
}

export default Home;
