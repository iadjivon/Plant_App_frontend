import React from 'react';


const Show = (props) => {
    const plant = props.plant

    return (
        <div>
            <br></br>
            <h1 className="form-title">This page is under construction please check back later</h1>
            <br></br>
            <h3>{plant.plant_name}</h3>
            <h5>{plant.description}</h5>
            <img src={plant.image} />

        </div>)
    
}

export default Show;