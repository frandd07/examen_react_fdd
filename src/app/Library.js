import { useState } from "react";

export default function Ejercicio3() {
    const titulos = [
        { nombre: "Libro 1: Jajajajaja", editing: false },
        { nombre: "Libro 2: Estoy chill de cojones", editing: false },
        { nombre: "Libro 3: Uno más", editing: false },
        { nombre: "Libro 4: Este es el último", editing: false },
    ];

    const [lista, setLista] = useState(titulos);


    //Función editar 
    const editar = (index) => {
        setLista(
            lista.map((item, i) =>
                i === index ? { ...item, editing: true } : item
            )
        );
    };

    //función guardar el titulo una vez esté en modo edición (pinchar fuera para que se guarde)
    const guardarTitulo = (index, tituloNuevo) => {
        setLista(
            lista.map((item, i) =>
                i === index ? { ...item, nombre: tituloNuevo, editing: false } : item
            )
        );
    };

    //Después del mapeo utilizo operador ternario y miro si se est editando o no para hacer una cosa u otra
    return (
        <>
            <h1>Ejercicio 3: Library</h1>
            <ul>
                <h5>Lista de libros</h5>
                {lista.map((item, index) => (
                    <li key={index}>                        
                        {item.editing ? (
                            <>
                                <input
                                    type="text"
                                    defaultValue={item.nombre}
                                    onBlur={(e) => guardarTitulo(index, e.target.value)}
                                />
                            </>
                        ) : (
                            <>
                                {item.nombre}
                                <button onClick={() => editar(index)}>Editar</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}