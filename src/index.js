import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Hero from './hero';
import Monster from './monster';

const containerWH = 500;
const monsterDatas = [{
    width: 40,
    height: 60
}, {
    width: 100,
    height: 140
}, {
    width: 100,
    height: 80
}, {
    width: 160,
    height: 40
}];

class Stop extends Component{
    constructor() {
        super();
        this.begin = this.begin.bind(this);
        this.over = this.over.bind(this);
        this.crash = this.crash.bind(this);
        this.getStatus = this.getStatus.bind(this);
        this.state = {
            isBegin: false,
        };
    }
    getChildContext() {
        return {
            begin: this.begin,
            over: this.over,
            containerWH: containerWH,
            crash: this.crash,
            getStatus: this.getStatus,
        };
    }
    crash() {
        let {left, top} = this.refs.hero.state;
        let {width, height} = this.refs.hero.props;
        return {
            heroLeft: left,
            heroTop: top,
            heroWidth: width,
            heroHeight: height,
        };
    }
    render() {
        let {isBegin} = this.state;
        let left = containerWH;
        let top = containerWH;
        let column = 2;
        let monsterList = monsterDatas.map((item, i) => {
            let remainder = i % column;
            let x = remainder * left - remainder * item.width;
            let y = ~~(i / column) * top - ~~(i / column) * item.height;
            return (
                <Monster isBegin={isBegin} key={i} bg="#3b4086" width={item.width} height={item.height} x={x} y={y}/>
            );
        });
        let heroWidth = 50;
        let heroData = {
            bg: '#8a3c3c',
            width: heroWidth,
            height: heroWidth,
            x: containerWH / 2 - heroWidth / 2,
            y: containerWH / 2 - heroWidth / 2,
        };
        return (
            <div style={Styles.container}>
                <Hero ref="hero" bg={heroData.bg} width={heroData.width} height={heroData.height} x={heroData.x} y={heroData.y}/>
                {monsterList}
            </div>
        );
    }
    begin() {
        console.log('stop begin');
        this.setState({
            isBegin: true,
        });
    }
    over() {
        this.setState({
            isBegin: false,
        });
    }
    getStatus() {
        return this.state.isBegin;
    }
}

Stop.childContextTypes = {
    begin: React.PropTypes.func,
    over: React.PropTypes.func,
    containerWH: React.PropTypes.number,
    crash: React.PropTypes.func,
    getStatus: React.PropTypes.func,
};

const Styles = {
    container: {
        width: containerWH + 'px',
        height: containerWH + 'px',
        background: '#8f8f92',
    }
};

ReactDOM.render(
    <Stop />,
    document.querySelector('#main')
);

