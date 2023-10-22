import { useState } from 'react';

const Filter = (props) => {
  return (
    <div>
      <p>filter shown with <input value = {props.value} onChange = {props.onChange}/> </p>
    </div>
  );
};

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
);

const Name = (props) => {
  return (
    <div>
      <p>name: <input value = {props.value} onChange = {props.onChange}/> </p>
    </div>
  );
};

const Number = (props) => {
  return (
    <div>
      <p>number: <input value = {props.value} onChange = {props.onChange}/> </p>
    </div>
  );
};


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

// <Button handleClick={() => setToValue(1000)} text="thousand" />
//

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter value = {searchNumber} onChange={handleSearchChange} />      
        <h3>Add a new</h3>
      <form>
        <div>
          <Name value={newName} onChange={handleNameChange} />
          <Number value={newNumber} onChange={handleNumberChange} />
          <Button handleClick={handleAdd} text="Add" />
        </div>
      </form>
      <h2>Numbers</h2>
        {newSearchNumber.map((person) => (
          <p>{person.name} {person.number}</p>
        ))}
    </div>
  );
};

//<div>
  //    <h2>Phonebook</h2>

    //  <Filter ... />

      //<h3>Add a new</h3>

      //<PersonForm 
        //...
      ///>

      // <h3>Numbers</h3>

      // <Persons ... />
      //</div>
export default App;
