import React, {Component} from 'react';
import './style.css';

class Base extends Component{
    constructor() {
        super();
    }
    render() {
        let {bg, width, height} = this.props;
        return (
            <div style={{background:bg,width:width,height:height}}></div>
        );
    }

}

Base.propTypes = {
    bg: React.PropTypes.string.isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
};

export default Base;
