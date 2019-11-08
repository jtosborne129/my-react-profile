import React from 'react';

const Work = (props) => (
    <div className="card">
        <img className="card-img-top" src={props.img} alt={props.title} />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
            <a href={props.link} className="btn btn-primary btn-block" target="_blank" rel="noopener noreferrer">Check this project out</a>
        </div>
    </div>
);

export default Work;