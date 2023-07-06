import React, { useState } from "react";

function Recipe({recipe, i, deleteHandler}) {

    return (
      <tr id="recipe" index={i}>
        <td index={i}><p id="name">{recipe.name}</p></td>
        <td index={i}><p id="cuisine">{recipe.cuisine}</p></td>
        <td><img id="photo" src={recipe.photo}/></td>
        <td index={i}><p id="ingredients">{recipe.ingredients}</p></td>
        <td index={i}><p id="preparation">{recipe.preparation}</p></td>
        <td index={i}><button value={i} name="delete" onClick={deleteHandler}>Delete</button></td>
      </tr>
    )
}


export default Recipe