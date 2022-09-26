import React from 'react';
import style from './/Movie.module.css'

const Movie = ({ title, medium_cover_image, year, description_full}) => {
 return (
  <div className={style.container }>
   <div className={style.movie} >
    <img src={medium_cover_image} alt={title} className={style.img} />
    <div className={style.h3}>
     {title}
     <br />
     {year}
    </div>
    <div className={style.description}>
     <h2>Overview:</h2>
     <p>{description_full}</p>
    </div>
   </div>
  </div>

 );
};

export default Movie;