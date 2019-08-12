import React from 'react';
import './styles.css';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        };
        this.linkRef = React.createRef();
        this.handleShowMenu = this.handleShowMenu.bind(this);
        this.goTo = this.goTo.bind(this);
    }

    handleShowMenu(event) {
        this.setState({showMenu: !this.state.showMenu});
    }

    goTo(event) {
        let str = event.currentTarget.href;
        this.props.goToArea(str.substring(str.indexOf("#")+1));
        this.handleShowMenu();
    }

    render() {
        return (
            <header>
                <div className="width">
                    <div className="logo"/>
                    <nav className={this.state.showMenu?'':'hide'}>
                        <button onClick={this.handleShowMenu}></button>
                        <ul>
                            <li>
                                <a href="#about" onClick={this.goTo}>O que fazemos</a>
                            </li>
                            <li>
                                <a href="#connectday" onClick={this.goTo}>Connect Day</a>
                            </li>
                            <li>
                                <a href="#ciclodeinovacao" onClick={this.goTo}>Ciclo de Inovação</a>
                            </li>
                            <li>
                                <a href="#perguntas" onClick={this.goTo}>Perguntas frequentes</a>
                            </li>
                            <li>
                                <a href="#faleconosco"  onClick={this.goTo}>Fale Conosco</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    } 
}
export default Header;