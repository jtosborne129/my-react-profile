import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="bg-dark py-4">
                <p className="text-white text-center">&copy; {new Date().getFullYear()} Joseph Osborne <br /> All Rights Reserved.</p>
            </footer>
        );
    }
};

export default Footer