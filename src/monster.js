import React, {Component} from 'react';
import Base from './base';

class Monster extends Component{
    constructor(params) {
        super(params);
    }
    render() {
        let {bg, width, height, x, y} = this.props;
        return (
            <Base bg={bg} width={width} height={height} x={x} y={y}/>
        );
    }
}

export default Monster;
