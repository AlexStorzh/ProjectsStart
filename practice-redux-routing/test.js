<div className={style.finalCharacter_title}>Your Character Modifires</div>
        <div className={style.finalCharacter_modifires}>
       {finalCharacterAttributes.map((e) => {
         return (
          <>
           <div>
            <li key={e.index}>{e.name}</li>
            <p>{e.value}</p>
           </div>
          </>
         )
        })}
     </div>