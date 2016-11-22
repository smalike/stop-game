import React, {Component} from 'react';
import Base from './base';

class Hero extends Component{
    constructor(props) {
        super(props);
        this.downHandler = this.downHandler.bind(this);
        this.upHandler = this.upHandler.bind(this);
        this.moveHandler = this.moveHandler.bind(this);
    }
    downHandler(e) {
        e.currentTarget.addEventListener('mousemove', this.movehandler, false);
    }
    upHandler(e) {
        e.currentTarget.removeEventListener('mousemove', this.movehandler, false);
    }
    moveHandler(e) {
        console.log(e);
    }
    render() {
        let {bg, width, height, x, y} = this.props;
        return (
            <Base onMouseup={this.upHandler.bind(this)} onMousedown={this.downHandler.bind(this)} bg={bg} width={width} height={height} x={x} y={y}/>
        );
    }
}

export default Hero;
