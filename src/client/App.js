import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Feed from './Feed';
import Chats from './Chats';
import '../../assets/css/style.css'

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Helmet>
                    <title>Graphbook - Feed</title>
                    <meta name="description" content="Newsfeed of all the friends in Graphbook"></meta>
                </Helmet>
                <Feed />
                <Chats />
            </div>
        )
    }
}
