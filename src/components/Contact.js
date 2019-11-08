import React, { Component } from 'react';
import Form from './Form';

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-2">
                        <h2 className="text-center display-1">Contact Me</h2>
                        <div className="status alert alert-success" style={{ display: 'none' }} />
                        <Form id='contact-form' className='contact-form' name='contact-form' method='post' action='' />
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;