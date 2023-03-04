import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import View from './View'
import { Link } from 'react-router-dom'

const Search = () => {
const [name, setName] = useState("")
const [characterdata, setCharacterData] = useState({})


const handleSubmit= async(e)=> {
    e.preventDefault();

  const response = await axios.post('/', {name})
   
 setCharacterData(response.data)


  
}



  return (
    <>
    <div className='w-full h-full text-center p-5'>
     <Link to = '/'><h1 className='p-5 text-[7.5vmin] font-bold'>MARVEL CHARACTERS</h1></Link> 
        <form onSubmit={handleSubmit} method='POST' action='/'>
            <input className='border border-white rounded-md' onChange={e=>setName(e.target.value)} value={name} type = 'text'  placeholder='Character...' required/>
            <button className='border bg-green-500 rounded-md'>Search</button>
        </form>
        
        <View element = {characterdata.data} />
    </div>
    <div className='w-full h-full text-center'>
          <p>{characterdata.attributionText}</p>
        </div>
    </>
  )
}

export default Search