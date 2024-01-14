const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Content = (props) => {
  return ( 
    <div>
      {props.parts.map(part => 
        <Part key={part.id} name={part.name} exercises={part.exercises} />
        )}
    </div>
  )
}

const Header = ({header}) => {
  return (
    <h2>
      {header}
    </h2>
  )
}

const Total = ({parts}) => {
  const total = parts.reduce( (acc, part) => acc + part.exercises, 0)
  return (
    <b>total of {total} exercises</b>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header header={props.name} />
      <Content parts={props.parts} />
      <Total parts={props.parts} />
    </div>
  )
}

export default Course