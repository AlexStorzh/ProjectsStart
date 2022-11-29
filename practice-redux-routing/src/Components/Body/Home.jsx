import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getApiResource } from '../../api/api';
const DND_ROOT = 'https://www.dnd5eapi.co/api/';
const DND_CLASSES = 'classes/';
const Home = () => {
 getApiResource(DND_ROOT + DND_CLASSES);
 return (
  <div>
   1111
  </div>
 );
};

export default Home;