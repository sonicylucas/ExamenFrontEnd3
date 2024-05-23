import React, { useState } from 'react';
import Card from './Card';



const Form = () => {
    const [nombre, setNombre] = useState('');
    const [color, setColor] = useState('');
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validar()) {
            setShow(true);
            setError('');
        } else {
            setError('Por favor chequea que la información sea correcta');
            setShow(false);
        }
    };

    const validar = () => {
        if (nombre.trim().length < 3) {
            return false;
        }
        const hex = /^#[0-9A-Fa-f]{6}$/; 
        if (!hex.test(color)) {
            return false;
        }
        return true;
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Ingresa tu nombre: </label>
                <input
                type="text"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
                />
             </div>
        <div>
            <label>Ingresa tu color favorito :</label>
            <input
            type="text"
            value={color}
            onChange={(event) => setColor(event.target.value)}
            />
        </div>
            <button  className='Enviar' type="submit">Enviar</button>
        </form>
            {error && <p className='SetError'>{error}</p>}
            {show && <Card nombre={nombre} color={color} />}
        </div>
    );
};

export default Form;