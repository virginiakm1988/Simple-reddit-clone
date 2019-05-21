import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';
import "../App.css"
import"../style.sass"
import Post from "../components/post"

export default class PostsList extends Component {

    constructor(props) {
        super(props);
        this.state = {posts: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/posts/')
            .then(response => {
                this.setState({ posts: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    postList() {
        return this.state.posts.map(function(currentPost, i){
            return <Post post={currentPost} key={i} />;
        })
    }

    render() {
        return (
            <Router>
                    <table id="table"  >
                        
                        <tbody>
                            
                            { this.postList() }
                        </tbody>
                    </table>
                
            </Router>
           
        )
    }
}