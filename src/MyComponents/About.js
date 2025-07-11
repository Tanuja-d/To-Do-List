import React from 'react';

export const About = () => {
  return (
    <div className="container about-container glass-card">
      <h2>About This App</h2>
      <hr />
      <p>
        This is an interactive To-Do List application built using <strong>React</strong>. 
        It helps users stay organized by allowing them to add, delete, and manage daily tasks efficiently.
      </p>
      <p>
        The application features a clean and responsive UI design, enhanced with smooth animations and 
        modern CSS styling to provide an engaging user experience.
      </p>
      <p>
        Features include:
        <ul>
          <li>Adding new tasks</li>
          <li>Deleting completed tasks</li>
          <li>Maintaining a dynamic list of todos</li>
          <li>Routing using <strong>React Router</strong></li>
        </ul>
      </p>
      <p>
        This project was created as part of a learning journey into React development and serves as a practical example of using components, props, hooks, and routing.
      </p>
    </div>
  );
};
