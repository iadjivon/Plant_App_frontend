import React from 'react';

const Form = (props) =>{
    const [formData, setFormData] = React.useState(props.plant);

//FUNCTIONS
const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    props.history.push("/"); //Push back to display page
  };

const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text" 
            name = "plant_name" 
            placeholder=" scientific name of plant" 
            value={formData.plant_name} 
            onChange={handleChange}/>
       
        <input 
            type="text" 
            name = "description" 
            placeholder=" brief description of plant" 
            value={formData.description} 
            onChange={handleChange}/>


        <input 
            type="text" 
            name = "image" 
            placeholder=" image of plant" 
            value={formData.image} 
            onChange={handleChange}/>

        <input 
            type="text" 
            name = "pet_name" 
            placeholder=" pet name for plant" 
            value={formData.pet_name} 
            onChange={handleChange}/>

        <input type="submit"  value= "Submit"/>
       
        
    </form>
  );
};

export default Form;


