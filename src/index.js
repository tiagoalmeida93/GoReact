import React, { Component } from "react";
import PropTypes from "prop-types";
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

Button.defaultProps = {
  children: "Salvar"
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

class App extends Component {
  handleClick() {
    alert("Botão clicado!");
  }

  render() {
    return (
      <>
        <h1>Hello Rocketseat!</h1>
        <Button
          onClick={() => {
            alert("Button 1");
          }}
        />
        <Button onClick={this.handleClick}>Enviar</Button>
      </>
    );
  }
}

render(<App />, document.getElementById("app"));
