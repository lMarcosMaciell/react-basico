import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Comentario from './components/Comentario.js';

class App extends Component {

  state = {
    comentarios: [
      {
        nome: 'João',
        email: 'joão@mail.com',
        data: new Date(2024, 4, 20),
        mensagem: 'Olá, tudo bem ?'
      },
      {
        nome: 'Pedro',
        email: 'pedro@mail.com',
        data: new Date(2024, 4, 19),
        mensagem: 'Olá, tudo bem sim...'
      }
    ]
  }

  adicionarComentario = () => {
    console.log("Adicionando comentário");

    const novoComentario = {
      nome: 'Marcos',
      email: 'marcos@mail.com',
      data: new Date(),
      mensagem: 'Olá pessoal !'
    }

    let lista = this.state.comentarios;
    lista.push(novoComentario);


    this.setState({comentarios: [...this.state.comentarios, novoComentario]})

  }

  render() {
    return (
      <div className="App">
        <h1>Meu Projeto</h1>

        {this.state.comentarios.map((comentario, indice) => (        

        <Comentario 
        key={indice}
        nome={comentario.nome}
        email={comentario.email}
        data={comentario.data}>
          {comentario.mensagem}
          </Comentario>
  ))}

      <button onClick={this.adicionarComentario}>Adicionar um Comentário</button>
      </div>
    );
  }

}

export default App;
