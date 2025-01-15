import Cabecera from "./Cabecera"
import Foter from './Foter';

const Plantilla = () => {
  return (
    <>
    <Cabecera />
              <h1>Tareas Pendientes de Hedy Lamarr</h1>
    <img
      src="https://i.imgur.com/HKJb8Ws.jpeg"
      alt="Hedy Lamarr"
      className="photo"
      width="200"
      height="200"
    />
    <ul>
      <li>Inventar nuevo semáforo</li>
      <li>Ensayar la escena de la película</li>
      <li>Mejorar la tecnología del espectro</li>
    </ul>
    <Foter />
    </>
  )
}

export default Plantilla
