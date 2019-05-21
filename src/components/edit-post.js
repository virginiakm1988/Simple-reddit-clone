import React, { Component } from 'react';
import axios from 'axios';

export default class EditPost extends Component {

    constructor(props) {
        super(props);

        this.onChangePostTitle = this.onChangePostTitle.bind(this);
        this.onChangePostAuthor = this.onChangePostAuthor.bind(this);
        this.onChangePostSub = this.onChangePostSub.bind(this);
        this.onChangePostContent = this.onChangePostContent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            post_title: '',
            post_author: '',
            post_sub: '',
            post_content: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/posts/'+this.props.match.params.id)
            .then(response => {
                console.log(this.props)
                this.setState({
                    todo_description: response.data.post_title,
                    todo_responsible: response.data.post_content,
                    todo_priority: response.data.post_sub,
                    todo_completed: response.data.post_author
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangePostTitle(e) {
        console.log(e.target.value)
        this.setState({
            post_title: e.target.value
        });
    }

    onChangePostAuthor(e) {
        this.setState({
            post_author: e.target.value
        });
    }

    onChangePostSub(e) {
        this.setState({
            post_sub: e.target.value
        });
    }
    onChangePostContent(e) {
        this.setState({
            post_content: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            post_title : this.state.post_title,
            post_author : this.state.post_author,
            post_sub : this.state.post_sub,
            post_content : this.state.post_content
        };
        console.log(obj);
        axios.post('http://localhost:4000/posts/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
            <h3>Edit your post</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Title: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.post_title}
                            onChange={this.onChangePostTitle}
                            />
                </div>
                <div className="form-group">
                    <label>Sub : </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.post_sub}
                            onChange={this.onChangePostSub}
                            />
                </div>
                <div className="form-group">
                    <label>Author: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.post_author}
                            onChange={this.onChangePostAuthor}
                            />
                </div>
                <div className="form-group">
                    <label>Write your post here: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.post_content}
                            onChange={this.onChangePostContent}
                            />
                </div>
                

                <div className="form-group">
                    <input type="submit" value="Update Post" className="btn btn-primary" />
                </div>
            </form>
        </div>
        )
    }
}