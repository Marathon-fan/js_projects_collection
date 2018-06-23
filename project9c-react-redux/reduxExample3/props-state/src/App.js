import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { resolveComponents } from 'uri-js';
import PropTypes from 'prop-types'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>prop number is : {this.props.propNumber} </h3>
        <h3>prop string is : {this.props.propString} </h3>
        <h3>prop object obj1 is : {this.props.propObject.obj1} </h3>

        <Parent />
      </div>
    );
  }
}

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: ['s-BMW', 's-MERC', 's-City', 's-Audi']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(
      {cars: this.state.cars.reverse()}
    );
  }


  render() {
    return(
      <div>
        <h2 onClick={this.handleClick}>Just some info</h2>
        <Cars msg="cars are cool" model="34765" coolCars={this.state.cars} />
      </div>
    )
  }
}

Parent.defaultProps = {
  cars: ['BMW', 'MERC', 'City', 'Audi']
}

App.propTypes = {
  propObject: PropTypes.object,
  propString: PropTypes.string,
  propNumber: PropTypes.number
}

App.defaultProps = {
  propNumber: 3,
  propString: "This is prop string",
  propObject: {
    obj1: "I am obj 1",
    obj2: "I am obj 2",
    obj3: "I am obj 3"
  }
}

class Cars extends Component {
  render() {
    console.log(this.props)
    return(
      <div>
        <h2>I am from cars component</h2>
        <p>{this.props.msg}</p>
        <p>{this.props.model}</p>
        <div>{this.props.coolCars.map((item, i) => {   // i for item 
          return <p key={i}>{item}</p>;
        })}</div>
      </div>
    )
  }
}
export default App;
