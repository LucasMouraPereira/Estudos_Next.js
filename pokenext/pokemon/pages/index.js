import React from 'react';
import Link from 'next/link';
import api from './api'

export async function getStaticProps(context){
  const pokemons = await api.get('pokedex/2')
    .then((response) => {
      const pokemonList = response.data;
      return pokemonList.pokemon_entries;
    });

  return {
    props: {
      pokemons
    },
  }
}

export default function Home(props) {
  const { pokemons } = props;

  return (
    <div>
      <h1>Pokedex</h1>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/sobre">
          <a>Sobre o projeto</a>
        </Link>
      </div>
      <div>
          {pokemons.map((pokemon => (
            <div key={pokemon.entry_number}>
              <Link href={`/pokemon/${pokemon.entry_number}`}>
                <strong>{pokemon.pokemon_species.name}</strong>
              </Link>
            </div>
          )))}
      </div>
    </div>
  )
}
