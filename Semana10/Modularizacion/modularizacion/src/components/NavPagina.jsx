

function Nav(props ) { 

    console.log(props);
      
  return (
    <nav aria-label="Navegación principal">
        <ul>
            <li><a href="#contacto">{props.saludito}</a></li>
                        <li><a href="#contacto">{props.saludo}</a></li>

        </ul>
    </nav>
  )
}

export default Nav