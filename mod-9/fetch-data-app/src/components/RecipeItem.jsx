function RecipeItem({ recipe }) {
  return (
    <div>
      <h3>{recipe.name}</h3>
      <img src={recipe.image} 
      alt={recipe.name} 
      width={'500px'} />
    </div>
  );
}

export default RecipeItem;
