import React, { Component } from 'react';
import './Text.css';
class Text extends Component {
    render() {
        return (
            <div className='Text'>
                <h1>All your heroes <span className="color-orange">Rick and Morty</span> are now united through<span className="color-green"> playing cards games </span>, collect them all and fight each other in <span className="color-red">crazy duels !</span></h1> 
            </div>
        )
    }
}

export default Text 