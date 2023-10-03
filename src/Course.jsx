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

export default Course