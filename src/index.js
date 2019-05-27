import React, { Component } from "react";
import { render } from "react-dom";

class Button extends Component {
  render() {
    return (
      <a href="" onClick={this.props.onClick}>
        {this.props.children}
      </a>
    );
  }
}

class App extends Component {
  handleClick() {
    alert("Botão clicado!");
  }

  render() {
    return (
      <>
        <h1>Hello Rocketseat!</h1>
        <Button onClick={this.handleClick}>Enviar</Button>
      </>
    );
  }
}

render(<App />, document.getElementById("app"));
