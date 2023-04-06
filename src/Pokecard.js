import React from 'react';
import './styles/Pokecard.css'

const Pokecard = (props) => {
    let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
    return (
        <div className="Pokecard">
            <h2 className="Pokecard-name">{props.name}</h2>
            <img src={img} className="Pokecard-img"/>
            <p className="Pokecard-info">Type: {props.type}</p>
            <p className="Pokecard-info">EXP: {props.base_experience}</p>
        </div>
    )
};

export {Pokecard};