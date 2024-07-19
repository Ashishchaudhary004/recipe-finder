import React, { useState } from 'react'
import Mealcard from './Mealcard';

const MainPage = () => {
    
    const[data, setData]=useState()
    const[search, setSearch]=useState("");
    const[msg, setMsg]=useState("")

    const handleInput = (e)=>{
        setSearch(e.target.value)
    }
    const myfun=async ()=>{
        if(search===""){
            setMsg("Please Enter Something")
        }else{
            const get=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const jsondata=await get.json()
        // console.log(jsondata.meals);
            setData(jsondata.meals)
        }
        
    }
    
  return (
    <>
    <h1 className='head'>MAKE YOUR RECIPE </h1>
     <div className='container'>
        <div className='searchbar'>
            <input type='text' placeholder='Search Dishes' onChange={handleInput}></input>
            <button onClick={myfun}>Search</button>
        </div>
        <h3 className='error'>{msg}</h3>
        <div>
           <Mealcard detail={data}/>
        </div>
     </div>
    </>
  )
}

export default MainPage
