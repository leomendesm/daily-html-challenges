import React, { Component } from 'react';
import './App.css';
import Challenges from './containers/Challenges'
import Home from './containers/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter,  Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path={'/daily-html-challenges'} component={Home} />
        <Route path={"/daily-html-challenges/challenge/:dif"} component={Challenges} />
        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App
