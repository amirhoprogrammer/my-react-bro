import PropTypes from "prop-types";

function Student(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "yes" : "no"}</p>
    </div>
  );
}
//Debugging
Student.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};
/*Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};*/
Student.defaultProps = {
  name: "mohammed",
  age: 33,
  isStudent: true,
};
export default Student;
