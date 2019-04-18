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
                {"image":"Images/Adjudicator_Rick.png",},
                {"image":"Images/Albert_Einstein.png",},
                {"image":"Images/Alien_Rick.png",},
                {"image":"Images/Beth_Smith.png",},
                {"image":"Images/Cult_Leader_Morty.png",},
                {"image":"Images/Jerry_Smith.png",},
                {"image":"Images/Morty_Smith_.png",},
                {"image":"Images/Rick_Sanchez.png",},
                {"image":"Images/Summer_Smith.png",},
            ],

            egg: [
                {"image":"Images/Egg_of_chameleon.png",},
                {"image":"Images/Egg_of_fighting_Fish_Siamese.png",},
                {"image":"Images/Egg_of_Fighting.png",},
                {"image":"Images/Egg_of_Frog_Bull.png",},
                {"image":"Images/Egg_of_Gull_Heiring.png",},
                {"image":"Images/Egg_of_Hellbender copie.png",},
                {"image":"Images/Egg_of_Ostrich copie.png",},
                {"image":"Images/Egg_of_Sturgeon_Atlantic.png",},
                {"image":"Images/Strange_Egg copie.png",},
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
            <div className="container-fluid">
                <div className="row">
                    <div className="Filter offset-5 col-md-4">
                        <button className="button1" onClick={this.handleClickEgg}>Egg</button>
                        <button  className="button2" onClick={this.handleClickCharacter}>Characters</button>
                        <button className="button3" onClick={this.handleClickAll}>All</button>
                    </div>
                </div>
                <ul>
                    {
                        this.state.displayList.map(el => <li><img src={el.image}/></li>)
                    }
                </ul>
            
            </div>
            
        )
    }
}

export default Filter;