import React from 'react';

const Buttons = () =>{
    const btns = [1,2,3,4,5];
      return <div>
        {
          btns.map(
            (item)=>(
              <button 
                key={item}
              >
                {item}
              </button>
          ))
        }
        <List data={data}/>
      </div>
}


export default buttons;