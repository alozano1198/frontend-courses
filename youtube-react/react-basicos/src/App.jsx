/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import ComunicacionComponentes from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import HooksPersonalizados from "./components/HooksPersonalizados";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";
import Estilos from "./components/Estilos";
import ComponentesEstilizados from "./components/ComponentesEstilizados";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  /* let nombre = "Jon";
  let auth = true;
  let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"]; */

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        {/* <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" />
        <h1>{nombre}</h1>
        <p>
          {auth ? "El usuario esta logueado" : "El usuario No esta logueado"}
        </p>
        <p>{2 + 1}</p>
        <ul>
          {estaciones.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul> */}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <section>
        {/* <Componente></Componente> */}
        <Componente msg="Hola soy un Componente Funcional Expresado desde una prop" />
        <hr />
        <Propiedades
          cadena="Esto es una cadena de texto"
          numero={19}
          booleano={true}
          arreglo={[1, 2, 3]}
          objeto={{ nombre: "Jon", correo: "jonmircha@gmail.com" }}
          funcion={(num) => num * num}
          elementoReact={<i>Esto es un elemento de React</i>}
          componenteReact={
            <Componente msg="Soy un componente pasado como Prop" />
          }
        />
        <hr />
        <Estado />
        <hr />
        <RenderizadoCondicional />
        <hr />
        <RenderizadoElementos />
        <hr />
        <EventosES6 />
        <hr />
        <EventosES7 />
        <hr />
        <MasSobreEventos />
        <hr />
        <ComunicacionComponentes />
        <hr />
        <CicloVida />
        <hr />
        <AjaxApis />
        <hr />
        {/* <ContadorHooks /> */}
        <ContadorHooks titulo="Seguidores" />
        <hr />
        <ScrollHooks />
        <hr />
        <RelojHooks />
        <hr />
        <AjaxHooks />
        <hr />
        <HooksPersonalizados />
        <hr />
        <Referencias />
        <hr />
        <Formularios />
        <hr />
        <Estilos />
        <hr />
        <ComponentesEstilizados />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
    </>
  );
}

export default App;
