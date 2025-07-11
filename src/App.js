import './App.css';
import Header from './MyComponents/Header.js';
import { Footer } from './MyComponents/Footer.js';
import { Todos } from './MyComponents/Todos.js';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About.js';
import { useState, useEffect } from 'react';

import {
  BrowserRouter,   // router provider
  Routes,          // v6 replacement for <Switch>
  Route
} from 'react-router-dom';

function App() {
  // ---------- localStorage initial load ----------
  let initTodo = [];
  const stored = localStorage.getItem('todos');
  if (stored) {
    try {
      initTodo = JSON.parse(stored);
    } catch {
      /* ignore bad JSON */ 
    }
  }

  // ---------- state ----------
  const [todos, setTodos] = useState(initTodo);

  // ---------- persist on change ----------
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // ---------- handlers ----------
  const onDelete = (todo) => setTodos(todos.filter((t) => t !== todo));

  const addTodo = (title, desc) => {
    const srno = todos.length === 0 ? 0 : todos[todos.length - 1].srno + 1;
    setTodos([...todos, { srno, title, desc }]);
  };

  // ---------- UI ----------
  return (
    <BrowserRouter>
      <Header title="Check List" />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
