import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const apiBaseURL = 'https://pokeapi.co/api/v2/'

const PokemonDetails = () => {

  const [pkmn, setPkmn] = useState({})

  const {id} = useParams()

  useEffect(() => {
    apiReqPkmn()
  },[id])

  async function apiReqPkmn(){
    try{
      const response = await fetch(apiBaseURL + 'pokemon/' + id)
      const data = await response.json()

      setPkmn(data)
      return(data)
    } catch (error){
      console.log(error)
    }
  }

  return (
    <>
      {Object.keys(pkmn).length > 0 && (
      <div className='baseCenter'>
        <h1>{pkmn.name[0].toUpperCase() + pkmn.name.substring(1)}</h1>
        <h2>Pokémon #{id}</h2>
        {pkmn.types.length < 2 ? 
        (<h3>Type:{' ' + pkmn.types[0].type.name[0].toUpperCase() + pkmn.types[0].type.name.substring(1)}</h3>)
        :
        (<h3>Types: 
          {' ' + pkmn.types[0].type.name[0].toUpperCase() + pkmn.types[0].type.name.substring(1) + ' '}
          /
          {' ' + pkmn.types[1].type.name[0].toUpperCase() + pkmn.types[1].type.name.substring(1)}
        </h3>)
        }
        <div className="pkmnInfo">
          <img className="pkmnSprite" src={pkmn.sprites.other.home.front_default}></img>
          <div className="statList">
            Health: {pkmn.stats[0].base_stat}
            <br/>
            Attack: {pkmn.stats[1].base_stat}
            <br/>
            Defense: {pkmn.stats[2].base_stat}
            <br/>
            Special Attack: {pkmn.stats[3].base_stat}
            <br/>
            Special Defense: {pkmn.stats[4].base_stat}
            <br/>
            Speed: {pkmn.stats[5].base_stat}
          </div>
        </div>
        </div>
      )}
    </>
  );
};

export default PokemonDetails;
