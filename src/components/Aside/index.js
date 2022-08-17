import React from "react";
import { Link } from "react-router-dom"

class AsideCol extends React.Component{

    onClick = (name) => {
        this.props.parentCallBack(name);
        // event.preventDefault()
    }

    render() {
        
        return (
            <aside className="h-full hidden w-40 
            sm:flex flex-col justify-center items-center py-10 px-4 
            fixed top-0 left-0
            bg-white border-2 border-gray-200">
                <div className="w-full flex flex-col space-y-4">
                    {/* <h1>aside column</h1> */}
                    <button onClick={() => this.onClick("all")}>
                        show all
                    </button>
                    <button to="/dashboard" onClick={() => this.onClick("summary")}>
                        show summary
                    </button>
                    <button to="/dashboard" onClick={() => this.onClick("tablefield")}>
                        show table
                    </button>
                    <button to="/dashboard" onClick={() => this.onClick("stickynote")}>
                        show sticky note
                    </button>
                </div>
            </aside>
        )
    }
    
}

export default AsideCol