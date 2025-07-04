function ProfilePicture() {
  const imageUrl = "./src/assets/Picamir.png";
  const handleClick = (e) => (e.target.style.display = "none");
  /*const handleClick = () => console.log("ouch!");
  return <img src={imageUrl} onClick={handleClick}></img>;*/
  return <img src={imageUrl} onClick={(e) => handleClick(e)}></img>;
}
export default ProfilePicture;
