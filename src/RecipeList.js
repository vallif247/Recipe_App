import React from "react";
import Recipe from "./Recipe";

function RecipeList({recipes, setRecipes}) {
  
  const deleteHandler = (event) => {
    const newRecipes = [...recipes]
    newRecipes.splice(event.target.value, 1)
    setRecipes(newRecipes)
  }
          
      
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
         {recipes.map((recipe, i) => (
      <Recipe i={i} recipe={recipe} deleteHandler={deleteHandler} />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default RecipeList;
