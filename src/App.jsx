import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newPersons = persons.concat( { name: newName, number: newNumber } )
    persons.forEach((item) => {
      if (item.name === newName) {
        alert(`${newName} is already added to phonebook`)
        newPersons.pop();
      }
    });
    setNewName('');
    setNewNumber('');
    setPersons(newPersons);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} /> <br />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button onClick={handleAdd}>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map((item) => (
          <p>{item.name} {item.number}</p>
        ))}
    </div>
  );
};

export default App;
