const Part = (props) => {
  return (
    <>
      <p>
        {props.part.name} {props.exercises}
      </p>
    </>
  );
};

export default  Part
