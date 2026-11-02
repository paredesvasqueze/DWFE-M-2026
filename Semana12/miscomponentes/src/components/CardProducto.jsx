export default function CardProducto({id,category,name, stock, imageUrl} )
{
    return(
        <article>
            <span>{name}</span>
            <img src = {imageUrl}></img>
            <span>{category}</span>
            <span>Stock</span><p>{stock}</p>
        </article>
    )

}