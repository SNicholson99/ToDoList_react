import React from 'react';
import List from './../List';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// import DatePicker from 'material-ui/DatePicker';

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

  onSubmit = (event) => {
    event.preventDefault();
    fetch('/api/todos', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        todo: this.state.term,
        complete: false
      })
    }).then(res => res.json()).then(value => {
      console.log(value)
      this.setState({
        term: '',
        items: [...this.state.items, value.payload]
      });
    }).catch(err => console.log(err));
  }

  // onDelete = (event, index) =>{
  //   // event.preventDefault();
  //   fetch('/api/todos', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     method: 'DELETE',
  //     body: JSON.stringify({
  //       _id: this.state.items[index]._id
  //   })
  // })
  // this.setState(prevState =>({
  //   items: [
  //     ...prevState.items.slice(0, index), ...prevState.items.slice(index+1)
  //   ]
  // }))
  //   this.refreshTodo();
  // }

  componentDidMount(){
    this.refreshTodo()
  };

  refreshTodo(){
    fetch('/api/todos')
    .then(result => result.json())
    .then(value => this.setState({
      items: [...value.payload]
    }))
    .catch(err => console.log(err));
  }

  onComplete = index =>{
    fetch('/api/todos', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        _id: this.state.items[index]._id,
        complete: !this.state.items[index].complete
      })
    })
    .then(res => res.json())
    .then(data => this.setState(prevState =>({
      items: [
        ...prevState.items.slice(0, index), data.payload, ...prevState.items.slice(index+1)
      ]
    })))

  }

  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <TextField floatingLabelText="Insert List Item" value={this.state.term} onChange={this.onChange}/>
          <RaisedButton type="submit">Add To List</RaisedButton>
        </form>
        {/* <DatePicker hintText="Choose a date" mode="landscape" /> */}
        <List items={this.state.items} onComplete={this.onComplete} onDelete={this.onDelete} />
      </div>
    )
  }
}

export default App;
