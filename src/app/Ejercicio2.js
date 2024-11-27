import ImageCarousel from "./ImageCarousel";

export default function Ejercicio2() {
  const urls = [
    "https://i.imgur.com/t5SOdqq.png",
    "https://i.imgur.com/bgI6vVo.png",
    "https://i.imgur.com/LPJnKml.jpeg",
  ];

  const titulos = [
    "Escudo Sevilla FC",
    "Escudo Barcelona FC",
    "Escudo Cádiz FC",
  ];

  return (
    <>
      <ImageCarousel imagenes={urls} titulos={titulos} />
    </>
  );
}