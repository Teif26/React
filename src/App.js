import React, { Component } from 'react';
import { BrowserRouter as Router,Route }  from 'react-router-dom'
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo'
import Footer from './components/layout/footer'
import About from './components/pages/About'
// import uuid from 'uuid'
import axios from 'axios'

import './App.css';


class App extends Component {
  constructor(props){
    super(props)
  
  this.state = {
     todos: []   
  }
}
componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10?_completed=true')
  .then(res=> this.setState({todos: res.data}))
}

// toggles completed
markComplete = (id)=> {
 this.setState({todos:this.state.todos.map(todo=>{
   if(todo.id === id){
     todo.completed = !todo.completed
   }
   return todo
 })})
 }

 // delet todo
delTodo = (id)=> {
 axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=> this.setState({todos: [...this.state.todos.filter(item=> item.id !== id)]}))
  
}
//addtodo
addTodo = (title)=>{
 axios.post('https://jsonplaceholder.typicode.com/todos',{
    title: title,
    completed: false  
 })
 .then(res=>  this.setState({todos:[...this.state.todos, res.data]})
 
 
 
  // const newTodo = {
  //   id: uuid.v4(),
  //   title: title,
  //   completed: false
  // }
 )

}


  render() {
    return (
      <Router>
      <div className="App">
       <div className="container">
        <Header />
        <Route exact path="/" render={props =>(
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} delTodo={this.delTodo} markComplete={this.markComplete}/>
            </React.Fragment>
        )}/>
         <Route  path="/about" component={About} />
           
      </div>
      { <Footer/> }
    </div>
   </Router>
   );
  }
}

export default App;
