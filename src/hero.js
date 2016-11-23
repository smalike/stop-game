import React, {Component} from 'react';
import Base from './base';

class Hero extends Component{
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
        this.downHandler = this.downHandler.bind(this);
        this.upHandler = this.upHandler.bind(this);
        this.moveHandler = this.moveHandler.bind(this);
        let {bg, width, height, x, y} = this.props;
        this.state = {
            isMove: false,
            left: x,
            top: y,
        };
    }
    clickHandler(e) {
        console.log('clickHandler', e);
    }
    downHandler(e) {
        console.log('downHandler', e);
        //e.currentTarget.addEventListener('mousemove', this.movehandler, false);
        this.setState({
            isMove: true
        });
        this.context.begin();
    }
    upHandler(e) {
        console.log('upHandler', e);
        //e.currentTarget.removeEventListener('mousemove', this.movehandler, false);
        this.setState({
            isMove: false
        });
    }
    moveHandler(e) {
        e.preventDefault();
        e.stopPropagation();
        let {isMove} = this.state;
        if (isMove) {
            //console.log('moveHandler', e);
            //console.log(e.clientX, e.pageX);
            let {bg, width, height, x, y} = this.props;
            this.setState({
                left: e.pageX - width / 2,
                top: e.pageY - height / 2,
            });
        }
    }
    render() {
        let {bg, width, height, x, y} = this.props;
        let {left, top} = this.state;
        return (
            <div className="item" onClick={this.clickHandler} onMouseUp={this.upHandler} onMouseDown={this.downHandler} onMouseMove={this.moveHandler.bind(this)} style={{left: left, top: top}}>
            <Base bg={bg} width={width} height={height}/>
            </div>
        );
    }
}

Hero.contextTypes = {
    isBegin: React.PropTypes.boolean,
    begin: React.PropTypes.func,
};

export default Hero;
