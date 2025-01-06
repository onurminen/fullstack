import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    console.log("add clicked");
    const newContact = {name: newName};
    console.log(newContact);
    setPersons(persons.concat(newContact))
    console.log([...persons, newContact]);
  }

  const handleNameChange = (event) => {
    console.log("name change handled");
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit" onClick={addContact}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => (
          <p key={person.name}>{person.name}</p>
        ))}
      </div>
      <div>debug: {newName}</div>
    </div>
  )

}

export default App