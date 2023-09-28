import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
        nome: '',
        sobrenome: '',
        participacao: '', // Corrigido para "participacao"
      };
    }
  
    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({
        [name]: value,
      });
    };
  
    handleSubmit = (e) => {
      e.preventDefault(); // Evitar o comportamento padrão de recarregar a página
  
      // Aqui você pode adicionar a lógica para enviar os dados para o back-end
      // Por enquanto, vamos apenas mostrar os dados no console
      console.log('Nome:', this.state.nome);
      console.log('Sobrenome:', this.state.sobrenome);
      console.log('Participacao:', this.state.participacao);
  
      // Limpar os campos após o envio (opcional)
      this.setState({
        nome: '',
        sobrenome: '',
        participacao: '',
      });
    };
  
    render() {
      return (
        <div>
          <h2>Formulário</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={this.state.nome}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="sobrenome">Sobrenome:</label>
              <input
                type="text"
                id="sobrenome"
                name="sobrenome"
                value={this.state.sobrenome}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="participacao">Participacao:</label>
              <input
                type="text"
                id="participacao"
                name="participacao"
                value={this.state.participacao}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      );
    }
  }
  