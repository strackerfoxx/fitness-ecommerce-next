import Navegacion from './navegacion'

export default function footer() {
  return (
    <footer className="footer">
        <div className="contenedor contenido">
            <Navegacion/>
            
            <p className="copyright">Todos los derechos reservados {new Date().getFullYear()} </p>
        </div>
    </footer>   
  )
}
