// 1. Kommentarslista 3p
// Skapa en React-komponent för att hantera och visa en lista
// med kommentarer. Användare ska kunna lägga till och ta bort kommentarer.
// Listan är tom från början.
// Skapa Ett inputfält och en "Lägg till"-knapp för nya kommentarer.
// och en "Ta bort"-knapp bredvid varje kommentar för att ta bort den från listan.

import { useState } from 'react';

export default function App() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  function handleChange(text) {
    setNewComment(text);
  }

  function addComment() {
    if (newComment.trim() === '') return;
    setComments([...comments, newComment.trim()]);
  }

  function deleteComment(index) {
    const filteredComments = comments.filter((comment, i) => i != index);
    setComments(filteredComments);
  }

  return (
    <div className='h-screen p-8'>
      <div className='flex'>
        <input
          className='border px-2 rounded'
          placeholder='Add a new comment...'
          type='text'
          onChange={(e) => handleChange(e.target.value)}
        />
        <button onClick={addComment}>Add</button>
      </div>
      <div>
        {comments.map((comment, index) => (
          <div key={index} className='flex items-center gap-2'>
            <p>{comment}</p>
            <button onClick={() => deleteComment(index)}>Del.</button>
          </div>
        ))}
      </div>
    </div>
  );
}
