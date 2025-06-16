function Button2() {
  const style2 = {
    backgroundColor: "bisque",
    color: "blue",
    padding: "10px 20px",
    borderRadius: "5px",
    webkitBorderRadius: "5px",
    mozBorderRadius: "5px",
    msBorderrRadius: "5px",
    oBorderRadius: "5px",
    border: "none",
    cursor: "pointer",
    justifyContent: "center",
    display: "flex",
    margin: "10px 10px",
  };
  //let count = 0;
  //const handleClick = () => console.log("Ouch!");
  //const handleClick2 = (name) => console.log(`${name} stop clicking me`);
  /*const handleClick2 = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} time/s`);
    } else {
      console.log(`${name} stop clicking me `);
    }
  };*/
  const handleClick2 = (e) => (e.target.textContent = "yes");
  //console.log(e);
  return (
    /*<button type="Button" style={style2}>
      click here!
    </button>
    <button onClick={handleClick} style={style2}>
      click me
    </button>*/
    <button onClick={(e) => handleClick2(e)} style={style2}>
      click me
    </button>
  );
}
export default Button2;
