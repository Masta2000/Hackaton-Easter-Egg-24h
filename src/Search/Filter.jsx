import React, { Component } from 'react';
import Cardseggs from './Cardseggs';
import Cardscharac from './Cardscharac';
import './Filter.css'


 class Filter extends Component {
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

    handleClickAll = () => {
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