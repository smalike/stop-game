import React, {Component} from 'react';
import Base from './base';

class Hero extends Component{
    constructor(params) {
        super(params);
    }
    render() {
        return (
            <Base bg="#863b3b" width="50" height="50" x="10" y="10"/>
        );
    }
}

export default Hero;
