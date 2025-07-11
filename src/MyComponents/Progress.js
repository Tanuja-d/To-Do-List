import React from 'react';

export const Progress = ({ progress }) => {
  return (
    <div className="container progress-container">
        <div className="progress-bar">
            <div 
                className="progress-bar-fill" 
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    </div>
  );
};