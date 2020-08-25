import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');


  //hook
  useEffect(() => {
   
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (event) => {
    //this will fire of when we click the buttton
    event.preventDefault();

db.collection('todos').add({
  todo: input,
  timestamp: firebase.firestore.FieldValue.serverTimestamp()
})

    setTodos([...todos, input]);
    setInput('');
  }


  return (
    <div className="App">
     <h1>Todo List</h1>
     <form action="">
       <FormControl>
            <InputLabel>Write todo</InputLabel>
            <Input value={input} onChange={event => setInput(event.target.value)}/>
       </FormControl>
     
  <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addTodo}>add</Button>
     </form>


     <ul>
       {todos.map(todo => (
         <Todo todo={todo}/>
       ))}
     </ul>
    </div>
  );
}

export default App;
