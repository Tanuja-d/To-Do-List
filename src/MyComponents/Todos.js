import React from 'react'; // Import React to use its features like useRef
import { TodoItem } from './TodoItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Filter = ({ filter, setFilter }) => (
  <div className="filter-buttons btn-group">
    <button className={`btn filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
    <button className={`btn filter-btn ${filter === 'active' ? 'active' : ''}`} onClick={() => setFilter('active')}>Active</button>
    <button className={`btn filter-btn ${filter === 'completed' ? 'active' : ''}`} onClick={() => setFilter('completed')}>Completed</button>
  </div>
);

export const Todos = ({ todos, onDelete, onToggleComplete, filter, setFilter }) => {
  // 1. Create a ref for the "no todos" message. useRef is better here since it's a single, stable element.
  const noTodosRef = React.useRef(null);

  return (
    <div className="container todos-list-container" style={{ minHeight: "40vh" }}>
      <Filter filter={filter} setFilter={setFilter} />
      <h3>Todos List</h3>
      <TransitionGroup>
        {todos.length === 0 ? (
          // 2. Apply the same nodeRef pattern to the empty state message
          <CSSTransition 
            key="no-todos" 
            nodeRef={noTodosRef} // Pass the ref
            timeout={300} 
            classNames="todo"
          >
            <div ref={noTodosRef} className="no-todos"> {/* Attach the ref */}
              No To-Dos to display for this filter.
            </div>
          </CSSTransition>
        ) : (
          todos.map((todo) => {
            // createRef is fine inside a loop as it generates a new ref for each item
            const nodeRef = React.createRef(null); 
            return (
              <CSSTransition 
                key={todo.srno} 
                nodeRef={nodeRef} 
                timeout={300} 
                classNames="todo"
              >
                <div ref={nodeRef} className="mb-3"> 
                  <TodoItem 
                    todo={todo} 
                    onDelete={onDelete} 
                    onToggleComplete={onToggleComplete}
                  />
                </div>
              </CSSTransition>
            );
          })
        )}
      </TransitionGroup>
    </div>
  );
};