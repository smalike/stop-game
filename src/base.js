import React, {Component} from 'react';
import './style.css';

class Base extends Component{
    constructor() {
        super();
    }
    render() {
        let {bg, width, height, x, y} = this.props;
        return (
            <div className="item" style={{background:bg,width:width,height:height,top:y,left:x}}></div>
        );
    }

}

Base.propTypes = {
    bg: React.PropTypes.string.isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
};

export default Base;
