const DND_ROOT = 'https://www.dnd5eapi.co/api/';
const DND_CLASSES = 'classes/';

export const getApiResource = (url) => {
 fetch(url)
  .then(res => res.json())
  .then(body => console.log(body))
  };
