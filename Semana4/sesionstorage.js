const inputnombre= document.getElementById("nombre") ;
const inputapellido= document.getElementById("apellido") ;
const inputdeporte= document.getElementById("deporte") ;

function guardar() {  

    let objeto ={
        nombre: inputnombre.value,
        apellido: inputapellido.value,
        deportef: inputdeporte.value
    }
    sessionStorage.setItem("objeto", JSON.stringify(objeto));
    inputnombre.value = "";
    inputapellido.value = "";
    inputdeporte.value = "";
} 

function mostrar() {
    let objetorecuperado = JSON.parse(sessionStorage.getItem("objeto"));
    inputnombre.value =  objetorecuperado.nombre;
    inputapellido.value =  objetorecuperado.apellido;
   inputdeporte.value =  objetorecuperado.deportef;
}