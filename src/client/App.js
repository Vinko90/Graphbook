import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import '../../assets/css/style.css'

const posts = [{
    id: 2,
    text: 'Lorem ipsum',
    user: {
        avatar: '/uploads/avatar2.png',
        username: 'Test User 2'
    }
},
{
    id: 1,
    text: 'Lorem ipsum',
    user: {
        avatar: '/uploads/avatar1.png',
        username: 'Test User 1'
    }
}];

export default class App extends Component {
    
    state = {
        posts: posts,
        postContent: ''
    }
    
    handlePostContentChange = (event) => {
        this.setState({postContent: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        const newPost = {
            id: this.state.posts.length + 1,
            text: this.state.postContent,
            user: {
                avatar: '/uploads/avatar1.png',
                username: 'Fake User'
            }
        };

        this.setState((prevState) => ({
            posts: [newPost, ...prevState.posts],
            postContent: ''
        }));
    }

    render() {
        const { posts, postContent } = this.state;

        return (
            <div className="container">
                <Helmet>
                    <title>Graphbook - Feed</title>
                    <meta name="description" content="Newsfeed of all the friends in Graphbook"></meta>
                </Helmet>
                <div className="postForm">
                    <form onSubmit={this.handleSubmit}>
                    <textarea value={postContent} onChange={this.handlePostContentChange} placeholder="Write your custom post!"/>
                        <input type="Submit" value="Submit" onChange={this.handleSubmit} />
                    </form>
                </div>
                <div className="feed">
                    {posts.map((post, i) =>
                        <div key={post.id} className="post">
                            <div className="header">
                                <img src={post.user.avatar} />
                                <h2>{post.user.username}</h2>
                            </div>
                            <p className="content">
                                {post.text}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
