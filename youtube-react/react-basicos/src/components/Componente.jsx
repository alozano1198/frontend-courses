// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";

// eslint-disable-next-line react/prop-types
const Componente = (props) => <h2>{props.msg}</h2>;

/* function Componente(props) {
  // eslint-disable-next-line react/prop-types
  return <h2>{props.msg}</h2>;
} */

/* class Componente extends Component {
  render() {
    return <h2>Hola soy un Componente</h2>;
    // eslint-disable-next-line react/prop-types
    return <h2>{this.props.msg}</h2>;
  }
} */

export default Componente;
