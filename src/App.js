import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.min.css"
import "./loader.css"

import PostsList from "./container/posts";
import CreatePost from "./components/create-post";
import EditPost from "./components/edit-post";
import PostPage from './components/post-page'
import "./style.sass"
import redditTitle from"./reddit.svg";


class App extends Component {
  render() {
    return (
      <Router>
				<div style={{background_color:"black"}}>
				<img src={redditTitle}  className = "reddit"  width="120" height="80" alt ="title"></img>
				</div>
       
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

        <footer
						className="section footer-classic context-dark bg-image"
						style={{ background: '#2d3246', marginTop: "17%" }}
					>
            <p>midterm project by Virginia B06303097. I'm quite a nerd, I love Reddit sooo much therefore I made a Reddit clone myself.</p>
						<p>I write and post about western music and feminsim on my Medium.</p>
            <div className="container">
							<div className="col-md-6">
								<div className="pr-xl-4">
									<a className="brand" href="index.html">
										<img
											className="brand-logo-light"
											src="images/agency/logo-inverse-140x37.png"
											alt=""
											width="140"
											height="37"
											srcset="images/agency/logo-retina-inverse-280x74.png 2x"
										/>
									</a>
								</div>
							</div>

							 
						</div>
						<div className="row no-gutters social-container">

							<div className="col col-md-3">
								<a className="social-inner" target="_blank" href="https://github.com/virginiakm1988">
									<i className="fab fa-github" />
									<span>Github</span>
								</a>
							</div>
							<div className="col col-md-3">
								<a
									className="social-inner"
									target="_blank"
									href="https://www.facebook.com/virginiakm1718"
								>
									<i className="fab fa-facebook" />
									<span>Facebook</span>
								</a>
							</div>
							<div className="col col-md-3">
								<a
									className="social-inner"
									target="_blank"
									href="https://www.instagram.com/virginiakm1988/"
								>
									<i className="fab fa-instagram" />
									<span>Instagram</span>
								</a>
							</div>
              <div className="col col-md-3">
								<a
									className="social-inner"
									target="_blank"
									href="https://medium.com/@virginiakm1988"
								>
									<i className="fab fa-medium" />
									<span>Medium</span>
								</a>
							</div>
						</div>
					</footer>
      </Router>
    );
  }
}

export default App;