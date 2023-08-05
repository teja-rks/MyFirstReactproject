//import logo from './logo.svg';
import './App.css';
import { Footer } from './Mycomponents/Footer';
import Header from './Mycomponents/Header';
import { Todos } from './Mycomponents/Todos';
import { AddTodo } from './Mycomponents/AddTodo';
//import { About } from "./Mycomponents/About";
import React, { useState, useEffect } from 'react';

function App() {
  let initdo;
  if (localStorage.getItem("todos") === null) {
    initdo = []
  }
  else {
    initdo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("i am on delete", todo);
    // let index=todo.indexof(todo);
    //todo.splice(index,1);

    setTodo(todos.filter((e) => {
      return e !== todo;
    }))

    localStorage.setItem("todos", JSON.stringify(todos));
  }


  const addTodo = (title, desc) => {
    console.log("im adding this to do", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {

      sno = todos[todos.length - 1].sno + 1;
    }

    const mytodos = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodo([...todos, mytodos]);
    console.log(mytodos);





  }



  const [todos, setTodo] = useState(initdo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));


  }, [todos])
  return (
    <>
      <Header title="ToDO LIST" searchbar={false} />
      
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />

    </>
  );
}

export default App;
