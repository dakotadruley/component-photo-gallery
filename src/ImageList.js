import React, { Component } from 'react';
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    render() {
        const items = this.props.items;

        const elements = items.map(item => {
            return (<ImageItem item={item}/>)
        })
        return (
            <ul className='items'>{elements}</ul>
        )

    }
}