import React, { Component } from 'react';
import axios from 'axios';
import "../App.css"

const Comment = props =>(

    <tr className="comments" >
        <td className = "center" >
            <svg className = "like"  version = "1.1" width= "24" height= "24" viewBox = "0 0 24 24" >
                <path d = "M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10.08L23,10M1,21H5V9H1V21Z"></path>
            </svg>

            <p class = "score">{props.comment.rate}</p>
                
            <svg className = "dislike" version = "1.1" width= "24" height= "24" viewBox = "0 0 24 24">
                <path d = "M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V13.91L1,14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path>
            </svg>
        </td>
        <div>
        <div className = "commentinline">
        <p className = "author">
            posted by author
        </p>
    
        <p className = "title">
            {props.comment.content}
        </p>
        
        </div>
        
        
    </div>
    </tr>

)


export default class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : this.props.post,
            post_title: '',
            post_author: '',
            post_sub: '',
            post_content: '',
            comments : [],
            comment :"",
            rate:0
        }
        this.onChangeComments = this.onChangeComments.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeComments(e){
       
        this.setState({
            comment : e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.state.comment !== "")
        {
            var NewComments = this.state.comments;
         //   console.log(NewComments, this.state.comment)
            NewComments.push({content:this.state.comment,rate:0})
            console.log(NewComments, this.state.comment)
            const obj = {
                post_title : this.state.post_title,
                post_author : this.state.post_author,
                post_sub : this.state.post_sub,
                post_content : this.state.post_content,
                rate:this.state.rate,
                comments : NewComments
            };
            console.log(obj);
            axios.post('http://localhost:4000/posts/update/'+this.props.id.match.params.id, obj)
                .then(res => console.log("res",res.data))
                .catch(function (error) {
                    console.log(error);
                });
            this.setState({
                comment :""
            });
        }
       
        
    }

    componentDidMount() {
        axios.get('http://localhost:4000/posts/'+this.props.id.match.params.id)
            .then(response => {
                this.setState({ 
                    post_title : response.data.post_title,
                    post_author : response.data.post_author,
                    post_content : response.data.post_content,
                    rate : 0,
                    post_sub : '',
                    comments : response.data.comments,
                    post : response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    postComments () {
        return this.state.comments.map(function(currentComment,i){
            return <Comment comment = {currentComment} key = {i}/>
        })
    }

    render() {
        return (
            <fragment className="flex">
                <form className="comment-form-group"  onSubmit = {this.onSubmit} >
                <div > 
                    <label>Share your thoughts...</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.comment}
                                onChange={this.onChangeComments}
                        />
                </div>
                <div className ="form-group">
                            <input type="submit"value="Submit" className="btn btn-primary" />
                </div>
                </form>
                
          <table className="comment-display">
            <tbody>
                {this.postComments()}
            </tbody>
          </table>
            </fragment>
            
        )
    }
}