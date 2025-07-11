import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
            return;
        }
        addTodo(title, desc);
        setTitle("");
        setDesc("");
    }

    return (
        <div className="container add-todo-container glass-card">
            <h3>Add a New To-Do</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">To-Do Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">To-Do Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-success w-100">Add To-Do</button>
            </form>
        </div>
    )
}