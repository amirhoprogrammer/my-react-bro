import Student from "./Student.jsx";
function Students() {
  return (
    <div className="students">
      <Student name="Ali" age={34} isStudent={true} />
      <Student name="Ali" age="ghi" isStudent={true} />
      <Student />
    </div>
  );
}
export default Students;
