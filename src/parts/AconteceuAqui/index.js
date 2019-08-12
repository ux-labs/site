import React, { Component } from 'react';
import './styles.css';

class AconteceuAqui extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.passRefUpward(this.refs);
    }

    render() {
        return (
            <section className="aconteceuaqui" ref="aconteceuaqui">
                <h2>Aconteceu Aqui</h2>
            </section>
        );
    }
}

export default AconteceuAqui;