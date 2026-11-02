import { useState,useEffect } from "react";
function BotonSeleccion({ onSeleccionar,onSeleccionar2 }) {
    return (
        <>
        <button onClick={onSeleccionar}>
            Seleccionar curso
        </button>
        <button onClick={onSeleccionar2}>
            Seleccionar curso
        </button>
        </>
    );
}
function CursoApp() {
    const [curso, setCurso] = useState('Ninguno');
    const [cambio, setCambio] = useState(false);
    const [hora, setHora] = useState('');
    useEffect(()=>{ 
        document.title = curso;
    },[hora]);
    return (
        <section>
            <h2>{hora}</h2>
            <p>Curso elegido: {curso}</p>
            
            <BotonSeleccion
                onSeleccionar={() => setCurso('React')}
                onSeleccionar2={() => setCurso('DWFE')}
            />
            <button onClick={()=> {setCambio(!cambio) }} >Cambiar</button>
            <button onClick={()=> {setHora(new Date().toLocaleTimeString()) }}>Mostrar Hora</button>            
        </section>
    );
}
export default CursoApp
