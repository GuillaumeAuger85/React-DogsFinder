import React, { Component } from 'react';
import Navbar from './Navbar';
import whiskey from './imgs/whiskey.jpg';
import Routes from './Routes';
import hazel from './imgs/hazel.jpg';
import tubby from './imgs/tubby.jpg';
import nerdy from './imgs/nerdy.jpg';
import './App.css';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      },
      {
        name: "Nerdy",
        age: 10,
        src: nerdy,
        facts: [
          "Nerdy is not the brightest dog",
          "Nerdy does not see very well.",
          "Nerdy loves nerds ."
        ]
      }
    ]
  }
  render() {

    return (
      <div>
        <Navbar dogs={this.props.dogs} />
        <div className='container'>
          <Routes dogs={this.props.dogs} />
        </div>
      </div>
    )
  }
}

export default App;
