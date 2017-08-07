import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Plant extends Component {
    render () {
        const width = this.props.width;
        const height = this.props.height;
        const basicfill = this.props.basicfill;
        const accentcolor = this.props.accentcolor;
        const primarycolor = this.props.primarycolor;

        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 21.7 35.4">
                <path d="M9.1 13.1c-2.1 0-3.8 2.4-3.8 5.3 0 1.6.5 3 1.4 4v.1h4.7v-.1c.9-1 1.4-2.5 1.4-4 .1-3-1.6-5.3-3.7-5.3zm-4-2.8c-.4-1.1-1.1-2-1.8-2.6-.6-.5-1.1-.7-1.6-.6-.8.3-1.1 2.3-.2 4.6.4 1 1 1.9 1.7 2.5.5.5 1 .7 1.4.7.1 0 .2 0 .3-.1.4-.2.7-.8.8-1.6 0-.9-.2-1.9-.6-2.9zm13.6-2.6c.5 0 1.1-.3 1.5-1 .3-.4.5-.9.5-1.3 0-.2 0-.6-.3-.8-.1-.1-.3-.1-.4-.1-.2 0-.3 0-.4.1-.4.1-.8.5-1.1.9-.4.3-.5.8-.5 1.2 0 .2 0 .6.3.8.1.1.2.2.4.2zm-6.6 5.6c.3.2.7.2 1 .2 1.3 0 2.7-1 3.5-2.6.5-1 .7-2 .6-3s-.6-1.7-1.3-2.1c-.3-.2-.7-.2-1-.2-1.3 0-2.7 1-3.5 2.6-.5 1-.7 2-.6 3s.5 1.8 1.3 2.1zm-.4-7.5c.4 0 .8-.2 1.1-.7.3-.4.5-1 .6-1.6.1-.7-.1-1.3-.4-1.8-.2-.3-.5-.7-1-.7s-.9.3-1.1.6c-.4.4-.6 1.1-.6 1.7-.1.7.1 1.3.4 1.8.1.2.4.6 1 .7-.1 0 0 0 0 0z" fill={primarycolor}/>
                <circle cx="10" cy="17.7" r=".6" fill={basicfill}/>
                <circle cx="7.6" cy="20.3" r=".6" fill={basicfill}/>
                <circle cx="9.5" cy="15.2" r=".6" fill={basicfill}/>
                <circle cx="10.7" cy="21.4" r=".6" fill={basicfill}/>
                <circle cx="7.7" cy="16.4" r=".6" fill={basicfill}/>
                <circle cx="14.9" cy="10.4" r=".6" fill={basicfill}/>
                <circle cx="12.3" cy="10.7" r=".6" fill={basicfill}/>
                <circle cx="14.4" cy="7.7" r=".6" fill={basicfill}/>
                <circle cx="3.9" cy="10.1" r=".6" fill={basicfill}/>
                <circle cx="3.9" cy="13" r=".6" fill={basicfill}/>
                <circle cx="2.2" cy="10" r=".6" fill={basicfill}/>
                <circle cx="11.6" cy="2.5" r=".6" fill={basicfill}/>
                <circle cx="12.2" cy="4.4" r=".6" fill={basicfill}/>
                <circle cx="19.2" cy="6.1" r=".6" fill={basicfill}/>
                <path fill={accentcolor} d="M5.4 34.3v.1h7.4l1-7.5H4.4zm9-8.4l-.2-2.8H4l-.2 2.8z"/>
                <path d="M21 3.8c-.5-.3-1.1-.4-1.8-.2-.6.2-1.1.6-1.6 1.2-.2.2-.3.4-.4.7l-.1.2-.1-.1c-.2-.2-.5-.4-.7-.5-.6-.3-1.3-.4-2-.3h-.2l.1-.2c.1-.3.2-.7.2-1 .1-.9-.1-1.7-.5-2.4S12.9.1 12.2 0s-1.4.3-1.9.9c-.6.6-.9 1.4-1 2.3 0 .8.1 1.7.5 2.3.3.5.7.9 1.2 1.1l.2.1-.1.2c-.2.3-.4.6-.6 1-.7 1.1-.9 2.4-.7 3.6 0 .2.1.3.1.5l.1.2h-.2c-1-.2-2 .1-2.8.7l-.3.1v-.3c0-.9-.3-1.9-.7-2.8-.5-1.2-1.2-2.3-2-3-.9-.8-1.8-1-2.6-.7C.6 6.6.1 7.4 0 8.6c-.1 1.1.1 2.3.6 3.5s1.2 2.3 2 3c.6.5 1.3.8 1.8.8h.2l-.1.2c-.2.7-.3 1.5-.3 2.3 0 1.4.4 2.8 1 3.9l.1.2H3.7c-.2 0-.5.2-.5.4L3 24.3l-.2 2c0 .1 0 .3.1.4s.2.2.4.2h.2v.1l1 7.9c0 .2.2.4.5.4h8.2c.2 0 .5-.2.5-.4l1.1-8.1h.2c.1 0 .3-.1.4-.2.1-.1.1-.2.1-.4l-.2-2-.3-1.3c0-.2-.2-.4-.5-.4h-1.9l.1-.2c.7-1.1 1-2.4 1-3.9 0-1.3-.3-2.5-.9-3.6l-.1-.2h.2c.6 0 1.1-.2 1.7-.4 1.1-.5 2-1.5 2.6-2.7.4-.9.7-1.8.7-2.7v-.2h.6c.8 0 1.7-.5 2.3-1.4.4-.6.7-1.2.7-1.9.2-.6-.1-1.2-.5-1.5zM10.7 5c-.3-.5-.4-1.1-.4-1.8.1-.7.3-1.3.6-1.7.2-.2.6-.6 1.1-.5.5 0 .8.5 1 .7.3.5.4 1.1.4 1.8 0 .6-.3 1.2-.6 1.6s-.7.7-1.1.7h-.1c-.5-.1-.8-.5-.9-.8zm-5.8 9.8c-.1 0-.2.1-.3.1-.4 0-.9-.2-1.4-.7-.7-.6-1.2-1.5-1.7-2.5-.9-2.2-.6-4.2.2-4.6.4-.2 1 0 1.6.5.7.7 1.4 1.6 1.8 2.7.4 1 .6 2 .6 2.9-.1.9-.3 1.5-.8 1.6zm7.9 19.6H5.4v-.1l-1-7.4h9.3l-.9 7.5zm1.3-11l.1.9.2 1.6H3.8l.2-1.6.1-.9h10zm-1.2-5.1c0 1.6-.5 3-1.4 4v.1H6.7v-.1c-.9-1-1.4-2.5-1.4-4C5.3 15.4 7 13 9.1 13c2.1.1 3.8 2.4 3.8 5.3zm3.7-7.3c-.8 1.6-2.2 2.6-3.5 2.6-.4 0-.7-.1-1-.2-.7-.4-1.2-1.1-1.3-2.1-.1-.9.1-2 .6-3 .8-1.5 2.2-2.6 3.5-2.6.4 0 .7.1 1 .2.7.4 1.1 1.1 1.3 2.1.1 1-.1 2-.6 3zm4.1-5.6c0 .4-.2.9-.5 1.3-.5.6-1.1 1-1.5 1-.2 0-.3 0-.4-.1-.3-.3-.4-.6-.3-.9 0-.4.2-.9.5-1.3s.7-.7 1.1-.9c.1 0 .3-.1.4-.1.2 0 .3 0 .4.1.3.3.3.7.3.9z" fill={basicfill}/>
            </svg>
        )
    }
}

Plant.defaultProps = {
    width: '21.7',
    height: '35.4',
    basicfill: '#363d42',
    accentcolor: '#f5dcd9',
    primarycolor: '#85bd7e'
};

Plant.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    basicfill: PropTypes.string,
    accentcolor: PropTypes.string,
    primarycolor: PropTypes.string
};

export default Plant;