import { useState } from "react";

export default function Ejercicio1() {
    const [nombre, setNombre] = useState("");
    const [especie, setEspecie] = useState("");
    const [edad, setEdad] = useState(0);
    const [sexo, setSexo] = useState("Macho");
    const [animales, setAnimales] = useState([]);

    //Función para añadir el animal a la lista los animales
    const agregarAnimal = (e) => {
        //Para que la página no se recargue cada vez que le doy a agregar
        e.preventDefault();

        //Validaciones que me pide
        if(!nombre || !especie){
            alert("Los campos nombre y/o especie no pueden estar vacíos");
            return;
        }

        //Creo nuevo animal y con el set, recojo todos los del array y le pongo el nuevo
        const nuevoAnimal = { nombre, especie, edad, sexo };
        setAnimales([...animales, nuevoAnimal]);

        //Cuando envio el formulario para que se pongan en blanco
        setNombre("");
        setEspecie("");
        setEdad(0);
        setSexo("Macho");
    };

    return (
        <>
            <h1>Ejercicio 1: AnimalList</h1>
            <form onSubmit={agregarAnimal}>
                <input 
                    type="text"
                    value={nombre}
                    placeholder="Nombre"
                    onChange={(e) => setNombre(e.target.value)}
                />
                <input 
                    type="text"
                    value={especie}
                    placeholder="Especie"
                    onChange={(e) => setEspecie(e.target.value)}
                />
                <input 
                    type="number"
                    value={edad}
                    placeholder="Edad"
                    onChange={(e) => setEdad(e.target.value)}
                />
                <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
                    <option value="Macho">Macho</option>
                    <option value="Hembra">Hembra</option>
                </select>
                <input type="submit" value="Agregar" /> 
            </form>

            <h4>Lista</h4>
            <div>
                {animales.map((animal, index) => (
                    <div key={index}>
                        <h3>{animal.nombre}</h3>
                        <p>Especie: {animal.especie}</p>
                        <p>Edad: {animal.edad}</p>
                        <p>Sexo: {animal.sexo}</p>
                    </div>
                ))}
            </div>
        </>
    );
}