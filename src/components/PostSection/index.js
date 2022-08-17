import React from "react";
import Todo from "../Todo";

function PostSection({ todos }) {

    return (
        <div className="
        grid grid-cols-6
        w-auto h-max
        border-2 border-gray-200">
            {
                todos.map((post, i) => {
                    return (
                        <Todo
                            key={todos[i].id}
                            userID={todos[i].userId}
                            todoID={todos[i].id}
                            title={todos[i].title}
                            completed={todos[i].completed}
                        />
                    )
                })
            }
        </div>
    )
}

export default PostSection