import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import View from './View'
import { Link } from 'react-router-dom'
// import { useEffect } from 'react'

const Search = () => {
const [name, setName] = useState("")
const [characterdata, setCharacterData] = useState({})



//   useEffect(()=>{
//   const fetchData = async()=>{
//   const response = await axios.post('https://marvel-api-65d1.onrender.com/', {name})
//   setCharacterData(response.data)
// }
// if (name){
//   fetchData()
// }

//   }, [name])

const handleSubmit= async(e)=> {
    e.preventDefault();

  const response = await axios.post('https://marvel-api-65d1.onrender.com/', {name})
setCharacterData
}

  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className='w-full h-full text-center p-5 cursor-pointer'>
     <Link to = 'https://marvel-characters.onrender.com/'><h1 className='p-5 text-[7.5vmin] font-bold'>MARVEL CHARACTERS</h1></Link> 
    <input className='border border-white rounded-md' onChange={e=>setName(e.target.value)} type = 'text'  placeholder='Character...' required/>
    <button className='rounded-md bg-green-500'>Search</button>
    <View element = {characterdata.data} character = {name} />
    </div>
    <div className='w-full h-full text-center'>
          <p>{characterdata.attributionText}</p>
        </div>
    </form>
    </>
  )
}

export default Search