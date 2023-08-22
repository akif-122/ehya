import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch } from '@fortawesome/free-solid-svg-icons'

import "../../assets/css/search.css"

function Search() {
  return (
    <>
        <div className='search-wrap'>
            <FontAwesomeIcon icon={faSearch}/>
            <input type='text' placeholder='Search article' />
            <button className='btn btn-primary'>Search</button>
        </div>
    </>
  )
}

export default Search