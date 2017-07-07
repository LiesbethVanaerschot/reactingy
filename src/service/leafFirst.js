import React, { Component } from 'react';
import data from './data/leafs.json';

const svgStyle = {
    enableBackground:"new 0 0 240.9 332.5"
};

const pathStyle = {
    opacity: data.leaf_1[0].opacity,
    fill: data.leaf_1[0].fill
};

class LeafFirst extends Component {
    render () {
        return (
            <svg version="1.1" id="snapsvg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 width={data.leaf_1[0].width} height={data.leaf_1[0].height} viewBox="0 0 240.9 332.5" style={svgStyle} xmlSpace="preserve">
                <path style={pathStyle} d={data.leaf_1[0].d}>
                </path>
            </svg>
        )
    }
}