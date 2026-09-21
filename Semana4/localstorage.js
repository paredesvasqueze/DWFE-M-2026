const inputnombre= document.getElementById("nombre") ;
const inputapellido= document.getElementById("apellido") ;
const inputdeporte= document.getElementById("deporte") ;

function guardar() {  

    sessionStorage.setItem("Nombre",inputnombre.value);
    sessionStorage.setItem("Apellido",inputapellido.value);
    sessionStorage.setItem("DFavorito",inputdeporte.value);    
    inputnombre.value = "";
    inputapellido.value = "";
    inputdeporte.value = "";
}

function mostrar() {
    inputnombre.value =  sessionStorage.getItem("Nombre");
    inputapellido.value =  sessionStorage.getItem("Apellido");
   inputdeporte.value =  sessionStorage.getItem("DFavorito");
}