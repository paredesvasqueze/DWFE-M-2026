/*
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => console.log(data))
*/
/*
console.log("holita antes");

setTimeout(() => {
    console.log("Hola");
    },2000
 )

 console.log("holitas");
*/

let edad = new Promise((resolve,reject)=>{
    let anios = 19;
    if ( anios >= 18)
    {
        setTimeout(()=>{
            //console.log("oa");
            resolve("Si puede votar");    
        },10000  );
        
    }
    else
    {
        reject("No puede votar");
    }
} ) 


function devolverestado()
{
    console.log(edad);
}
//console.log(promesa);

edad.then( exito => console.log(exito))
.catch( fallo => console.log(fallo));

 

