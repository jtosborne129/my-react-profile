import React, { Component } from 'react';
import Input from './form/Input';
import TextArea from './form/TextArea';
import Button from './form/Button';
import * as emailjs from 'emailjs-com';
import 'jquery';

import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: '',
            errors: {
                name: '',
                email: '',
                phone: '',
                message: ''
            }
        }
    }

    handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    validateMail() {
        let errors = {};
        let formIsValid = true;

        if (!this.state.name || this.state.name.length < 3) {
            errors.name = 'Minimum 3 characters';
            formIsValid = false;
        }

        if (!this.state.email || this.state.email.length < 3) {
            errors.email = 'Minimum 3 characters';
            formIsValid = false;
        }

        if (!this.state.phone || this.state.phone.length < 12) {
            errors.phone = 'Minimum 12 characters';
            formIsValid = false;
        }

        if (!this.state.message || this.state.message.length < 10) {
            errors.message = 'Minimum 10 characters';
            formIsValid = false;
        }

        let emailPattern = /^\w+([.-]?\w+)*@\w([.-]?\w+)*(\.\w{2,3})+$/;
        let phonePattern = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;

        if (!emailPattern.test(this.state.email)) {
            errors.email = 'This is not a valid email';
            formIsValid = false;
        }

        if (!phonePattern.test(this.state.phone)) {
            errors.phone = 'This is not a valid phone number';
            formIsValid = false;
        }

        this.setState({
            errors: errors
        });

        return formIsValid;
    }

    sentMessage(event) {
        event.preventDefault();

        if (!this.validateMail()) {
            return;
        }

        var templateParams = {
            from_name: this.state.name + '{' + this.state.email + '}',
            to_name: 'jtosborne129@gmail.com',
            phone_number: this.state.phone,
            message_html: this.state.message
        }

        emailjs.send('gmail', 'template_BnLs68OH', templateParams, 'user_ccicTv5oRZQJ9BRToFM8W')
            .then(function (response) {
                mobiscroll.toast({
                    message: 'Your message has been sent',
                    color: 'success',
                    display: 'top'
                });
                console.log('SUCCESS!', response.status, response.text);
            }, function (err) {
                mobiscroll.toast({
                    message: 'Something happened while being sent',
                    color: 'danger',
                    display: 'top'
                });
                console.error(err);
            });

        this.setState({
            name: '',
            email: '',
            phone: '',
            message: '',
        });
    }
    render() {
        return (
            <div>
                <form
                    id={this.props.id}
                    className={this.props.className}
                    name={this.props.name}
                    method={this.props.method}
                    action={this.props.action}
                >
                    <Input
                        type='text'
                        name='name'
                        className='form-control'
                        required='required'
                        onChange={this.handleInputChange.bind(this)}
                        value={this.state.name}
                        error={this.state.errors.name}
                    />

                    <Input
                        type='email'
                        name='email'
                        className='form-control'
                        required='required'
                        onChange={this.handleInputChange.bind(this)}
                        value={this.state.email}
                        error={this.state.errors.email}
                    />
                    <Input
                        type='tel'
                        name='phone'
                        className='form-control'
                        required='required'
                        onChange={this.handleInputChange.bind(this)}
                        value={this.state.phone}
                        error={this.state.errors.phone}
                    />
                    <TextArea
                        name='message'
                        id='message'
                        required='required'
                        className='form-control'
                        rows='8'
                        onChange={this.handleInputChange.bind(this)}
                        value={this.state.message}
                        error={this.state.errors.message}
                    />
                    <Button
                        onClick={this.sentMessage.bind(this)}
                        type='button'
                        name='submit'
                        className='btn btn-success btn-lg'
                        required='required'
                    />
                </form>
            </div>
        )
    }
}

export default Form;