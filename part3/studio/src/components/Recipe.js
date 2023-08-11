const RecipeAuthor = () => {
   let authorLink = "https://www.sargento.com/";
   let authorPhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2lxTkO2jmp9Ue8_8wwE7wBlqQQFNIzfUBwLLJjr_JPj0pMvZqOtDWMVet1DUqfhzH-h4&usqp=CAU";
   let authorName = "Sargento";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["1 lb. uncooked shell pasta", "1 cup 1% milk", "16 ozs. cream chesse, softened", "1/2 cup pasta water (from cooking macaroni)", "1/2 cup buffalo wing hot sauce"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Buffalo Chicken Mac & Cheese Casserole</h1>
            <p>How to make a great buffalo chicken macaroni and cheese!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.sargento.com/assets/Uploads/Recipe/Image/BuffaloChickenMac_FillWzExNzAsNTgzXQ__FillWzExNzAsNTgzXQ.png" alt="Buffalo Chicken Mac & Cheese Casserole" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}