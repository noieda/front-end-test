import React from "react";
import { Link } from "react-router-dom"

function NavigationBar() {

    let profileImage = require("./logo192.png")

    return (
        <nav className="
        fixed w-full z-10
        top-0 left-0
        px-8 py-4
        bg-white border-2 border-gray-200
        flex flex-row-reverse space-x-8 space-x-reverse
        ">
            <div className="w-8 h-8 ">
                <img src={ profileImage } className="w-full"/>
            </div>
            <Link to="/" className="font-semibold">Logout</Link>

        </nav>
    )
}

export default NavigationBar