const Course = ({ course }) => {
  const total = course.parts.reduce((a,b) => a + b.exercises, 0);
  return (
    <div>
      <h1> {course.name} </h1>
      {course.parts.map((part) => (
        <p>
          {part.name} {part.exercises}
        </p>
      ))}
      <p><b>Total of {total} exercises </b></p>
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
