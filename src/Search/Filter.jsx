import React, { Component } from 'react';
import Cardseggs from './Cardseggs';
import Cardscharac from './Cardscharac';
import './Filter.css'


class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            displayList: [],
            character: [
                {"name":"Supergirl (Kara Zor-El)","species":"Kryptonian","gender":"Female","origin":"Krypton","image":"pictures/1.png","skills":["magnetic control:3","pass through walls:5","resurrection:9"],"id":"5cac51240d488f0da6151c41","meta":{"revision":0,"created":1555590498964,"version":0},"$loki":133}
            ],

            egg: [
                {"id":"5cac51240d488f0da6151bcd","name":"Egg of Tuna","color":"#7e3703","caliber":"L","farming":3,"country":"KP","rarity":"junk","image":"https://cdn.shopify.com/s/files/1/0993/5182/products/CXBO_Chocolate_Disco_Egg_large.png?v=1519913456","power":"decrease physical proctection:9","meta":{"revision":0,"created":1554982481291,"version":0},"$loki":1,"validity":"2019-04-18T17:12:32.416Z"},
                {"id":"5cac51240d488f0da6151bce","name":"Egg of Flounder Winter","color":"#0a567f","caliber":"M","farming":1,"country":"SN","rarity":"legendary","image":"https://shop.whitehousehistory.org/media/catalog/product/t/r/trump_egg_gold_shop.png","power":"decrease physical proctection:5","meta":{"revision":0,"created":1554982481291,"version":0},"$loki":2,"validity":"2019-04-18T17:21:32.416Z"},
                {"id":"5cac51240d488f0da6151bcf","name":"Egg of Stickleback three spine","color":"#46313d","caliber":"M","farming":3,"country":"NL","rarity":"fine","image":"http://pixelartmaker.com/art/2480187d8bd9102.png","power":"decrease physical power:3","meta":{"revision":0,"created":1554982481291,"version":0},"$loki":3,"validity":"2019-04-18T15:44:32.416Z"},
                {"id":"5cac51240d488f0da6151bd0","name":"Egg of Flounder Winter","color":"#7d2c7f","caliber":"M","farming":3,"country":"MF","rarity":"junk","image":"https://www.buttermilk.co.uk/wp-content/uploads/2018/02/css-egg-web.png","power":"decrease magical proctection:2","meta":{"revision":0,"created":1554982481291,"version":0},"$loki":4,"validity":"2019-04-18T18:31:32.416Z"},
                {"id":"5cac51240d488f0da6151bd1","name":"Egg of Cobra Indian","color":"#20253c","caliber":"M","farming":0,"country":"HR","rarity":"exotic","image":"http://pixelartmaker.com/art/2480187d8bd9102.png","power":"decrease physical power:8","meta":{"revision":0,"created":1554982481291,"version":0},"$loki":5,"validity":"2019-04-18T18:38:32.416Z"},
                {"id":"5cac51240d488f0da6151bd2","name":"Egg of Fighting Fish Siamese","color":"#0a667d","caliber":"XL","farming":3,"country":"NP","rarity":"basic","image":"https://vignette.wikia.nocookie.net/bubble-gum-simulator/images/7/72/Lucky_Egg.png/revision/latest?cb=20190315192058","power":"decrease physical proctection:4","meta":{"revision":0,"created":1554982481291,"version":0},"$loki":6,"validity":"2019-04-18T18:25:32.416Z"},
            ]
        }
    }

    handleClickCharacter = () => {
        this.setState({
            displayList: [...this.state.character]
        })
    }

    handleClickEgg = () => {
        this.setState({
            displayList: [...this.state.egg]
        })
    }

    handleClickAll = event => {
        this.setState({
            displayList: [...this.state.egg, ...this.state.character]
        })
    }

    render () {
        return (
            <div className="Filter">
                <button className="button" onClick={this.handleClickEgg}>Egg</button>
                <button  className="button" onClick={this.handleClickCharacter}>Characters</button>
                <button className="button" onClick={this.handleClickAll}>All</button>

                <ul>
                    {
                        this.state.displayList.map(el => <li>{el.color} <img src={el.image}/></li>)
                    }
                </ul>
            </div>
        )
    }
}

export default Filter;