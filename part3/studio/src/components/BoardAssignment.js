import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [{label: "buffalo sauce", value: "Buffalo Sauce Board"}, {label: "macaroni", value: "Macaroni Board"}, {label: "pasta", value: "Pasta Board"}];

   const handleChange = (event) => {
      setBoardName(event.target.value);
   }

   const [boardName, setBoardName] = useState('no boards yet!');

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
      { boards.map((board) => <option value={board.value}>{board.label}</option>) }
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}