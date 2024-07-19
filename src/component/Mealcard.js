import React from 'react'
import { NavLink } from 'react-router-dom'


const Mealcard = ({detail}) => {
    console.log(detail)
  return (
    <div className='meals'>
         {!detail ? "Data Not Found" : Array.isArray(detail) && detail?.map((curItem)=>{
            return (
                <div className='mealImg'>
                    <img src={curItem.strMealThumb} alt=""/>
                    <p>{curItem.strMeal}</p>
                    <NavLink to={`/${curItem.idMeal}`}>
                    <button >View Recipe</button>
                    </NavLink>
                 
                </div>
            )
          
        }) 
         
        }
    </div>
  )
}

export default Mealcard
