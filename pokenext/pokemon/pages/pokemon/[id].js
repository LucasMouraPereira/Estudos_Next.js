import React from 'react';
import api from '../api'

export default function Pokemon({ pokemon }) {
    return (
        <div>
            <img src={pokemon.sprites.front_default} alt="Imagem de um pokémon" />
        </div>
    )
}

export async function getStaticPaths() {
    //Rodar algum código Node
    return {
        paths: [
            {
                params: {
                    id: '1',
                },
            },
            {
                params: {
                    id: '2',
                },
            },
            {
                params: {
                    id: '3',
                },
            },
        ],
        fallback: false,
    }
};
  
export async function getStaticProps({ params }) {
    const pokemon = await api.get(`pokemon/${params.id}`)
    .then((response) => {
      const pokemonData = response.data;
      return pokemonData
    });
    console.log(pokemon)
    return { 
        props: {
            pokemon
        }
    }
  }