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
        let monsterList = monsterDatas.map((item, i) => {
            let [x, y] = [10, 10];
            return (
                <Monster bg="#3b4086" width="{item.width}" height="{item.height}" x="{x}" y="{y}"/>
            );
        });
        return (
            <div style={Styles.container}>
                <Hero />
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

