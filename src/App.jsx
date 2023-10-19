import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
  ]);
  const [newName, setNewName] = useState('');

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newPersons = persons.concat( { name: newName } )
    setPersons(newPersons);
    setNewName('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button onClick={handleAdd}>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map((item) => (
          <p>{item.name}</p>
        ))}
    </div>
  );
};

export default App;
