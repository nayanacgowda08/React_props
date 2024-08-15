/* eslint-disable react/prop-types */
import React from 'react'

function Card({value,handle,index}) {
    const {name,profession,image ,friends} = value

  return (
    <>
    {/* <div className='p-4  '>
     <button className={`px-4 py-2 ${color} text-white rounded-md`}>{text}</button>
     {/* <button className='px-4 py-2 bg-blue-500 text-white rounded-md '>Click</button> */}
    <div className=' w-52 bg-white rounded-md overflow-hidden'>
        <div className='bg-sky-400 w-full h-40 '>
            <img  className='w-full h-full object-cover' src={image} alt="" />
        </div>
        <div className='w-full p-2'>
            <h1 className='text-lg font-semibold'>{name}</h1>
            <h3 className='text-sm '>{profession}</h3>
            <button onClick={()=>handle(index)}  className={`${friends===true ? "bg-green-700":"bg-blue-500"} text-white px-3 py-1 rounded-md mt-4 text-sm`}>{friends === true ? "Friends" : "Add  Friend"}</button>
        </div>
       
    </div>



    </>
  )
}

export default Card