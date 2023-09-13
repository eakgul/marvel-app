import React from 'react';
import {useState} from 'react';

const Search = ({search}) => {
    const[text,setText] = useState('')

    const onSearch= (q)=>{
        setText(q)
        search(q)
    }

    return (
        <section className="search">
            <form>
                <input type="text"
                className="input"
                placeholder="Find a character"
                autoFocus
                onChange={(e)=>onSearch(e.target.value)}
                value={text}/>
            </form>
        </section>
    )
}

export default Search
