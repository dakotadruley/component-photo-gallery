import React, { Component } from 'react';

export default class ImageItem extends Component {
    render() {
        const item = this.props.item;

        return (
            <>
            <li className='item'>
                <div className='itemContainer'>
                    <h2>{item.title}</h2>
                    <p className='itemDescription'>{item.description}</p>
                    <p className='horns'>Has {item.horns} horn(s)</p>
                </div>
                <div className='imageContainer'>
                    <img className='imageSize'src={item.url} alt={item.title}/>
                </div>
            </li>
            <br></br>
            </>
        )

    }
}