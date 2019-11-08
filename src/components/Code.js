import React, { Component } from 'react';
import SkillBar from 'react-skillbars';

class Code extends Component {
    render(){
        const skills = [
            {
                "type": "HTML",
                "level": 100,
                "color": {
                    "bar": "#e34f26",
                    "title": {
                        "background": "#e34f26"
                    }
                }
            },
            {
                "type": "CSS",
                "level": 95,
                "color": {
                    "bar": "#264de4",
                    "title": {
                        "background": "#264de4"
                    }
                }
            },
            {
                "type": "JavaScript",
                "level": 80,
                "color": {
                    "bar": "#f7df1e",
                    "title": {
                        "background": "#f7df1e"
                    }
                }
            },
            {
                "type": "ASP.NET",
                "level": 50,
                "color": {
                    "bar": "#1c7fc7",
                    "title": {
                        "background": "#1c7fc7"
                    }
                }
            },
            {
                "type": "PHP",
                "level": 65,
                "color": {
                    "bar": "#4f5b93",
                    "title": {
                        "background": "#4f5b93"
                    }
                }
            },
            {
                "type": "React",
                "level": 70,
                "color": {
                    "bar": "#00d8ff",
                    "title": {
                        "background": "#00d8ff"
                    }
                }
            },
            {
                "type": "Node.js",
                "level": 65,
                "color": {
                    "bar": "#215732",
                    "title": {
                        "background": "#215732"
                    }
                }
            }
        ];
        return (
            <div>
                <h5>Coding Skills</h5>
                <SkillBar skills={skills} height={'35px'} />
            </div>
        );
    }
}

export default Code;