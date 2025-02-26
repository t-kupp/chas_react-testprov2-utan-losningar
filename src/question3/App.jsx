// 3. Välj Favoritfärg via Dropdown 3p
// Skapa två React-komponenter: ParentComponent och ChildComponent.
// ChildComponent ska innehålla en dropdown-lista (select i html) där
// användaren kan välja sin favoritfärg.
// När en färg väljs, skicka detta val till ParentComponent genom en callback-funktion.
// ParentComponent ska visa användarens valda favoritfärg.

import { useState } from 'react';

// I ChildComponent, implementera ett <select>-element med några färgalternativ.
// Använd en callback-funktion för att meddela ParentComponent om användarens val.
// ParentComponent ska ta emot och visa det valda färgalternativet.

function App() {
  const [color, setColor] = useState('');
  return (
    <div>
      <ParentComponent color={color} />
      <ChildComponent setColor={setColor} />
    </div>
  );
}

function ParentComponent({ color }) {
  return <p>Users favorite color is: {color}</p>;
}

function ChildComponent({ setColor }) {
  return (
    <select className='border rounded' defaultValue={'default'} onChange={(e) => setColor(e.target.value)}>
      <option disabled value='default'>
        Choose a color...
      </option>
      <option value='Red'>Red</option>
      <option value='Green'>Green</option>
      <option value='Blue'>Blue</option>
      <option value='Orange'>Orange</option>
      <option value='Pink'>Pink</option>
    </select>
  );
}

export default App;
