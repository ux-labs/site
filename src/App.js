import React, { Component } from 'react';
import './App.css';
import Header from './parts/Header';
import About from './parts/About';
import Disciplinas from './parts/Disciplinas';
import Banner from './parts/Banner';
import ConnectDay from './parts/ConnectDay';
import AconteceuAqui from './parts/AconteceuAqui';
import CicloDeInovacao from './parts/CicloDeInovacao';
import Perguntas from './parts/Perguntas';
import FaleConosco from './parts/FaleConosco';
import Mapa from './parts/Mapa';
import Assinatura from './parts/Assinatura';

class App extends Component {

  constructor(props) {
    super(props);
    this.getRefsFromChild = this.getRefsFromChild.bind(this);
    this.goToRef = this.goToRef.bind(this);
    this.state = {
      myRequestedRefs: []
    };
  }

  getRefsFromChild(childRefs) {
    this.setState({
      myRequestedRefs: this.state.myRequestedRefs.push(childRefs)
    });
    console.log(this.state.myRequestedRefs);
  }

  goToRef(area) {
    let el = document.querySelector("."+area);
    //window.scrollTo(0, el.offsetTop);
    el.scrollIntoView({behavior: 'smooth'})
  }

  render() {
    return (
      <div className="App">
        <Header goToArea={this.goToRef} />
        <About passRefUpward={this.getRefsFromChild} />
        <Disciplinas passRefUpward={this.getRefsFromChild} />
        <Banner passRefUpward={this.getRefsFromChild} />
        <ConnectDay passRefUpward={this.getRefsFromChild} />
        <AconteceuAqui passRefUpward={this.getRefsFromChild} />
        <CicloDeInovacao passRefUpward={this.getRefsFromChild} />
        <Perguntas passRefUpward={this.getRefsFromChild} />
        <FaleConosco passRefUpward={this.getRefsFromChild} />
        <Mapa passRefUpward={this.getRefsFromChild} />
        <Assinatura passRefUpward={this.getRefsFromChild} />
      </div>
    )
  } 
}

export default App; 