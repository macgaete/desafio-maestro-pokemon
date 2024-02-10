import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const apiBaseURL = 'https://pokeapi.co/api/v2/';

const Pokemon = () => {
  
  const [pokemon, setPokemon] = useState([])
  const [optionSelected, setOptionSelected] = useState("")

  useEffect(()=>{
    apiReq()
  }, [])

  async function apiReq(){
    try{
      const response = await fetch(apiBaseURL + 'pokemon')
      const {results} = await response.json()

      setPokemon(results)
    } catch (error){
      console.log(error)
    }
  }

  const handleSelect = ({target : {value}})=> setOptionSelected(value)

  const searchThatPokemon = useNavigate()

  const goToDetails = () => {
    if(!optionSelected){
      alert('Debes seleccionar un Pokémon')
    } else {
      searchThatPokemon(`/pokemon/${optionSelected}`)
    }
  }

  return (
    <>
      <h1 className='baseCenter'>Maestro Pokémon</h1>
      <section className='baseCenter'>
        <h2>Selecciona tu Pokémon</h2>
        <select onChange={(e) => handleSelect(e)}>
          <option defaultValue value=''>Selecciona un Pokémon</option>
          {pokemon?.map((pokemon) => (
            <option value={pokemon.url.split('/')[6]} key={pokemon.url}>{pokemon.name ? pokemon.name[0].toUpperCase() + pokemon.name.substring(1) : ''}</option>
          ))}
        </select>
        <br></br>
        <button onClick={goToDetails}>Buscar</button>
      </section>
    </>
  );
};
export default Pokemon;
