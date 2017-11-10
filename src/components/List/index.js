import React from 'react';

const staticStyle = {
  margin: '10px 50px',
}

const List =(props) => {
const style = {
  complete:{
    backgroundColor: 'green',
    color: 'white',
  },
  incomplete:{
    backgroundColor: 'red',
    color: 'white'
  }
};

const done = {
  complete:{
    textDecoration: 'line-through'
  },
  incomplete:{
textDecoration: 'none'
  }
};

 return(
      <ol>
        {props.items.map((item, index) => (
            <li key={index}
              style={done[item.complete ? 'complete' : 'incomplete']}
            >
              {item.todo}
              <button
                style={{...staticStyle, ...style[item.complete ? 'complete' : 'incomplete'], ...props.styles}}
                onClick={() => props.onComplete(index)}>{item.complete?'done':'todo'}
              </button>
              {/* <button onClick={() => props.onDelete(index)}>
                Delete
              </button> */}
            </li>
          )
        )}
      </ol>
)};




export default List;
