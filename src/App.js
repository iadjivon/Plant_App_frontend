import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'

import Display from './components/Display';
import Form from './components/Form';
import Show from './components/Show';



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


// STATE TO HOLD PLANT DATA
const [selectedPlant, setSelectedPlant] = React.useState(emptyPlant)

// // Function to get plants via API
const getPlants = () => {
   fetch(url + "/plants/")
   .then(response => response.json()
  .then(data => {
    setPlants(data)
  }))
 }

React.useEffect(()=>{
    getPlants()
}, [])


// HANDLE CREATE FUNCTION FOR WHEN THE FORM IS SUBMITTED
const handleCreate = (newPlant)=>{
   fetch(url + "/plants", {
    method: "post",
    headers:{
      "Content-type":"application/json"
    },
    body: JSON.stringify(newPlant)
  }).then(response => {
    getPlants()
  })
}



// HANDLE UPDATE FUNCTION 
const handleUpdate = (plant)=>{
 fetch(url + "/plants/" + plant.id, {
    method: "put",
    headers:{
      "Content-type": "application/json"
    },
    body: JSON.stringify(plant)
  }).then(response => getPlants())
}

const selectPlant = (plant) => {
    setSelectedPlant(plant);
    }

const deletePlant = (plant)=>{
  fetch(url + "/plants/" + plant.id, {
    method: "delete",

}).then((response)=>getPlants())
}


    return (
      <div className="App">
  <header> 
        <h1>Novice Plant Mother</h1>
        <Link to="/create">
          <button> Add New Plant</button>
        </Link>
        <Link to="/">
          <button> Home</button>
        </Link>
  </header> 

<div>

          <Switch>
            <Route exact path="/" render = {(rp)=>
            <Display selectPlant={selectPlant}
                  {...rp} plants={plants}
                deletePlant={deletePlant}/>} />

            <Route 
              exact path="/create"
              render={(rp) => (
                <Form {...rp} label="create" plant={{emptyPlant}}
                 handleSubmit=
                {handleCreate} />
                )}
            />

            <Route
              exact path="/edit"
              render={(rp) => (
                <Form {...rp} label="update" plant={selectedPlant} handleSubmit={handleUpdate} />
                )}
            />
        
        <Route 
          exact path="/plants/:id"
          render={(rp) => (
            <Show {...rp} plant={selectedPlant}/>)
          }
        />





          </Switch>

          </div>   
       
      </div>
  );
}



export default App;
