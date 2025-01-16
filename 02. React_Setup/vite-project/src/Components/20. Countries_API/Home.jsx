import React, {useState} from 'react';
import "./Countries_API.css";
import "../../App.css";
import SearchBar from './SearchBar.jsx';
import Filter from './Filter.jsx';
import CountriesList from './CountriesList.jsx';

const Home = () => {
    const [query, setQuery] = useState("");
  return (
    <main>
        <div className='search-filter-container'>
            <SearchBar setQuery={setQuery}/> 
            <Filter /> 
        </div>
        <CountriesList query={query}/>
    </main>
  )
}

export default Home