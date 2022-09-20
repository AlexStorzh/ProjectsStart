import React from 'react';
import { useState, useEffect } from "react";
import style from './TopFilms.module.css'
import Movie from './Movie/Movie';


const TopFilms = () => {
 const [movies, setMovies] = useState([]);

 useEffect(() => {
  const url = `https://yts.mx/api/v2/list_movies.json`;

  fetch(url)
   .then((response) => response.json())
   .then((data) => {
    setMovies(data.data.movies)
   });
 }, []);

 return (
  <div className={style.main}>
   {movies.slice(6, 10).map((movie) => {
    return (
     <Movie key={movie.id} {...movie} />
    )
   })}
  </div>
 );
};

export default TopFilms;
