import Student from "./Student.jsx";
import "./student.css";
function Students() {
  return (
    <div>
      <div className="student1">
        <Student name="Ali" age={34} isStudent={true} />
      </div>
      <div className="student2">
        <Student name="Ali" age="ghi" isStudent={true} />
      </div>
      <div className="student3">
        <Student />
      </div>
    </div>
  );
}
export default Students;
