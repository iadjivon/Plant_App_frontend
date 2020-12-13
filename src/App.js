import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'

import Display from  './components/Display'
import Form from './components/Form';
import Show from './components/Show';

import Nav from 'react-bootstrap/Nav'



function App () {
// VARIABLE TO HOLD PLANTS 
    const url = "https://nov-plant-app.herokuapp.com"
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

/////////////////////////////
// RETURN FUNCTION
/////////////////////////////

    return (
      <div className="App">
        
  <header className="header"> 
  <div className="overshadow"> 
        <h1 className="title">Novice Plant Mother</h1>
    <Nav className="justify-content-center"> 
        <Nav.Item>
        <Link to="/create">
          <button className="header-btn"> Add New Plant</button>
        </Link>
        </Nav.Item>
        <Nav.Item>
        <Link to="/">
          <button className="header-btn"> Home</button>
        </Link>
        </Nav.Item>
    </Nav>
    </div>
  </header> 
  
  <div className="division">

  </div>
<main className="main">
  
{/* <div className="main-1">
        {/* <img src="https://i.pinimg.com/originals/5a/35/62/5a356215f119a1d812e470e464bdb3fd.jpg"/> */}
      {/* </div> */} 

<div className="main-2">

          <Switch>
            <Route exact path="/" render = {(rp)=>
            <Display selectPlant={selectPlant}
                  {...rp} plants={plants}
                deletePlant={deletePlant}/>} />

            <Route 
              exact path="/create"
              render={(rp) => (
                <>
                <h1 className="form-title"> Let's welcome a new plant! </h1>
                <Form {...rp} label="create" plant={{emptyPlant}}
                 handleSubmit=
                {handleCreate} />
                </>
                )}
            />

            <Route
              exact path="/edit"
              render={(rp) => (
                <>
                <h1 className="form-title"> Let's make a quick adjustment. </h1>
                <Form {...rp} label="update" plant={selectedPlant} handleSubmit={handleUpdate} />
                </>
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
      </main>
       
<footer className="footer">
   
    <a href="https://github.com/iadjivon"> <h5> Github </h5></a> 
    <hr className="hr"></hr>
    <a href="https://www.linkedin.com/in/ida-adjivon/"> <h5> LinkedIn</h5></a> 
  
    
    
   

  </footer>
      </div>
  );
}



export default App;
