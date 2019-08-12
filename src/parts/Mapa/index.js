import React, { Component } from 'react';
import './styles.css';


class Mapa extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.passRefUpward(this.refs);
    }

    render() {
        return (
            <section className="mapa" ref="mapa">
                <h2>Mapa</h2>
            </section>
        );
    }
}

export default Mapa;