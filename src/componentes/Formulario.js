import React, {Component} from 'react';

class Formulario extends Component {




    //Crear refs para leer datos del formulario
    nombreGastoRef = React.createRef();
    cantidadGastoRef = React.createRef();

    crearGasto = (e) => {
        // 1.-prevenir Default
        e.preventDefault();

        // 2.-Crear el objeto  con los Datos
        const gasto = {
            nombreGasto: this.nombreGastoRef.current.value,
            cantidadGasto: this.cantidadGastoRef.current.value
        }
        //2.1 Enviarlo a consola para ver si se esta mandando bien el objeto
        //console.log(gasto)


        // 3.-Agregarlo y enviarlo por props
        this.props.agregarGasto(gasto)


        // 4.-Resetear el formulario
        e.currentTarget.reset()

    }

    render() {
        return (
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input ref={this.nombreGastoRef} className="u-full-width" type="text" placeholder="Ej. Transporte"/>
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input ref={this.cantidadGastoRef} className="u-full-width" type="text" placeholder="Ej. 300"/>
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar"/>
            </form>
        )
    }

}

export default Formulario
