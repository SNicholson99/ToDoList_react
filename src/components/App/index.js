import React from 'react';

import List from './../List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: [],
    }

  }


  onChange=(event)=>{
    this.setState(
      {term: event.target.value}
    );
  }

  onSubmit=(event)=>{
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items,{
        toDo: this.state.term,
        complete: false
      }]
    })
  }

  onComplete=(index)=>{
    this.setState(prevState => ({
      items: [...prevState.items.slice(0,index),
        {
          toDo: prevState.items[index].toDo,
          complete: !prevState.items[index].complete
        },
        ...prevState.items.slice(index+1)
      ]

    }))
  }

  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button type="submit">Submit</button>
        </form>
        <List items={this.state.items} onComplete={this.onComplete} />
      </div>
    )
  }
}

export default App;
