import React, { Component } from 'react';
import './styles.css';

class ConnectDay extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.passRefUpward(this.refs);
    }

    render() {
        return (
            <section className="connectday" ref="connectday">
                <h2>Connect Day</h2>
            </section>
        );
    }
}

export default ConnectDay;