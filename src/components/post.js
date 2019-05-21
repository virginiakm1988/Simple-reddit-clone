
import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import axios from 'axios';
import "../App.css"
import"../style.sass"


export default class Post extends Component  {
    constructor(props){
        super(props)
        console.log(props)
        this.upvote = this.upvote.bind(this);
        this.downvote = this.downvote.bind(this);
        this.state = {
            post_title : this.props.post.post_title,
            post_author : this.props.post.post_author,
            post_sub : this.props.post.post_sub,
            rate:this.props.post.rate,
            post_content : this.props.post.post_content,
            comments : this.props.post.comments,
            _id:this.props.post._id
        }
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
    upvote(){
        console.log("upvote")
        this.setState({
            rate : this.state.rate+1
        })
        const newPost = {
            post_title : this.state.post_title,
            post_author : this.state.post_author,
            post_sub : this.state.post_sub,
            rate:this.state.rate,
            post_content : this.state.post_content,
            comments : this.state.comments
        };

        axios.post('http://localhost:4000/posts/update/'+this.state._id, newPost)
            .then(res => console.log(res.data));
    }
    downvote(){
        console.log("upvote")
        this.setState({
            rate : this.state.rate-1
        })
        const newPost = {
            post_title : this.state.post_title,
            post_author : this.state.post_author,
            post_sub : this.state.post_sub,
            rate:this.state.rate,
            post_content : this.state.post_content,
            comments : this.state.comments
        };
        axios.post('http://localhost:4000/posts/update/'+this.state._id, newPost)
        .then(res => console.log(res.data));
        

    }
    render() {
        return (
            <tr   key = {this.state._id}  >
            <td className = "center">
                <svg className = "like"  version = "1.1" width= "24" height= "24" viewBox = "0 0 24 24" >
                    <path onClick={this.upvote} d = "M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10.08L23,10M1,21H5V9H1V21Z"></path>
                </svg>
    
                <p className = "score">{this.state.rate}</p>
                    
                <svg className = "dislike" version = "1.1" width= "24" height= "24" viewBox = "0 0 24 24">
                    <path onClick={this.downvote} d = "M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V13.91L1,14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path>
                </svg>
            </td>
            
            <td >
                <div className = "inline">
                <p className = "title">
                <Link  className="title" onClick={() => window.location.refresh()} to={"/postPage/"+this.state._id}>{this.state.post_title}</Link>
        
                </p>
                <p className = "author">
                    <span>posted by</span>
                    <b> {this.state.post_author}</b> 
                    <span> to </span>
                    <b>{this.state.post_sub} </b> 
                </p>
               
                </div>
                
                
            </td>
            <td>
             
            </td>
            
    
            
        </tr>
        )
    }
}