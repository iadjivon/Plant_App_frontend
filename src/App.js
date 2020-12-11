import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Router, Route, Link, Switch} from 'react-router-dom'
import Display from './components/display';


function App () {
// VARIABLE TO HOLD PLANTS 
    const url = "http://localhost:3000"
// // state to hold plants 
    const [plants, setPlants] = React.useState([])

// // FUNCTION TO HOLD EMPTY PLANT 
const emptyPlant = {
  plant_name: "",
  description: "",
  image: "",
  pet_name: "",
};


// const [selectedPlant, setSelectedPlant] = React.useState(emptyPlant)


// // Function to get plants via API
const getPlants = async () => {
  const response = await fetch(url + "/plants")
  const data = await response.json()
  setPlants(data)

  }

React.useEffect(()=>{
    getPlants()
}, [])

const loaded = () => (
  <>
  {plants.map((plant)=>{
    return(
      <div>
        <h3>{plant.plant_name}</h3>
        <h3> <img src = {plant.image}/></h3>
        <h6>{plant.description}</h6>
        <h3>{plant.pet_name}</h3>

        {/*------------ DELETE BUTTON------------- */}
        <button onClick ={async ()=> {
          await fetch (url + "/plants/" + plant.id, {
            method: "delete"
          })
          // GET UPDATED LIST OF NOTICES 
          getPlants()
        }}> Delete </button>

        {/*------------ CREATE-------------*/}


      </div>
    )
  })}
  </>
)

// const selectPlant = (plant) => {
//   setSelectedPlant(plant);
// }

// // useEffect to do the initial call of getPlants 


    return (
      <div className="App">
          <h1>Novice Plant Mother</h1>
          {plants.length > 0 ? loaded() : <h2> there are no plants</h2>}
          {/* <Display/> */}

          
      </div>
  );
}



export default App;
