import React from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';
import { getPokemonData, getPokemons, getPokemonJohto } from './Apis/api';

const {useState, useEffect} = React;
/*
Un hook es un codigo altamente reutilizable que basicamente lo podemos poner en cualquiera de nuestros componentes
y useState es un Hook lo usamos para actualizar una variable y que react actualize la lista

useEffect va a correr codigo basado en efecto o cualquier cambio ocurrido en un estado

hola
*/

export default function App() {

  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  
  const fetchPokemons = async () => {
    try{
      setLoading(true);
      const data = await getPokemons(15, 15 * page);
      console.log(data)
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises) //pide que pase una array de promesas
      setPokemons(results)
      setLoading(false)
      setTotal(Math.ceil(data.count / 15))
      console.log(promises)
    }
    catch(err){

    }

    
  }

  useEffect(() => {
    fetchPokemons();
  }, [page])

  return (
    <div>
      <Navbar />
      <div className="App">
      <Searchbar/>
      { loading ? <div>Cargando pokemones. . .</div>
      :
      <Pokedex
      loading={loading}
      pokemons={pokemons}
      page = {page}
      setPage = {setPage}
      total = {total}
      />
      }
      </div>
    </div>
  );
}
