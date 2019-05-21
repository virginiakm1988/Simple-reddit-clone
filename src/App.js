import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.min.css"
import "./loader.css"

//import CreateTodo from "./components/create-todo.component";
//import EditTodo from "./components/edit-todo.component";
//import TodosList from "./components/todos-list.component";
import PostsList from "./components/posts";
import CreatePost from "./components/create-post";
import EditPost from "./components/edit-post";
import PostPage from './components/post-page'
import "./style.sass"
//import logo from "./logo.png";
import redditTitle from"./reddit.svg";


class App extends Component {
  render() {
    return (
      <Router>
        <img src={redditTitle} className = "reddit"  width="120" height="80" alt ="title"></img>

        
        <div className = "nav">
          <div className = "navigation">
            <ul>
              <li>
                <div className = "sub-color"></div>
                <span>Sub</span>
              </li>
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                    <span>What's new</span>
                </Link>
              </li>
              <li className="navbar-item">
                      <Link to="/create" className="nav-link">Post</Link>
              </li>
            </ul>
     
            <br/>

           
         
        </div>
         
        <div className = "flex">
            
            <Route path="/" exact component={PostsList} />
            <Route path="/edit/:id" component={EditPost} />
            <Route path="/create" component={CreatePost} />
            <Route path="/postPage/:id" component={PostPage} />
        </div>

        </div>
        
      </Router>
    );
  }
}

export default App;