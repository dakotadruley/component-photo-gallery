import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';
import ImageItem from './ImageItem.js';
import images from './data/data.js';

export default class App extends Component {
  state = { selected: null };

  render() {
    const listItems = images
      .filter(item => {
        if (!this.state.selected) return true;

        return item.horns === this.state.selected;
      })
      .map(newItem => <ImageItem item={newItem} />);
    
      const handleChange = e => {
        this.setState({ selected: e.target.value });
      };

    return (
      <>
      <Header />
      <main>
        <ImageList />
        <section className='options'>
          <select className='itemFilter' onChange={handleChange}>
            <option value='' defaultValue>
              All
            </option>
          </select>

        </section>
      </main>
      </>
    )
  }

}

