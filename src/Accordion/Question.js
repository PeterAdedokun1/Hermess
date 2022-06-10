import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info, peter, first,second,thrid }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (  
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <div>
        {/* <h6>{title}</h6> */}
        <h6>{info}</h6>
        <h6>{peter}</h6>
        <h6>{first}</h6>
        <h6>{second}</h6>
        <h6>{thrid }</h6>
       
      </div>  }
    </article>
  );
};

export default Question;
