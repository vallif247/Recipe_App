import React, { useState } from "react";
import "./RecipeCreate.css";

function RecipeCreate({addRecipe}) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  const [formData, setFormData] = useState({ ...initialFormState })
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  }
  
  const handleCreate = (event) => {
    event.preventDefault()
    addRecipe(formData)
    setFormData(initialFormState)
  }

  return (
    <div>
    <form name="create" onSubmit={handleCreate}>
      <table>
        <tbody>
          <tr>
            <td>
              <input type="text" name="name" id="name" placeholder="Name" onChange={handleChange} value={formData.name} required="true"></input>
            </td>
            <td>
            <input type="text" name="cuisine" id="cuisine" placeholder="Cuisine" onChange={handleChange} value={formData.cuisine} required="true"></input>
            </td>
            <td>
            <input type="text" name="photo" id="photo" placeholder="URL" onChange={handleChange} value={formData.photo} required="true"></input>
            </td>
            <td>
            <textarea type="text" name="ingredients" id="ingredients" placeholder="Ingredients" onChange={handleChange} value={formData.ingredients} required="true"></textarea>
            </td>
            <td>
            <textarea type="text" name="preparation" id="preparation" placeholder="Preparation" onChange={handleChange} value={formData.preparation} required="true"></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
   </div>
  );
}

export default RecipeCreate;
