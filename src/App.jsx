import { useState } from 'react'
import Card from './assets/Components/Card'

function App() {
  const data = [
    {name:"nayna" , profession:"web developer" , image:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name:"raj" , profession:"app developer" , image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBvcnRyYWl0fGVufDB8fDB8fHww",friends:false},
    {name:"shishira" , profession:"nurse" , image:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",friends:false},
    {name:"manish" , profession:"painter" , image:"https://images.unsplash.com/photo-1504275490777-45f30792f13f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBvcnRyYWl0fGVufDB8fDB8fHww",friends:false}
  ] 

  const [val,setVal] = useState(data)
  const handleFriendsButton = (cardIndex)=>{
    setVal((prev)=>{
     return  prev.map((item,indx)=>{
        if(indx === cardIndex){
            return {...item, friends: !item.friends}
        }
        return item
      })
    })
  }

  return (
    <>
    <div className='bg-zinc-200 w-full h-screen flex gap-5 items-center justify-center'>
     {/* <Card  text="Know more" color="bg-blue-500" />
     <Card text="Download" color="bg-red-500"/> */}
     {val.map((item,ind)=>(
      
      <Card key={ind}  index={ind} handle={handleFriendsButton}  value={item} />
     ))}
      
    </div>
    </>
  )
}

export default App
