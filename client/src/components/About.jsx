import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';



const About = () => {
    const {id} = useParams();
    const [info, setInfo] = useState({});
    const imageSize = 'standard_fantastic'
    const navigate = useNavigate();
    const goBack =()=>{
      navigate(-1);
    }
 

    useEffect(()=>{
        const fetchData = async () =>{
            const data = await axios.post('/data', {id})
            setInfo(data.data)
        }
       
        fetchData()
    }, [])

  return (
<>
    <div className='w-full h-full text-white'>
        {info.data && info.data.results.map((data, id)=>{
          return (
            <>
            <div className='p-3' key={id}>
              <div className='flex justify-center'>
                 <img src={`${data.thumbnail.path}/${imageSize}.${data.thumbnail.extension}`} alt={data.name} />
                </div>
                <div>
                <h1 className='text-center text-[8vmin] py-3 font-bold'>{data.name}</h1>
                <p className='px-5 text-center text-[3.5vmin]'>{data.description ? data.description : 'No description is available at this time'}</p>
                <div className='w-full h-full p-10 text-center'>
                  <h1 className='text-[3.75vmin] font-bold'>{data.name} Comics</h1>
                  <ul className='p-3 flex flex-wrap justify-center'>
                  {data.comics.items.map((comics)=>{
      
                    return (
                    <div className=''>
                      <li className='text-center py-2 md:p-5'>
                       <p className='text-[2.25vmin]' key={comics.id}>{comics.name}</p> 
                        </li>
                    </div>
                    )
                })}
                  </ul>
               
                </div>
                <div className='text-center w-full h-full'>
               <button onClick={goBack} className='bg-green-500 p-1.5 rounded-md'>Search</button>
               </div>
                </div>
       
            </div>
      
            </>
          )
           
        })}
    
    </div>
    </>
  )
}

export default About