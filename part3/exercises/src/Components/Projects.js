import projects from '../data.json';
import { useState } from 'react';

function MyProjects () {
    const [index, setIndex] = useState(0);
    let containedItem = projects[index];

    function handleClick() {
        index < projects.length - 1 ? setIndex(index + 1) : setIndex(0);
    };

    return (
        <>
            <button onClick={handleClick}>Next</button>
            <div>
                <h2>{containedItem.name}</h2>
                <h3>{containedItem.location}</h3>
                <h3>{containedItem.holes}</h3>
                <h3>{containedItem.coolestObstacle}</h3>
            </div>
        </>
        
    );
};

export default MyProjects;