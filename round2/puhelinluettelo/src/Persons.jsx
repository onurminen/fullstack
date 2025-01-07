/* eslint-disable react/prop-types */

const Persons = ({persons, filter}) => {
  return (
    <div>
      {persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
        .map(person => (
          <p key={person.name}>{person.name} {person.num}</p>
      ))}
    </div>
  )
}

export default Persons;