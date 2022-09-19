import React from 'react';
import style from './/Header.module.css'

const Header = () => {
 const [text, setText] = React.useState('');
 console.log(text);
 return (
  <div className={style.main}>
   <img src="" alt="" />
   <input
    className={style.input}
    type="text"
    placeholder="Search for film..."
    value={text}
    onChange={(e) => setText(e.target.value)} />
  </div>
 );
};

export default Header;