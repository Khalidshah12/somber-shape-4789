import React,{useCallback, useEffect, useState} from 'react'
import SearchBar from './SearchBar';
import "./Search"
import { ProductData } from '../Products/db'
export default function Search() {
    const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([])
  
  
  const queryHandler = useCallback((val) => {
    setQuery(val)
  },[])

  useEffect(()=> {
    if(query === ""){
      setSuggestions([])

    }
    else{
      let inputText = query.toLowerCase();
      let newSuggestions = ProductData.filter((item) => {
        return item.type.toLowerCase().indexOf(query) !== -1 ? true: false;
      })
      .map((item) => {
        return (
            <div className='Box'>
                {/* <img src={item.img} alt="" /> */}
                <h1> {item.type} </h1>
            </div>
        )
      })
      setSuggestions(newSuggestions);
      console.log(newSuggestions)
    }
  }, [query])
    
    return (
        <div>
        <h1>Search Bra</h1>
        <h3>
          Search query is {query}
        </h3>
        <SearchBar suggestions={suggestions}  queryHandler={  queryHandler} />
        {/* <Todos/> */}
        {/* <Pin length={5} /> */}


        </div>
    )
}
