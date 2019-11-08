import React, { Component } from 'react';
import SkillBar from 'react-skillbars';

class Program extends Component {
    render(){
        const skills = [
            {
                "type": "Dreamweaver",
                "level": 100,
                "color": {
                    "bar": "#35fa00",
                    "title": {
                        "background": "#35fa00"
                    }
                }
            },
            {
                "type": "Photoshop",
                "level": 95,
                "color": {
                    "bar": "#0fbee3",
                    "title": {
                        "background": "#0fbee3"
                    }
                }
            },
            {
                "type": "WordPress",
                "level": 90,
                "color": {
                    "bar": "#21759b",
                    "title": {
                        "background": "#21759b"
                    }
                }
            },
            {
                "type": "FireWork",
                "level": 60,
                "color": {
                    "bar": "#e6d605",
                    "title": {
                        "background": "#e6d605"
                    }
                }
            },
            {
                "type": "VS",
                "level": 50,
                "color": {
                    "bar": "#692573",
                    "title": {
                        "background": "#692573"
                    }
                }
            }
        ];
        return (
            <div>
                <h5>Programs I know</h5>
                <SkillBar skills={skills} height={'35px'} />
            </div>
        );
    }
}

export default Program;