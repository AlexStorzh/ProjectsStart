import React from 'react';
import style from'.//Movie.module.css'

const Movie = ({title, medium_cover_image, year}) => {
 return (
  <div>
   <div className={style.movie} >
   <img src={medium_cover_image} alt={title} className={style.img} />
    <div className={style.h3}>{title}<br/>{year }</div>
   </div>
  </div>
  
 );
};

export default Movie;