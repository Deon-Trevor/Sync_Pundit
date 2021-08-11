import React, { useState } from 'react';

const TypingEffect = ({text, speed}) => {

    const [typing, setTyping] = useState('');
    const [index, setIndex] = useState(0);
  
    useEffect(()=>{
      if (index < text.length) {
        setTimeout(() => {
          setTyping(typing + text[index]);
          setIndex(index + 1);
          }, speed
        );
      }
    },[index]) 
  
    return (
      <span>{ typing }</span>
    )
}

export default TypingEffect;