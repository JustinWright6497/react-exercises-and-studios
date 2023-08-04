import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {
    let authorLink = "https://pinchofyum.com/";
    let authorPhoto = "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQi4a8NzG1ocCbgUUZxxDLocQwDQvhod4gHC3aRRg3juK0LDsZHECn7AwMJq8WUmPFLai9IJhY5YWNLRys";
    let authorName = "Justin Wright";

    return (
        <div className = {styles.recipeAuthorBlock}>
            <div>
                <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
            </div>
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Blog name</a>
            </div>
        </div>
    );
};

class RecipeDescription extends React.Component {
    render () {
        return (
            <div> 
                <div>
                    <h1>Beef Stew</h1>
                    <p>This is for Bew Stew</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    };
};

export default RecipeDescription;