import React from "react";
import { Link } from "react-router-dom"

class LoginPage extends React.Component {

    // constructor(){
    //     super()
    // }

    render() {
        
        return (
            <div className="h-screen w-2/3 m-auto flex flex-col justify-center items-center">
                <div className="space-y-6 
                    lg:w-2/5 w-4/5 
                    rounded-md
                    border-2
                    border-gray-200
                    shadow-sm
                    p-12
                    ">
                    <h1>Login Page</h1>
                    <label className="block">
                        <span className="text-gray-700">Email</span>
                        <input
                        type="email"
                        className="
                            mt-1
                            block
                            w-full
                            rounded-md
                            border-gray-300
                            shadow-sm
                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                        "
                        placeholder="jonathan@gmail.com"
                        />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Password</span>
                        <input
                        type="password"
                        className="
                            mt-1
                            block
                            w-full
                            rounded-md
                            border-gray-300
                            shadow-sm
                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                        "
                        placeholder=""
                        />
                    </label>
                    <div>
                        <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            className="
                            rounded
                            border-gray-300
                            text-indigo-600
                            shadow-sm
                            focus:border-indigo-300
                            focus:ring
                            focus:ring-offset-0
                            focus:ring-indigo-200
                            focus:ring-opacity-50
                            "
                        />
                        <span className="ml-2">Remember me</span>
                        </label>
                    </div>
                    {/* <button className="
                    rounded-md
                    px-5 py-2.5
                    text-white
                    bg-blue-700 hover:bg-blue-800
                    ">Login</button> */}
                    <div>
                        <Link to="/dashboard" className="
                        rounded-md
                        px-5 py-3
                        text-white
                        bg-blue-700 hover:bg-blue-800
                        ">Login</Link>

                    </div>

                </div>
            </div>
        )
    }
}

export default LoginPage