import React from 'react'
import { useNavigate } from 'react-router-dom'

const View = ({element}) => {

    const imageSize = 'standard_fantastic'
    const navigate = useNavigate();
if (element && element.results && element.results.length === 0){
  return (
    <div className='w-full h-[100vh] flex justify-center align-middle items-center'>
      <h1 className='text-[7vmin]'>That character is not found</h1>
    </div>
  
  )
}


else{
  return (
    <div className='w-full h-full text-white'>
    <div className='w-full h-full flex flex-wrap p-10 md:p-5 justify-center items-center align-middle'> 
{element && element.results.map((data)=>{
  return (
    <>
  <img className='p-2 text-center' key={data.id} onClick={()=>navigate(`/${data.id}`)} src = {`${data.thumbnail.path}/${imageSize}.${data.thumbnail.extension}`} alt={element.name} />
    </>
)

})


}
<div>
</div>
    </div>
    </div>
  )
}
}


export default View