import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const existingPerson = persons.find(person => person.name === newName);
    if (existingPerson) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const personObject = {
      name: newName,
      number: newNumber
    };

    setPersons([...persons, personObject]);
    setNewName('');
    setNewNumber('');
  };

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    React.createElement('div', null,
      React.createElement('h2', null, 'Phonebook'),
      React.createElement('div', null,
        'filter shown with ',
        React.createElement('input', { value: searchQuery, onChange: handleSearchChange })
      ),
      React.createElement('form', { onSubmit: addPerson },
        React.createElement('div', null,
          'name: ',
          React.createElement('input', { value: newName, onChange: handleNameChange })
        ),
        React.createElement('div', null,
          'number: ',
          React.createElement('input', { value: newNumber, onChange: handleNumberChange })
        ),
        React.createElement('div', null,
          React.createElement('button', { type: 'submit' }, 'add')
        )
      ),
      React.createElement('h2', null, 'Numbers'),
      React.createElement('ul', null,
        personsToShow.map(person =>
          React.createElement('li', { key: person.name }, `${person.name} ${person.number}`)
        )
      )
    )
  );
};

export default App;
