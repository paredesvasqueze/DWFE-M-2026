import { useState,useEffect } from "react";
function ContadorPagina() {
    const [curso, setCurso] = useState('Ninguno');
    useEffect(()=>{ 
        console.log("Ejecute Use Efect");
    });
    return ( 
        <>
        <h1>{curso}</h1>
            <button onClick={()=>{setCurso("React")}}>Cambiar</button>         
            <button onClick={()=>{setCurso("DWFE")}}>Cambiar</button>         
            </>      
    );
}
export default ContadorPagina
