import React, { Component } from 'react';
import './styles.css';

class Assinatura extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.passRefUpward(this.refs);
    }

    render() {
        return (
            <section className="assinatura" ref="assinatura">
                <h2>Assinatura</h2>
            </section>
        );
    }
}

export default Assinatura;