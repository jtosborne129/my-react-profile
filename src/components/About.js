import React, { Component } from 'react';
import Code from './Code';
import Program from './Program';

class About extends Component {
    render() {
        const profile = require('../assets/Joey Osborne (myself).jpg');
        const resume = require('../assets/Joey_Osborne_Resume (1).doc');
        return (
            <div className="container">
                <h2 className="display-3">About Me</h2>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <img src={profile} alt="Joseph Osborne" className="rounded-circle mb-3" width="200" />
                        <p>I am a recent graduated student of Pellissippi State Community College with an Associate of Applied Science in Media Technologies with concentration in Web Technologies. I can code in ASP.NET, HTML, CSS, JavaScript, and PHP in loads of diiferent text editors or IDE editors my favorite is VS Code. I have work with and publish Wordpress sites. I am easily contacted through email or my contact form for any or all questions. I am also familiar with most database like MySQL or Microsoft SQL Servers. I am willing and able to always learn new and unique techniques or coding skill.</p>
                        <a href={resume} className="btn btn-primary btn-block" download>Download Resume</a>
                    </div>
                    <div className="col-md-6 mt-3">
                        <Code />
                        <Program />
                    </div>
                </div>
            </div>
        );
    }
}

export default About;