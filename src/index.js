import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Hero from './hero';
import Monster from './monster';

const containerWH = 500;

class Stop extends Component{
    render() {
        let monsterDatas = [{
            width: 80,
            height: 80
        }, {
            width: 80,
            height: 160
        }, {
            width: 100,
            height: 100
        }, {
            width: 100,
            height: 30
        }];
        let left = containerWH;
        let top = containerWH;
        let column = 2;
        let monsterList = monsterDatas.map((item, i) => {
            let remainder = i % column;
            let x = remainder * left;
            let y = ~~(i / column) * top;
            return (
                <Monster key={i} bg="#3b4086" width={item.width} height={item.height} x={x} y={y}/>
            );
        });
        let heroData = {
            bg: '#8a3c3c',
            width: 50,
            height: 50,
            x: containerWH / 2,
            y: containerWH / 2,
        };
        return (
            <div style={Styles.container}>
                <Hero bg={heroData.bg} width={heroData.width} height={heroData.height} x={heroData.x} y={heroData.y}/>
                {monsterList}
            </div>
        );
    }
}

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

