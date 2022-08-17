import React from "react";

import NavigationBar from "../../components/Navigation"
import AsideCol from "../../components/Aside"
import PostSection from "../../components/PostSection";
import SummarySection from "../../components/Summary";


class DashboardPage extends React.Component {

    constructor() {
        super()
        this.state = {
            page: 'all',
            todoList: [],
            countTotalComplete: [],
            countTotalPostPerID: [],

        }
    }

    componentDidMount() {

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(posts => {
                console.log(posts)
                this.setState({ todoList: posts })
                this.summaryData()
            })
    }

    summaryData() {

        const todoList = this.state.todoList

        console.log("dari summary data")
        console.log(todoList)

        const countTotalComplete = todoList.reduce(function (
            count, todo
        ) {
            return (
                count[todo.completed] ? 
                    ++count[todo.completed] : 
                    (count[todo.completed] = 1),
                count
            );
        },
        {});
        console.log(countTotalComplete)

        const countTotalPostPerID = todoList.reduce(function (
            count, todo
        ) {
            return (
                count[todo.userId] ? 
                    ++count[todo.userId] : 
                    (count[todo.userId] = 1),
                count
            );
        },
        {});
        console.log(countTotalPostPerID)

        this.setState({
            countTotalComplete: countTotalComplete,
            countTotalPostPerID: countTotalPostPerID
        })
    
    }

    handleCallBack = (childData) => {
        this.setState({
            page: childData
        })
    }

    handleDashboardPage = () => {

        const { todoList, countTotalComplete, countTotalPostPerID } = this.state

        let page = this.state.page
        if(page === 'all') return (
            <div className="
                    sm:ml-48 mt-20 px-4 sm:pl-10 sm:py-10
                    w-screen sm:w-max h-max
                    ">
                        <h1 className="text-3xl text-center my-10">todo list summary</h1>
                        <div id="post-summary">
                            <SummarySection arrayData={countTotalComplete} type="complete" />
                            <SummarySection arrayData={countTotalPostPerID} type="postPerID" />

                        </div>

                        <h1 className="text-3xl text-center my-10">todo list table</h1>
                        <div id="post-section" className="table-auto border-spacing-4">
                            {/* <PostSection todos={todoList}/> */}
                            
                            <tbody>
                                <tr>
                                    <th>userID</th>
                                    <th>postID</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                </tr>
                                {todoList.map((item, i) => (
                                    <tr key={i}>
                                        <td>{item.userId}</td>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.completed? "complete" : "incomplete"}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </div>
                    
                </div>
        )
        if(page === 'summary') return (
            <div className="
                    sm:ml-48 mt-20 px-4 sm:pl-10 sm:py-10
                    w-screen sm:w-max h-max
                    ">
                        <h1 className="text-3xl text-center my-10">todo list summary</h1>
                        <div id="post-summary">
                            <SummarySection arrayData={countTotalComplete} type="complete" />
                            <SummarySection arrayData={countTotalPostPerID} type="postPerID" />

                        </div>
                </div>
        )
        if(page === 'tablefield') return (
            <div className="
                    sm:ml-48 mt-20 px-4 sm:pl-10 sm:py-10
                    w-screen sm:w-max h-max
                    ">

                        <h1 className="text-3xl text-center my-10">todo list table</h1>
                        <div id="post-section" className="table-auto border-spacing-4">
                            {/* <PostSection todos={todoList}/> */}
                            
                            <tbody>
                                <tr>
                                    <th>userID</th>
                                    <th>postID</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                </tr>
                                {todoList.map((item, i) => (
                                    <tr key={i}>
                                        <td>{item.userId}</td>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.completed? "complete" : "incomplete"}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </div>
                    
                </div>
        )
        if(page === 'stickynote') return (
            <div className="
                    sm:ml-48 mt-20 px-4 sm:pl-10 sm:py-10
                    w-screen sm:w-max h-max
                    ">
                        <PostSection todos={todoList}/>
                    
                </div>
        )
    }

    render() {

        return (
            <div>
                <NavigationBar />
                <AsideCol parentCallBack = { this.handleCallBack }/>
                { this.handleDashboardPage() }
            </div>
        )
    }
}

export default DashboardPage