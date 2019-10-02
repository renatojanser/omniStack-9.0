import React, { Component } from 'react';
import './App.css';

import logo from './assets/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="container">
        <img src={logo} alt="AirCnc"/>

        <div className="content">
          <p>
            Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
          </p>

          <form>
            <label htmlFor="email">E-MAIL *</label>
            <input type="email" id="email" placeholder="Seu melhor e-mail" />
            <button className="btn" type="submit">Entrar</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
