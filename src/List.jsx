function List(props) {
  //const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
  /*const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];*/
  //fruits.sort((a, b) => a.name.localeCompare(b.name)); //alphabatical
  //fruits.sort((a, b) => b.name.localeCompare(a.name)); //reverse alphabatical
  //fruits.sort((a, b) => a.calories - b.calories); // numeric
  //fruits.sort((a, b) => b.calories - a.calories); // reverse numeric

  //const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
  //const highCalFruits = fruits.filter((fruit) => fruit.calories < 100);
  /*const listItems = lowCalFruits.map((lowCalFruit) => (
    <li key={lowCalFruit.id}>
      {lowCalFruit.name} : &nbsp; <b>{lowCalFruit.calories}</b>
    </li>
  ));
  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} : &nbsp; <b>{fruit.calories}</b>
    </li>
  ));*/
  const itemList = props.items;
  const category = props.category;
  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name} : &nbsp; <b>{item.calories}</b>
    </li>
  ));
  //return <ol>{fruits}</ol>;
  //return <ol>{listItems}</ol>;
  return (
    <>
      <h3>{category}</h3>
      <ol>{listItems}</ol>
    </>
  );
}
export default List;
