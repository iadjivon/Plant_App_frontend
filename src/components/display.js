import React from 'react';

 
const Display = (props) => {
    const {plants}=props

    const loaded = () => (
        <div>
        
        {plants.map((plant, index)=>(
            <div>
            <a href ={ `/plants/${index}`}>
              <h3>{plant.plant_name}</h3>
              </a>
              <h3> <img src = {plant.image}/></h3>
              <h6>{plant.description}</h6>
              <h3>{plant.pet_name}</h3>
              
             {/*------------ EDIT BUTTON------------- */}
            <button onClick ={()=>{props.selectPlant(plant);
            props.history.push("/edit")}}> EDIT</button>

              {/*------------ DELETE BUTTON------------- */}
             <button onClick={()=> {props.deletePlant(plant);
            }}> DELETE</button>

           
      
            </div>
        ))}
         
        </div>
      )

        const loading = <h1> Loading ... </h1>



    return  plants.length >0 ? loaded(): loading
       
        
    };      


export default Display;