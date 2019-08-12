import React, { Component } from 'react';
import './styles.css';


class Perguntas extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.passRefUpward(this.refs);
    }

    render() {
        return (
            <section className="perguntas" ref="perguntas">
                <h2>Perguntas frequentes</h2> 
            </section>
        );
    }
}
export default Perguntas;