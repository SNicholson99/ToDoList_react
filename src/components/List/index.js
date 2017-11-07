import React  from 'react';

const staticStyle = {
  padding: "10px",
  fontStyle : "italic",
  fontWeight : "bold",
  margin : "10px",
  borderRadius : "10px",
}

const List =(props) => {
  const style = {
    complete : {
      backgroundColor : "rgb(0, 255, 163)",
      borderColor: "rgb(0, 255, 163)"
    },
    incomplete : {
      backgroundColor : "rgb(255, 0, 0)",
      borderColor: "rgb(255, 0, 0)",
      color: "white",
    }
  };
  return (
    <ol>
      {props.items.map((items, index)=>
        <li key={index}>{items.toDo}
          <button style={{...staticStyle,...style[items.complete ? "complete" : "incomplete"]}} onClick={()=>props.onComplete(index)}>{items.complete ? "Complete" : "Incomplete"}</button>
        </li>)}
    </ol>
  );
}



export default List;
