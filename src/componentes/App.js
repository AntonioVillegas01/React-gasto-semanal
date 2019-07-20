import React, { Component } from 'react';
import '../css/App.css';

import Header from './Header'
import Formulario from "./Formulario";
import Listado from "./Listado";
import ControlPresupuesto from "./ControlPresupuesto";

import {validarPresupuesto} from '../helper'

class App extends Component {

  state = {
    presupuesto: '',
    restante: '',
    gastos: {}
  }


  componentDidMount() {
    this.obtenerPresupuesto()


  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt('¿Cuál es el presupuesto?')

    let resultado = validarPresupuesto(presupuesto)
    
    if (resultado) {
      this.setState({
        presupuesto:presupuesto,
        restante: presupuesto
      })
    }else{
      this.obtenerPresupuesto()
    }

  }


  // 1.-agregar gasto al state
  agregarGasto = (gasto) =>{
    // 2.- Tomar una copia del state actual
    const gastos =  {...this.state.gastos}

    // 3.- Agregar gasto al objeto
    gastos[`gasto${Date.now()}`] = gasto

    // restar al presupuesto
    this.restarPresupuesto(gasto.cantidadGasto)



    // 4.- Ponerlo en el state
    this.setState({
      gastos: gastos
    })

  }

  //Restar del presupuesto cuando un gasto se crea
  restarPresupuesto = (cantidad) => {
    //leer el gasto y lo convertimos de string a numero
    let restar = Number(cantidad)

    //tomar una copia del state actual
    let restante = this.state.restante


    //lo restamos
    restante -= restar

    console.log(restante)


    //agregamos nuevo state
    this.setState({
      restante:restante
    })
  }


  render() {
    return (
        <div className="App container">
          <Header
            titulo='Gasto Semanal'
          />
          <div className="contenido-principal">
            <div className="row">
              <div className="one-half column">
                <Formulario
                    //nombrar al prop igual que el metodo buenas practicas
                  agregarGasto={this.agregarGasto}
                />
              </div>
              <div className="one-half column">
                <Listado
                    gastos={this.state.gastos}
                />
                <ControlPresupuesto
                    presupuesto={this.state.presupuesto}
                    restante={this.state.restante}
                />
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
