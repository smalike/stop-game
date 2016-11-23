import React, {Component} from 'react';
import Base from './base';

class Monster extends Component{
    constructor(params) {
        super(params);
        let {bg, width, height, x, y} = this.props;
        this.state = {
            isMove: false,
            left: x,
            top: y,
            stepX: .5,
            stepY: .5,
        };
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
        if (nextProps.isBegin) {
            this.begin();
        }
    }
    begin() {
        setInterval(() => {
            this.move();
        }, 10);
    }
    move() {
        let {left, top, stepX, stepY} = this.state;
        this.setState({
            left: left + stepX,
            top: top + stepY,
        });
    }
    render() {
        let {bg, width, height, x, y} = this.props;
        let {left, top} = this.state;
        return (
            <div className="item" style={{left: left, top: top}}>
            <Base bg={bg} width={width} height={height}/>
            </div>
        );
    }
}

export default Monster;
