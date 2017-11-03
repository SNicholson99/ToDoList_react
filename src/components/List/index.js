import React  from 'react';

const List =(props) => (
  <ol>
    {props.items.map((items, index)=>
      <li key={index}>{items.toDo}
        <button onClick={()=>props.onComplete(index)}>{items.complete ? "Complete" : "Incomplete"}</button>
      </li>)}
  </ol>
);




export default List;
