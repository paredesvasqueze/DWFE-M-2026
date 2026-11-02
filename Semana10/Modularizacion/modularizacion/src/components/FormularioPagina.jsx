import { useState,useEffect } from "react";
function FormularioPagina({ onSeleccionar,onSeleccionar2 }) {
    const [mensaje,setMensaje] = useState('');   
    const [valores,setValores] = useState(
        {
           nombre:"",
           correo:""
        }
    );   

function cambiardatos(e) {
    const { name, value } = e.target;    
    setValores({
      ...valores,
      [name]: value
    });
  }

    function enviardatos(e)
    {
        e.preventDefault();
        setMensaje("Cargando");
        setTimeout(
            () => {
                setMensaje("Datos Cargados Correctamente");        
            }, 2000
        )
        setTimeout(
            () => {
                setMensaje("");        
            }, 3000
        )

    }

    return (
        <>
        <h1>{mensaje}</h1>

        <form onSubmit={enviardatos} >
        <label htmlFor="nombre" >Nombre</label>
        <input
        id="nombre"
        name="nombre"
        type="text"
        value= {valores.nombre}
        onChange={cambiardatos}
        ></input>

        <label htmlFor="correo" >Correo</label>
        <input
        id="correo"
        name="correo"
        type="email"
        value= {valores.correo}
        onChange={cambiardatos}
        ></input>
        <button type= "submit">Enviar Datos </button>                
        </form>
        
        </>
    );
}
export default  FormularioPagina

