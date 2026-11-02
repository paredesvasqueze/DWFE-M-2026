

function Cuerpo(props) { 
      console.log(props);

  return (
    <>            
        <h1>{props.titulo}</h1>
        <div>{props.children}</div>
    </>
  )
}

export default Cuerpo