function obtenerResultado(){
  return  new Promise((resolve, reject) => {
    setTimeout(() => {
      const numero1 = 20;
      const numero2 = 4;

      const resultado = numero1 * numero2;

      resolve(resultado);
    }, 1000);
  });
  }


async function abrirpromesa()
{
    try{
        let resultado = await obtenerResultado();
   console.log(resultado);
    }catch(e)
    {
        console.log(e);
    }
   
}
abrirpromesa();

/*
obtenerResultado()
  .then(resultado => {
    console.log("Resultado:", resultado);
  })
  .catch(error => {
    console.log("Error:", error);
  });
*/