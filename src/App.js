import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from "./components/NavBar";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
      .then(response => response.json())
      .then(data => {
        setRecipes(data.meals);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="App app-color">
      <NavBar/>
      <div className="title">
        <h1>Foodge</h1>
        <h2>your online cookbook.</h2>
      </div>
      <div id="recipeContainer">
        {recipes.map(recipe => (
          <div className="recipe" key={recipe.idMeal}>
            <h3>{recipe.strMeal}</h3>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <div>
              {recipe.strInstructions.split('. ').map((sentence, index) => (
                <p key={index}>{sentence}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
