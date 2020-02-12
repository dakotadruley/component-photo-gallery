import React, { Component } from 'react';
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    state = { selected: null };

    render() {
        const items = this.props.items;
        const elements = items.filter(item => {
            if (!this.state.selected) return true;
            return item.horns === this.state.selected;  
        })
            .map(item => {
            return (<ImageItem item={item}/>)
        })

        const handleChange = e => {
            this.setState({ selected: e.target.value });
          };
    
        return (
            <>
            <div id='filterSection'>
            <section className='options'>
                <h2>Filter:</h2>
                    <select className='itemFilter' onChange={handleChange}>
                        <option value='' defaultValue>
                            All
                        </option>
                        <option value='1 Horn'>1 Horn</option>
                        <option value='2 Horns'>2 Horns</option>
                        <option value='3 Horns'>3 Horns</option>
                    </select>
            </section>
            </div>
            <ul className='items'>{elements}</ul>
            </>
        )

    }
}