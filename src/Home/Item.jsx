import React, { Component } from 'react';

class Item extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            level: this.props.level
        }
    }
    
    render() {
        const className = 'item level' + this.props.level
        const item = this.props.item;
        const url = item ? `url(${item.url})`: '';
        return(
            <div className={className} style={{backgroundImage: url}} >
                {this.props.id}
            </div>
        )
    }
}

export default Item;