import React, { Component } from 'react';
import './styles.css';

class Disciplinas extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.passRefUpward(this.refs);
    }

    render() {
        return (
            <section className="disciplinas" ref="disciplinas">
                <h2>Disciplinas</h2>
            </section>
        );
    }
}

export default Disciplinas;