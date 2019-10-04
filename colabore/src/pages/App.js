import React from 'react';
import '../App.css';
import MyFilteringComponent from './search'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Pessosas =[ "Jose", "maria",];

function Home() {
  return (<div>
    <MyFilteringComponent content = {Pessosas} />
  </div>) ;
}

function About() {
  return <h2>About</h2>;
}
class ProjetoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
      nome: "",
      descricao: "",
      hab1: "",
      hab2: "",
      hab3: "",
      telefone: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.state.form[name] = value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { form } = this.state;
    debugger;
    if (form) {
      const projetos = JSON.parse(localStorage.getItem("projetos")) || [];
      projetos.push(form);
      localStorage.setItem('projetos', JSON.stringify(projetos));
    }
  }

  render() {  
    return (
      <form onSubmit={this.handleSubmit}>
        <label>criado:</label>
        <input
          type="text"
          name="nome"
          value={this.state.nome}
          onChange={this.handleInputChange}
        />
        <label>telefone:</label>
        <input
          type="text"
          name="telefone"
          value={this.state.telefone}
          onChange={this.handleInputChange}
        />
        <label>Descricao:</label>
        <textarea
          name="descricao"
          value={this.state.descricao}
          onChange={this.handleInputChange}
        ></textarea>
        <input
          name="hab1"
          type="text"
          value={this.state.hab1}
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          name="hab2"
          value={this.state.hab2}
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          name="hab3"
          value={this.state.hab3}
          onChange={this.handleInputChange}
        />
        <button>salvar</button>
      </form>
    );
  }
}
function Projetos() {
  return (
    <div>
      <h2>Cadastro de projetos</h2>
      <ProjetoForm></ProjetoForm>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div>
        <nav class="topnav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projetos">Projetos</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projetos">
            <Projetos />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
