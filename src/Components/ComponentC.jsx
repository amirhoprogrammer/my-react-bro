import "./components.css";
import ComponenetD from "./ComponentD.jsx";
//function ComponenetC(props) {
function ComponenetC() {
  return (
    <div className="box">
      <h1>ComponentC</h1>
      {/*<ComponenetD user={props.user} />*/}
      <ComponenetD />
    </div>
  );
}
export default ComponenetC;
