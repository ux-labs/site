import React, { Component } from 'react';
import './styles.css';

class FaleConosco extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.passRefUpward(this.refs);
    }

    render() {
        return (
            <section className="faleconosco" ref="faleconosco">
                <h2>Fale Conosco</h2>
            </section>
        );
    }
}

export default FaleConosco;