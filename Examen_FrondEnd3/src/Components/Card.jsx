import React from 'react';

const Card = ({ nombre, color }) => {

    const colorResultado = {
        color : color,
        border: `2px solid ${color}`
    }
    return (
        <div style={colorResultado}>
            <p>Nombre: {nombre}</p>
            <p>Color Favorito: {color}</p>
        </div>
    );
};

export default Card;