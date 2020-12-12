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
      <div className="form"> 
    <form onSubmit={handleSubmit} className="form">
        <input
            type="text" 
            name = "plant_name" 
            placeholder=" The scientific name of this plant" 
            value={formData.plant_name} 
            onChange={handleChange}/>
       
        <input 
            type="text" 
            name = "image" 
            placeholder=" Insert a link to the image of this plant" 
            value={formData.image} 
            onChange={handleChange}/>

        <input 
            type="text" 
            name = "pet_name"
            placeholder=" Add your pet name for this plant" 
            value={formData.pet_name} 
            onChange={handleChange}/>

        <input
            type="text" 
            name = "description" 
            placeholder=" Write a brief description about this plant" 
            value={formData.description} 
            onChange={handleChange} className="textarea"/>

        <input type="submit"  value= "Submit" className="submit"/>
       
        
    </form>
    </div>
  );
};

export default Form;


