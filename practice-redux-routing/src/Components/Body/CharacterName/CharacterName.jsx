import React from 'react';

const CharacterName = ({page, setPage, formData, setFormData}) => {
 return (
  <div>
   <input
    type="text"
    placeholder='Your Character Name'
    value={formData.username}
    onChange={(e) =>
    setFormData({...formData, username: e.target.value})}
   />
    <br />
      <button onClick={() => {
     setPage(page + 1)
    }}> 
        Submit
      </button>
      <br />
      <button onClick={() => {
     setPage(page - 1)
    }}>
        Previous
      </button>
  </div>
 );
};

export default CharacterName;