import React from 'react';
import { useEffect, useState } from 'react';
import { getApiResource } from '../../api/api';
import { DND_ROOT_CLASSES } from '../../constants/constantsApi';

const Home = () => {
 const [classes, setClasses] = useState (null)
 const getResource = async (url) => {
  const res = await getApiResource(url)

  const classList = res.results.map(({ name, url }) => {
   return {
    name,
    url
   }
  })
  setClasses(classList)
 }

 useEffect(() => { 
  getResource(DND_ROOT_CLASSES)
 }, []);

 return (
  <>
   {classes && (
    <ul>
     {classes.map(({ name, url }) =>
      <li>{name}</li>)}
    </ul>
  )}
  </>
 );
};

export default Home;