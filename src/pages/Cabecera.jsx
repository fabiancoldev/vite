import { Link } from "react-router"

const Cabecera = () => {
  return (
    <div>
    <img src="" className="photo"  />
      <h1>Encabezado</h1>
      <Link to="/plantilla">Ir a Plantilla</Link>
      <Link to="/">Ir a Home</Link>
    </div>
  )
}

export default Cabecera
