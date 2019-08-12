import React, { Component } from 'react';
import './styles.css';


class Banner extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.passRefUpward(this.refs);
    }

    render() {
        return (
            <section className="banner" ref="banner">
                <h2>Banner</h2>
            </section>
        );
    }
}

export default Banner;