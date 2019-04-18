import React, { Component } from 'react';
import './Filter.css'



class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            displayList: [],
            character: [
                {"name":"Rick Sanchez","species":"Human","gender":"Male","origin":"Earth","image":"https://images.innoveduc.fr/easter_hackathon/1.jpeg","skills":["mental control:6","pass through walls:5","Xray vision:9"],"id":"5cac51240d488f0da6151c31","meta":{"revision":0,"created":1555590498964,"version":0},"$loki":117},
                {"name":"Rogger Rabbit","species":"Rabbit toon","gender":"Male","origin":"Toons City","image":"https://images.innoveduc.fr/easter_hackathon/4df16f2a2102cb1e39d2f2531e3b7881.jpg","skills":["hight strength:3","magnetic control:5","fly:8"],"id":"5cac51240d488f0da6151c32","meta":{"revision":0,"created":1555590498964,"version":0},"$loki":118},
                {"name":"Morty Smith","species":"Human","gender":"Male","origin":"Earth","image":"https://images.innoveduc.fr/easter_hackathon/2.jpeg","skills":["fly:4","dexterity:1","Xray vision:4"],"id":"5cac51240d488f0da6151c33","meta":{"revision":0,"created":1555590498964,"version":0},"$loki":119},
                {"name":"Darth Vader","species":"Human/Cyborg","gender":"Male","origin":"Tatooine","image":"https://images.innoveduc.fr/easter_hackathon/6438864-dc94c42f-acac-44ff-8804-85a37f06262d.jpeg","skills":["Xray vision:1","fly:9","mental control:9"],"id":"5cac51240d488f0da6151c34","meta":{"revision":0,"created":1555590498964,"version":0},"$loki":120},
                {"name":"Summer Smith","species":"Human","gender":"Female","origin":"Earth","image":"https://images.innoveduc.fr/easter_hackathon/3.jpeg","skills":["hight strength:6","Xray vision:2","hight strength:6"],"id":"5cac51240d488f0da6151c35","meta":{"revision":0,"created":1555590498964,"version":0},"$loki":121},
                {"name":"Ellen Ripley","species":"Human","gender":"Female","origin":"Earth","image":"https://images.innoveduc.fr/easter_hackathon/385922-3756-ellen-ripley.jpg","skills":["hight speed:3","hight speed:6","resurrection:9"],"id":"5cac51240d488f0da6151c36","meta":{"revision":0,"created":1555590498964,"version":0},"$loki":122},
                {"name":"Abradolf Lincler","species":"Human","gender":"Male","origin":"Earth","image":"https://images.innoveduc.fr/easter_hackathon/7.jpeg","skills":["pass through walls:6","magnetic control:7","mental control:4"],"id":"5cac51240d488f0da6151c3b","meta":{"revision":0,"created":1555590498964,"version":0},"$loki":127},
                {"name":"Adjudicator Rick","species":"Human","gender":"Male","origin":"Unknow","image":"https://images.innoveduc.fr/easter_hackathon/8.jpeg","skills":["pass through walls:4","fly:3","Xray vision:6"],"id":"5cac51240d488f0da6151c3c","meta":{"revision":0,"created":1555590498964,"version":0},"$loki":128},
                {"name":"Hellboy","species":"Demon","gender":"Male","origin":"Hell","image":"https://images.innoveduc.fr/easter_hackathon/5612601-hbyws17-fc-fnlc.jpg","skills":["fly:3","hight strength:6","magnetic control:5"],"id":"5cac51240d488f0da6151c3d","meta":{"revision":0,"created":1555590498964,"version":0},"$loki":129},
                {"name":"Agency Director","species":"Human","gender":"Male","origin":"Earth","image":"https://images.innoveduc.fr/easter_hackathon/9.jpeg","skills":["magnetic control:4","invisibility:4","mental control:5"],"id":"5cac51240d488f0da6151c3e","meta":{"revision":0,"created":1555590498964,"version":0},"$loki":130},
                {"name":"Alan Rails","species":"Human","gender":"Male","origin":"Unknow","image":"https://images.innoveduc.fr/easter_hackathon/10.jpeg","skills":["fly:7","dexterity:4","dexterity:8"],"id":"5cac51240d488f0da6151c3f","meta":{"revision":0,"created":1555590498964,"version":0},"$loki":131},
                {"name":"Albert Einstein","species":"Human","gender":"Male","origin":"Earth","image":"https://images.innoveduc.fr/easter_hackathon/11.jpeg","skills":["mental control:6","dexterity:4","hight speed:5"],"id":"5cac51240d488f0da6151c40","meta":{"revision":0,"created":1555590498964,"version":0},"$loki":132},
                {"name":"Supergirl (Kara Zor-El)","species":"Kryptonian","gender":"Female","origin":"Krypton","image":"https://images.innoveduc.fr/easter_hackathon/250px-Supergirl_Kara_Zor-El_-DC_Rebirth_version-.jpg","skills":["magnetic control:3","pass through walls:5","resurrection:9"],"id":"5cac51240d488f0da6151c41","meta":{"revision":0,"created":1555590498964,"version":0},"$loki":133},
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

    handleClickEgg = event => {
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