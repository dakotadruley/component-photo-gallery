import React, { Component } from 'react';

export default class ImageItem extends Component {
    render() {
        const items = this.props.item;

        return (
            <>
            <li className='item'>
                <div className='itemContainer'>
                    <h2>{items.title}</h2>
                    <p className='itemDescription'>{items.description}</p>
                    <p className='horns'>Has {items.horns} horn(s)</p>
                </div>
                <div className='imageContainer'>
                    <img className='imageSize'src={items.url} alt={items.title}/>
                </div>
            </li>
            <br></br>
            </>
        )

    }
}