import { useState } from "react";

export default function ImageCarousel({ imagenes, titulos }) {
  const [indiceActual, setIndiceActual] = useState(0);

  //funcion para avanzar a la siguiente 

  const siguiente = () => {
    setIndiceActual((indiceAnterior) => (indiceAnterior + 1) % imagenes.length);
  };

  //funcion para avanzar a la anterior
  const anterior = () => {
    setIndiceActual((indiceAnterior) =>
      (indiceAnterior - 1 + imagenes.length) % imagenes.length
    );
  };

  return (
    <>
      <h1>Ejercicio 2: ImageCarousel</h1>
      <h5>{titulos[indiceActual]}</h5> 
      <img src={imagenes[indiceActual]} />
      <div>
        <button onClick={anterior}>Anterior</button>
        <button onClick={siguiente}>Siguiente</button>
      </div>
    </>
  );
}