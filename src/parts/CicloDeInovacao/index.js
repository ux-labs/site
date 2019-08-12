import React, { Component } from 'react';
import './styles.css';

class CicloDeInovacao extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.passRefUpward(this.refs);
    }

    render() {
        return (
            <section className="ciclodeinovacao" ref="ciclodeinovacao">
                <h2>Ciclo de Inovação</h2>
            </section>
        );
    }
}

export default CicloDeInovacao;