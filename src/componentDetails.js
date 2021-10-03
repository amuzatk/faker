import React from 'react';

import faker from 'faker';

const ComponentDetails= (props) => {
    return (
        <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={props.avatar} />
        </a>

        <div className="content">
            <a href="/" className="author">
                {props.author}
            </a>
            <div className="metadata">
                <span className="date">{props.timeOfPost}</span>
            </div>

            <div className="text">
                {props.comments}
            </div>
        </div>                
    </div>
    );
};

export default ComponentDetails;

