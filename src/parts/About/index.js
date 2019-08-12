import React, { Component } from 'react';
import './styles.css';
import bgvideo from '../../videos/bg-uxlabs.mp4';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullText: false,
            showMenu: false
        }
        this.toggleText = this.toggleText.bind(this);
        this.about = React.createRef();
    }

    toggleText(event) {
        this.setState({fullText: !this.state.fullText});
        if (this.state.fullText) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return (
            <section className={`about` + (this.state.fullText?` show`:``)} ref={this.about}>
                <div className="bg">
                    <video src={bgvideo} autoPlay loop muted></video>
                    <div className="mask"></div>
                </div>
                <div className="width">
                    <div className="text">
                        <p>
                            O UX Labs é um espaço de experimentação, novas tecnologias, transformação
                            e envolvimento das pessoas nas disciplinas relacionadas à inovação no Grupo Águia
                            Branca – matemarketing, arquitetura digital, user experience e data Science são
                            algumas delas.
                        </p>
                        <p>
                            UX, do inglês user experience e que significa experiência do usuário, é o
                            conjunto de elementos e fatores relativos à interação do usuário com um
                            determinado produto, sistema ou serviço cujo resultado gera uma percepção –
                            positiva ou negativa. E é justamente esse o objetivo do novo laboratório.
                        </p>
                        <p>
                            “Esse espaço está à disposição do time para ajudar a organizar ideias e
                            planejamentos, fazer revisão de processos de forma compartilhada e co-criativa. Os
                            gestores podem contar com o laboratório e com o apoio da equipe, mas nosso
                            principal desafio é que fazer com o que o UX se transforme em rotina dentro da
                            empresa”, destacou o Gerente de Inteligência de Negócios Digitais, Jadson Picoretti
                            Lovati.
                        </p>
                        <p>
                            “Esta é a casa da inovação”. ´´E desta forma que o Vice-Presidente de
                            Inovação e Finanças do Grupo, Decio Luiz Chieppe, define o espaço. Ele ressaltou
                            que a empresa está construindo situações, oferecendo conhecimento e simbologias
                            específicas que propiciem a cultura da inovação, mas lembrou que para acontecer,
                            de fato, o movimento precisa do envolvimento de cada um.
                        </p>
                        <p>
                            “Estamos motivando as pessoas a pensarem fora da caixa, criando um
                            ambiente favorável e estimulante, tudo voltado para a obtenção de dados e
                            informações. Mas não adianta ter dados se não soubermos o que fazer com eles.
                            Nosso propósito é buscar novas funções para serem agregadas ao nosso negócio”,
                            argumentou ele.
                        </p>
                        <p>
                            Presidente da Águia Branca, Renan Chieppe acredita que o UX Labs é a prova
                            do desprendimento da empresa em criar um espaço diferenciado voltado à cultura
                            da inovação. &quot;Trata-se de uma iniciativa concreta, dentro do conceito de tratar
                            tecnologia como uma camada que viabiliza novos negócios”.
                        </p>
                        <button onClick={this.toggleText}>
                            { this.state.fullText?`Mostrar menos`:`Leia mais` }
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;