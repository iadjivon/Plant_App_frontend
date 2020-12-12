import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const Display = (props) => {
    const {plants}=props

    const loaded = () => (

        <div className="display-main-2">
        
        {plants.map((plant, index)=>(
            <div className="display">
        <Card style={{ width: '20rem' }}>
        <Card.Body>
              <ListGroup className="list-group-flush"> 
                <ListGroupItem>
                  <h2>{plant.pet_name}</h2>
                </ListGroupItem>
              </ListGroup>

              </Card.Body>
             <Card.Img variant="top" src = {plant.image}/>
             <Card.Body>
             <Card.Title><a href ={ `/plants/${index}`}>
             {plant.plant_name}
              </a> </Card.Title>
              <Card.Text>
              {plant.description}
              </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush"> 
              <ListGroupItem>
                <h4 className="schedule">I need water every {3} days</h4>
              </ListGroupItem>
              </ListGroup>
              <Card.Body>

              </Card.Body>
             {/*------------ EDIT BUTTON------------- */}
             <Card.Body>
         
            <Button onClick ={()=>{props.selectPlant(plant);
            props.history.push("/edit")}} className="btn"> EDIT</Button>
            

              {/*------------ DELETE BUTTON------------- */}
              
             <Button onClick={()=> {props.deletePlant(plant);
            }} className="btn"> DELETE</Button>
            </Card.Body>

            
    </Card>
    
   
      
            </div>
        ))}
     
        </div>
      )
     

        const loading = <h1> Loading ... </h1>
       
      
       

    return  (plants.length >0 ? loaded(): loading)
    
       
     
    };      


export default Display;