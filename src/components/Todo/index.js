import React from "react";

function Todo({ userID, todoID,  title, completed }) {

    return (
        <div className={`
        m-4 p-4 w-44
        border-2 border-gray-200 
        ${completed ? "bg-lime-300" : "bg-amber-300"}`} >
            <h2>title: {title}</h2>
            <p>userID: {userID}</p>
            <p>todoID: {todoID}</p>
            <p>status: {completed? "complete" : "incomplete"}</p>
        </div>
    )
}

export default Todo