import React  from 'react';

import RaisedButton from 'material-ui/RaisedButton';

const staticStyle = {
  padding: "10px",
  fontWeight : "bold",
  margin : "10px",
  width : "160px",
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
          <RaisedButton style={{...staticStyle,...style[items.complete ? "complete" : "incomplete"]}} onClick={()=>props.onComplete(index)}>{items.complete ? "Complete" : "Incomplete"}</RaisedButton>
        </li>)}
    </ol>
  );
}



export default List;
