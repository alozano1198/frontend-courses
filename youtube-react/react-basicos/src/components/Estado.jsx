/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from "react";

// eslint-disable-next-line react-refresh/only-export-components
function EstadoAHijo(props) {
  return (
    <div>
      <h3>{props.contadorHijo}</h3>
    </div>
  );
}

export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    /* setInterval(() => {
      //this.state.contador += 1;
      this.setState({
        contador: this.state.contador + 1,
      });
    }, 1000); */
  }

  render() {
    return (
      <div>
        <h2>El State</h2>
        <p>{this.state.contador}</p>
        <EstadoAHijo contadorHijo={this.state.contador} />
      </div>
    );
  }
}
