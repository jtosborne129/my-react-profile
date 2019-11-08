import React, { Component } from 'react';
import { FaCode, FaWordpress, FaMoneyBill } from 'react-icons/fa';

class Services extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="display-3 mt-3">My Services</h2>
                <div className="row my-4">
                    <div className="col-md-4">
                        <div className="service-box">
                            <div className="service-icon yellow">
                                <div className="front-content">
                                    <FaCode />
                                    <h3>Web Development</h3>
                                </div>
                            </div>
                            <div className="service-content">
                                <h3>Web Development</h3>
                                <p>Developing simple to complete sites. Making sure the site looks great on other devices.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-box">
                            <div className="service-icon orange">
                                <div className="front-content">
                                    <FaMoneyBill />
                                    <h3>E-Commerce Development</h3>
                                </div>
                            </div>
                            <div className="service-content">
                                <h3>E-Commerce Development</h3>
                                <p>Helping businesses put their stores online.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-box">
                            <div className="service-icon red">
                                <div className="front-content">
                                    <FaWordpress />
                                    <h3>WordPress Development</h3>
                                </div>
                            </div>
                            <div className="service-content">
                                <h3>WordPress Development</h3>
                                <p>Developing wordpress sites for easy use for clients to change or update their site.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Services