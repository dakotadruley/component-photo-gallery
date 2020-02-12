import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';
import ImageItem from './ImageItem.js';
import images from './data/data.js';

export default class App extends Component {
  state = { selected: null };

  render() {
    
    return (
      <>
      <Header />
        <ImageList items={images}/>
      </>
    )
  }

}

