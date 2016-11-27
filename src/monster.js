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
        let isBegin = this.context.getStatus();
        if (!isBegin) {
            clearInterval(this.clearTimeId);
            return false;
        }
        this.setState({
            left: left + stepX,
            top: top + stepY,
        });
        this.crash(left, top, stepX, stepY);
        this.boundary(left, top, stepX, stepY);
    }
    crash(left, top, stepX, stepY) {
        let {width, height} = this.props;
        let {heroLeft,
            heroTop,
            heroWidth,
            heroHeight} = this.context.crash();
        let subdupleWidth = width / 2;
        let subdupleHeight = height / 2;
        let centerX = subdupleWidth + left;
        let centerY = subdupleHeight + top;
        let heroCenterX = heroWidth / 2 + heroLeft;
        let heroCenterY = heroHeight / 2 + heroTop;
        let leftQuadrant = Math.abs(centerX - heroCenterX) + heroCenterX - subdupleWidth;
        let topQuadrant = Math.abs(centerY - heroCenterY) + heroCenterY - subdupleHeight;
        if (leftQuadrant < heroLeft + heroWidth && topQuadrant < heroTop + heroHeight) {
            console.log('over');
            clearInterval(this.clearTimeId);
            this.context.over();
        }
    }
    boundary(left, top, stepX, stepY) {
        let {width, height} = this.props;
        let containerWH = this.context.containerWH;
        stepX = Math.abs(stepX)
        stepY = Math.abs(stepY)
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
    crash: React.PropTypes.func,
    getStatus: React.PropTypes.func,
};

export default Monster;
