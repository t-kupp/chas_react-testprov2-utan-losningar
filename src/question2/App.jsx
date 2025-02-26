// 2. Uppdatera E-post 3p
// Skapa en React-komponent för att visa och uppdatera användarens e-postadress.
// Från början visas användarens nuvarande e-postadress.
// Bredvid e-postadressen ska det finnas en "Redigera"-knapp.

import { useState } from 'react';

// När "Redigera" klickas, visa ett inputfält för att skriva in en ny e-postadress
// och byt "Redigera"-knappen till en "Spara"-knapp.
// När "Spara" klickas, uppdatera e-postadressen och visa den uppdaterade adressen.

function App() {
  const [email, setEmail] = useState('user@google.com');
  const [isEditing, setIsEditing] = useState(false);
  const [newEmail, setNewEmail] = useState('');

  return (
    <div className='flex items-center gap-2 h-screen p-8'>
      {!isEditing ? (
        <>
          <p className='w-48'>{email}</p>
          <button onClick={() => setIsEditing(true)}>Change</button>
        </>
      ) : (
        <>
          <input
            className='border rounded w-48'
            onChange={(e) => setNewEmail(e.target.value)}
            type='text'
            defaultValue={email}
          />
          <button
            onClick={(e) => {
              setEmail(newEmail);
              setIsEditing(false);
            }}
          >
            Save
          </button>
        </>
      )}
    </div>
  );
}

export default App;
