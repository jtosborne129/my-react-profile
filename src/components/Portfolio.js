import React, { Component } from 'react';
import Work from './Work';

class Portfolio extends Component {
    render() {
        const smp = require('../assets/smoky_mtn_patriot.jpg');
        const str = require('../assets/strategic_technical_resources.jpg');
        const wd3 = require('../assets/Web_design_3.jpg');
        const ecs = require('../assets/e-commerce_storefronts.jpg');
        const ecsmp = require('../assets/social-media-projects.jpg');
        return(
            <div className="container">
                <h2 className="display-3">Portfolio</h2>
                <div className="row">
                    <div className="col-md-4">
                        <Work img={smp} title="Smokey Mountain Patriots" desc='This site is for a non-profit organization. Using WordPress and extensions like elementor as a page builder.' link='https://smokymountainpatriots.000webhostapp.com/' />
                    </div>
                    <div className="col-md-4">
                        <Work img={str} title="Strategic Technical Resources" desc='This site was made for a client who wanted a services site. I used WordPress for the site.' link='http://www.strategictechresource.com/' /> 
                    </div>
                    <div className="col-md-4">
                        <Work img={wd3} title="Web Design 3 Home page" desc="This project is a collection of advance HTML & CSS. This is the homepage for many class projects." link="https://webdesign3.000webhostapp.com/" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Work img={ecs} title="E-Commerce Storefront" desc="This project is to show how to make a e-commerce storefront in wix." link="https://transformersrule81.wixsite.com/storefront" />
                    </div>
                    <div className="col-md-4">
                        <Work img={ecsmp} title="E-Commerce Social Media Project" desc="This project is to show how to include social media into a site." link="https://business7987.wordpress.com/" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;