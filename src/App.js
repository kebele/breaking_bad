import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'


const App = () => {
//useState ve useEffect kullanacağız
//API den gelecek karakterleri belirtmek için items ve bunları değiştirmek için setItems, bunlarda array olacak
const [ items, setItems ] = useState([])
//diğer state api den veriler fetch edilirken ki süre için, loading esnasında true olacak diğer durumlarda false olacak
const [ isLoading, setIsLoading] = useState(true)
//inputa girilen Search.js de state olmuştu şimdi o değeri alıp burada API ye yollyacağız
const [ query, setQuery ] = useState("")


//useEffect ise süreci başlatma
useEffect(() => {
  const fetchItems = async () => {
    setIsLoading(true)
    //api deki verileri alalım
    const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

    console.log(result.data);
    //verileri Items a ayarlayalım
    setItems(result.data)
    //isLoading i false yapalım, çünkü artık veriler geldi
    setIsLoading(false)
  }

  fetchItems()
}, [query])

  return (
    <div className="container">
      <Header />
      <Search 
        getQuery={(q) => setQuery(q)}
      />
      <CharacterGrid 
          isLoading = { isLoading }
          items = { items }
      />
    </div>
  );
}

export default App;

/* 
şimdi yukarıda Header koyduk, state leri belrledik, 
API den verileri çektik, şimdi bu verileri kullanacağımız componentlere yollamamız lazım,
CharacterGrid.js oluşturduk, burada kullanacağımızı belirleyip, kullanacağımız yeere koyup veriyi o componente yollayalım
<CharacterGrid 
  isLoading = { isLoading }
  items = { items }
/>
şeklinde yolladık, bunları yolladığımızı componente yakalayalım

import React from 'react';

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>loading</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <h1 key={item.char_id}>{item.name}</h1>
      ))}
    </section>
  );
};
export default CharacterGrid;

useEffect te ikinci parametre burada query yani her değiştiğinde useEffect yeniden çalışır

*/