import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Ttile or Desc can not be blank");
        }
        props.addTodo(title,desc);
    }
    return (
        <div className="container" my-3>
            <h3>Add To-Do</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlfor="title" className="form-label">To-Do Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} class="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlfor="desc" className="form-label">To-Do Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}class="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add To-Do</button>
            </form>
        </div>
    )
}
