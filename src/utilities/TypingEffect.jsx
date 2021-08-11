import React,{useEffect,useState} from react;

const TypingEffect = (props) => {

    const [typing, setTyping] = useState('');
    const [index, setIndex] = useState(0);
  
    useEffect(()=>{
      if (index < props.text.length) {
        setTimeout(() => {
          setTyping(typing + props.text[index]);
          setIndex(index + 1);
          }, props.speed
        );
      }
    },[index]) 
  
    return (
      <span>{typing}</span>
    )
}

export default TypingEffect;
