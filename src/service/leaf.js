import React, { Component } from 'react';
import {MorphTransition} from 'react-svg-morph';
import LeafFirst from './leafFirst';
import LeafSecond from './leafSecond';

const svgStyle = {
    enableBackground:"new 0 0 240.9 332.5"
};

class Leaf extends Component {
    componentDidMount () {
    }

    render () {
        return (
                <svg ref={(svg) => { this.snapSvg = svg; }} version="1.1" id="snapsvg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     width="240.9px" height="332.5px" viewBox="0 0 240.9 332.5" style={svgStyle} xmlSpace="preserve">
                </svg>
            )
    }
}

export default Leaf;