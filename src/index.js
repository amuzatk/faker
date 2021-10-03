import React from 'react'
import reactDom from 'react-dom'

import "semantic-ui-css/semantic.min.css";
import faker from "faker";
import ComponentDetails from "./componentDetails";
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            
            <ApprovalCard>
                <h3>Warning!</h3>
                Are you sure you want to exit?
            </ApprovalCard>
            <ApprovalCard>
                <ComponentDetails 
                    author="Kaz" 
                    timeOfPost="today at 9:45am" 
                    comments="Nice blog post" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>

            <ApprovalCard>
                <ComponentDetails 
                    author="Ola" 
                    timeOfPost="today at 3:05pm" 
                    comments="What an awesome post" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>

            <ApprovalCard>
                <ComponentDetails 
                    author="Muiz" 
                    timeOfPost="yesterday at 8:10pm" 
                    comments="Great" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>

            {/* <div className="comment">
                <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
                </a>

                <div className="content">
                    <a href="/" className="author">
                        Kazeem Amuzat
                    </a>
                    <div className="metadata">
                        <span className="date">Today 6:00pm</span>
                    </div>

                    <div className="text">
                        Nice blog post
                    </div>
                </div>                
            </div> */}
        </div>
        
    );
    
};

reactDom.render(
    <App />,
    document.querySelector('#root')
);