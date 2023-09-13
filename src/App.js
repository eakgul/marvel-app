import Header from './components/Header';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CharacterTable from './components/CharacterTable';
import Search from './components/Search';
// import 'bootstrap/dist/css/bootstrap.min.css';


const hash = "65edec1b5ad34d49a453b5c6180ead9c";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetch = async () => {
      if (query === '') {
        const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=8bfbbc12178749702539e2669ab842d0&hash=${hash}`);
        console.log(result.data.data.results);
        setItems(result.data.data.results);
        setLoading(false);
      } else {
        const result = await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=8bfbbc12178749702539e2669ab842d0&hash=${hash}`);
        console.log(result.data.data.results);
        setItems(result.data.data.results);
        setLoading(false);
      }
    };

    fetch();
  }, [query]);

  return (
    <div className="container ">
      <Header />
      <Search search={(q) => setQuery(q)}></Search>
      <CharacterTable items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
