import React from 'react';

const Display = (props) => {
    // const plantData = (data) => {
    //     const emptyPlant = {
    //     plant_name: "",
    //     description: "",
    //     image: "",
    //     pet_name: "",
    // }

    // data[0].plants.forEach((plant) => {
    //     emptyPlant.description.push(plant.description)
    // })
// }

// FETCHING DATA FROM THE API 

// const getPlants = async () => {
//     const response = await fetch("http://localhost:3000/plants")
//     const data = await response.json()
//     console.log(data)
// }

// React.useEffect(()=>{
//     getPlants()
// }, [])




        return (
            <>
            <h1> plant app </h1>
            {/* <h1>{this.data.plants}</h1> */}
            </>
        )
    }


export default Display;