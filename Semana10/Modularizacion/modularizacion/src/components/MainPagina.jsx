
function Main() { 
      
  return (
    <main id="inicio">
            <section>
                <h2>Bienvenido a nuestro sitio</h2>

                <p>
                    Esta es una página web de ejemplo creada con HTML5
                    semántico y CSS. Su diseño es sencillo, moderno
                    y fácil de utilizar.
                </p>

                <p>
                    Utilizamos etiquetas semánticas para organizar
                    correctamente el contenido y facilitar su
                    comprensión por los navegadores y las tecnologías
                    de asistencia.
                </p>
            </section>

            <section id="servicios">
                <h2>Nuestros servicios</h2>

                <div className="tarjetas">
                    <article className="tarjeta">
                        <h3>Diseño web</h3>
                        <p>
                            Creamos diseños atractivos y adaptables
                            a diferentes dispositivos.
                        </p>
                    </article>

                    <article className="tarjeta">
                        <h3>Desarrollo</h3>
                        <p>
                            Construimos páginas web organizadas,
                            accesibles y funcionales.
                        </p>
                    </article>
                </div>
            </section>           
        </main>

  )
}

export default Main