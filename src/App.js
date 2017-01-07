import React, { Component } from 'react';
import logo from './logo.svg';

// Styles
import './styles/style.css';
import './App.css';

// Components
import MediaObject from './components/MediaObject';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="container">
          <div className="row">
            <div className="App-header col-sm-12">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>Heading One</h1>
              <p>Paragraphs are like this</p>
              <h2>Heading Two</h2>
              <p>Paragraphs are like this</p>
              <h3>Heading One</h3>
              <p>Paragraphs are like this</p>
              <h4>Heading One</h4>
              <p>Paragraphs are like this</p>
              <h5>Heading One</h5>
              <p>Paragraphs are like this</p>
              <MediaObject 
                align="top"
                imgSrc="//placehold.it/64x64"
                imgAlt="placeholder"
               
                text="And this is some text that goes into the paragraph.And this is some text that goes into the paragraph.And this is some text that goes into the paragraph.And this is some text that goes into the paragraph.And this is some text that goes into the paragraph.And this is some text that goes into the paragraph.And this is some text that goes into the paragraph."
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
