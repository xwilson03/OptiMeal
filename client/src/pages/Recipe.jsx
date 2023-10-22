import "../styles/App.css"
import "../styles/Recipe.css"
import mm_food from "../assets/mm_food.jpeg"; 
import RecipeDetails from "../components/RecipeDetails";
const name = "Name of Recipe";



function Recipe(){
    return (
        <div className="recipe">
            <h1 className="title_header">Recipe for {name}</h1>
            <div className="recipe_info">
                <img className="food_img" src={mm_food} alt="Display Image for Recipe"></img>
                <RecipeDetails></RecipeDetails>
            </div>
        </div>
    )
}

export default Recipe;