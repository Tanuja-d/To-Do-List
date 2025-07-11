import './App.css';
import Header from './MyComponents/Header.js';
import { Footer } from './MyComponents/Footer.js';
import { Todos } from './MyComponents/Todos.js';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About.js';
import { Progress } from './MyComponents/Progress'; // New component
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const stored = localStorage.getItem('todos');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, desc) => {
    const srno = todos.length > 0 ? todos[todos.length - 1].srno + 1 : 1;
    setTodos([...todos, { srno, title, desc, completed: false }]);
  };

  const onDelete = (todoToDelete) => {
    setTodos(todos.filter((t) => t.srno !== todoToDelete.srno));
  };
  
  const toggleComplete = (todoToToggle) => {
    setTodos(todos.map(todo => 
      todo.srno === todoToToggle.srno ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true; // 'all'
  });

  const completedCount = todos.filter(t => t.completed).length;
  const totalCount = todos.length;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <BrowserRouter>
      <Header title="Check List" />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Progress progress={progress}/>
                <Todos
                  todos={filteredTodos}
                  onDelete={onDelete}
                  onToggleComplete={toggleComplete}
                  filter={filter}
                  setFilter={setFilter}
                />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;