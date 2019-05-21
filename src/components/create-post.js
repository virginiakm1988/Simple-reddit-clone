import React, { Component } from 'react';
import axios from 'axios';

export default class CreatePost extends Component {

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
            post_content: '',
            comments :[{content:"",rate:0}],
            rate:0
        }
    }

    onChangePostTitle(e) {
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
        
        console.log(`Form submitted:`);
        console.log(`Post Title: ${this.state.post_title}`);
        console.log(`Post Author: ${this.state.post_author}`);
        console.log(`Post Sub: ${this.state.post_sub}`);
        console.log(`Post rate: ${this.state.rate}`);
        console.log(`Post Content: ${this.state.post_content}`);
        console.log(`Post Comments: ${this.state.comments}`)
        const newPost = {
            post_title : this.state.post_title,
            post_author : this.state.post_author,
            post_sub : this.state.post_sub,
            rate:this.state.rate,
            post_content : this.state.post_content,
            comments : this.state.comments
        };
        
        axios.post('http://localhost:4000/posts/add', newPost)
            .then(res => console.log(res.data));
        this.setState({
            post_title: '',
            post_author: ' ',
            post_sub: ' ',
            post_content: ' ',
            rate:0,
            comments :[{content:"",rate:0}]
        });
       
        this.props.history.push('/');
        window.location.reload();
    }

    render() {
        return (
            <div className="create-post" style={{marginTop: 10}}>
                <h3>Post something new!</h3>
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
                        <input type="submit" value="Create Post" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}