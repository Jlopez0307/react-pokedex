import React from 'react';
import { Pokecard } from './Pokecard';
import { Pokemon } from './Pokemon';
import './App.css';

const Pokedex = () => {
    return (
        <>
            <div className="Pokedex-container">
            <h1 className="Pokedex-header">Pokedex</h1>
                <div className="Pokedex-entries">
                {Pokemon.map(p => (
                    <Pokecard
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        base_experience={p.base_experience}
                    />
                ))};
                </div>
            </div>
        </>
    )
};

export {Pokedex};