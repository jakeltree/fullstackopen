const Header = (props) => {
  (
    <h1> 
      {props.course} 
    </h1>
  )
}

const Content = (props) => {
  return (
    <> 
      <p> 
        {props.part[0].name} {props.part[0].exercises}
      </p>
      <p>
        {props.part[1].name} {props.part[1].exercises}
      </p>
      <p>
        {props.part[2].name} {props.part[2].exercises}
      </p> 
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises {props.exercises}
      </p>
    </>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    part: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content part={course.part} />
      <Total exercises={course.part[0].exercises+course.part[1].exercises+course.part[2].exercises} />
    </div>
  )
}

export default App