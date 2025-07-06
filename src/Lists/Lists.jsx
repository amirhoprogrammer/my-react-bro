import List from "./List.jsx";
import "./list.css";
function Lists() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];
  const vegtables = [
    { id: 6, name: "potato", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 },
  ];
  return (
    <>
      <div className="list">
        <List items={fruits} category="Fruits" />
      </div>
      <div className="list">
        <List items={vegtables} category="Vegtables" />
      </div>
      <div className="list">
        {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      </div>
      <div className="list">
        {fruits.length > 0 && <List items={vegtables} category="Vegtables" />}
      </div>
    </>
  );
}
export default Lists;
