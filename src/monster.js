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
            stepX: 1.5,
            stepY: 1.5,
        };
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
        if (nextProps.isBegin) {
            this.begin();
        }
    }
    begin() {
        clearInterval(this.clearTimeId);
        this.clearTimeId = setInterval(() => {
            this.move();
        }, 10);
    }
    move() {
        let {left, top, stepX, stepY} = this.state;
        this.setState({
            left: left + stepX,
            top: top + stepY,
        });
        this.crash(left, top, stepX, stepY);
        this.boundary(left, top, stepX, stepY);
    }
    crash(left, top, stepX, stepY) {
        
    }
    boundary(left, top, stepX, stepY) {
        let {width, height} = this.props;
        let containerWH = this.context.containerWH;
        stepX = Math.abs(stepX)
        stepY = Math.abs(stepY)
        //console.log('stepX', stepX);
        //console.log('stepY', stepY);
        if (left <= 0) {
            this.setState({
                stepX: stepX
            });
        }
        if (top <= 0) {
            this.setState({
                stepY: stepY
            });
        }
        if (left + width >= containerWH) {
            this.setState({
                stepX: -stepX
            });
        }
        if (top + height >= containerWH) {
            this.setState({
                stepY: -stepY
            });
        }
    }
    render() {
        let {bg, width, height, x, y} = this.props;
        let {left, top} = this.state;
        return (
            <div ref="monster" className="item" style={{left: left, top: top}}>
            <Base bg={bg} width={width} height={height}/>
            </div>
        );
    }
}

Monster.contextTypes = {
    begin: React.PropTypes.func,
    over: React.PropTypes.func,
    containerWH: React.PropTypes.number,
};

export default Monster;
