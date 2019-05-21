import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import "../App.css"
//import "../style.sass"
import Comments from "./comments";



export default class PostsPage extends Component {

    constructor(props) {
        super(props);
        this.upvote = this.upvote.bind(this);
        this.downvote = this.downvote.bind(this);
        this.state = {
            post : [],
            title : " ",
            author : '',
            content : '',
            rate : 0,
            sub : '',
            comments : [],
            id: this.props.match.params.id
        };
    }
    
    componentDidMount() {
        
        axios.get('http://localhost:4000/posts/'+this.props.match.params.id)
            .then(response => {
                this.setState({ 
                    id : this.props.match.params.id,
                    title : response.data.post_title,
                    author : response.data.post_author,
                    content : response.data.post_content,
                    rate : response.data.rate,
                    sub : '',
                    comments : response.data.comments,
                    post : response.data });
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

        axios.post('http://localhost:4000/posts/update/'+this.state.id, newPost)
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
        axios.post('http://localhost:4000/posts/update/'+this.state.id, newPost)
        .then(res => console.log(res.data));
        

    }
    
    render() {
        return (
            
            <fragment className = "article">
                <div >
                    <h3>{this.state.title}</h3>
                    <h6>Posted by {this.state.author}</h6>
                </div>

                <div>
                    <p>{this.state.content}</p>
                </div>
                
                <div className = "navbar navbar-expand-lg navbar-light bg-dark">
                    <svg className = "like"  version = "1.1" width= "24" height= "24" viewBox = "0 0 24 24" >
                        <path onClick={this.upvote} d = "M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10.08L23,10M1,21H5V9H1V21Z"></path>
                    </svg>

                    <p className = "score">{this.state.rate}</p>
                        
                    <svg className = "dislike" version = "1.1" width= "24" height= "24" viewBox = "0 0 24 24">
                        <path onClick={this.downvote} d = "M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V13.91L1,14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path>
                    </svg>
                </div>
                  <Comments id = {this.props}/>

                
            
            </fragment>
        )
    }
}