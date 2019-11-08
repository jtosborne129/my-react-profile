import React, { Component } from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="jumbotron home-bg">
                            <h1 className="display-4">Joseph Osborne</h1>
                            <h2 className="display-3">Web Developer</h2>
                            <div className="social">
                                <a href="https://twitter.com" className="btn btn-clear btn-rounded" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter />
                                </a>
                                <a href="https://www.linkedin.com" className="btn btn-clear btn-rounded" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;