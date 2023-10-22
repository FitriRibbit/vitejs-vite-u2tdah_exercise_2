import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchNumber, setFilterNumber] = useState('');
  const [newSearchNumber, setFilterNewNumber] = useState(persons);

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

  const handleSearchChange = (event) => {
    const searchItem = event.target.value;
    setFilterNumber(searchItem);
    const filterNumber = persons.filter((person) => (
      person.name.toLowerCase().includes(searchItem.toLowerCase())
    ))
    setFilterNewNumber(filterNumber);
  };


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={searchNumber} onChange={handleSearchChange} /> <br />
      </div>
      <h2>add a new</h2>
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
        {newSearchNumber.map((person) => (
          <p>{person.name} {person.number}</p>
        ))}
    </div>
  );
};

export default App;
