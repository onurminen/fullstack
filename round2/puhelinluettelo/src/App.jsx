import { useState, useEffect } from 'react'
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log("use effect");
    axios.get("http://localhost:3001/persons")
    .then(response => {
      console.log("promise fulfilled");
      setPersons(response.data)
    })
  }, [])
  console.log("render", persons.length, "persons");

  const addContact = (event) => {
    event.preventDefault()
    console.log("add clicked");
    const newContact = {name: newName, num: newNum};
    if (!persons.some(per => per.name === newContact.name)) {
      console.log(newContact);
      setPersons(persons.concat(newContact))
      console.log([...persons, newContact]);
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  const handleNameChange = (event) => {
    console.log("name change handled");
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    console.log("num changed");
    setNewNum(event.target.value);
  }

  const newFilter = (event) => {
    console.log("filtering");
    setFilter(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={newFilter}></Filter>
      <h2>add a new</h2>
      <PersonForm nameChange={handleNameChange} numChange={handleNumChange} addContact={addContact}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter}/>
    </div>
  )

}

export default App