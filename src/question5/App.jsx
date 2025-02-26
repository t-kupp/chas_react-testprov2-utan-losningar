// 5. Skapa Custom Hook för API-anrop 3p
// Målet med denna uppgift är att skapa en custom
// hook i React, useFetchData, för att hämta data från
//en angiven URL. Din hook ska enbart hantera datahämtning och laddningsstatus.

// Skapa en custom hook som heter: useFetchData, som tar en URL som argument
// och använder fetch för att hämta data.
// Hooken ska returnera ett objekt med två egenskaper: data (datan som hämtats)
// och isLoading (en boolean som indikerar om datahämtningen pågår).

// Använd https://jsonplaceholder.typicode.com/users som test-URL för att demonstrera
// hur din hook kan användas i en komponent för att visa användardata och en
// laddningsindikator.

// 5. Create Custom Hook for API calls 3p
// The goal of this task is to create a custom
// hook in React, useFetchData, to fetch data from
//a specified URL. Your hook should only handle data retrieval and load status.

// Create a custom hook called: useFetchData, which takes a URL as an argument
// and uses fetch to retrieve the data.
// The hook should return an object with two properties: data (the data fetched)
// and isLoading (a boolean indicating whether data retrieval is in progress).

// Use https://jsonplaceholder.typicode.com/users as test URL to demonstrate
// how your hook can be used in a component to display user data and a
// loading indicator.

import useFetchData from '../hooks/useFetchData';

function App() {
  const { data, isLoading } = useFetchData('https://jsonplaceholder.typicode.com/users');
  console.log(data);

  return (
    <div>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td className='p-1'>{user.name}</td>
                <td className='p-1'>{user.email}</td>
                <td className='p-1'>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
