import { useEffect, useState } from "react"
import { obtenerProductos } from "../services/ProductoServices"
import CardProducto from "./CardProducto";

export default function CatalogoProductos()
{    
const [productos, setProductos] = useState([]);

useEffect(
    () =>
    {
        async function listar(){
           const resultado = await obtenerProductos();
           setProductos(resultado.data);
        }
        listar();
    }     
, []
)
    return(
        <section className="products-container">
             {productos.map(e => <CardProducto 
             id = {e.id}
             name= {e.name}
             category= {e.category}
             stock= {e.stock}
             imageUrl= {e.imageUrl}
             />  ) }
        </section>
    )

}