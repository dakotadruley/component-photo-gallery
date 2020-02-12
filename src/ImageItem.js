import React, { Component } from 'react';

export default class ImageItem extends Component {
    render() {
        const item = this.props.item;

        return (
            <li className='item'>
                <div className='itemContainer'>
                    <h2>{item.title}</h2>
                    <p className='itemDescription'>{item.description}</p>
                </div>
                <div className='imageContainer'>
                    <img src={item.url} alt={item.title}/>
                </div>
                <p className='horns'>{item.horns}</p>
            </li>
        )

    }
}