import React, { Component } from 'react';
import data from './data/home.json';
import Leaf from './../service/leaf';

const svgStyle = {
    enableBackground:"new 0 0 240.9 332.5"
};

class Home extends Component {
    render () {
        return (
            <div className="container">
                <h1>{data.title}</h1>
                <p>{data.text}</p>

                <Leaf className="leaf">
                    <svg version="1.1" id="snapsvg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="240.9px" height="332.5px" viewBox="0 0 240.9 332.5" style={svgStyle} xmlSpace="preserve">
                    </svg>
                </Leaf>
            </div>
        )
    }
}

export default Home;