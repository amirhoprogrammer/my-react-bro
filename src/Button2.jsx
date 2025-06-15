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
  return (
    /*<button type="Button" style={style2}>
      click here!
    </button>*/
    <button onClick={cli} style={style2}>
      click me
    </button>
  );
}
export default Button2;
