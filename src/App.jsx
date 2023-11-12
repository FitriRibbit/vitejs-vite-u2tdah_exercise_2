import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './component/Filter.jsx'
import PersonForm from './component/PersonForm.jsx'
import Persons from './component/Persons.jsx'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchNumber, setFilterNumber] = useState('');
  const [newSearchNumber, setFilterNewNumber] = useState(persons);

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes')


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
        <Filter value = {searchNumber} onChange={handleSearchChange} />      
        <h3>Add a new</h3>
        <PersonForm  onSubmit={handleAdd} newName = {newName} handleNameChange = {handleNameChange} newNumber = {newNumber} handleNumberChange = {handleNumberChange} />
      <h2>Numbers</h2>
        <Persons people={newSearchNumber}/>
    </div>
  );
};

export default App;
