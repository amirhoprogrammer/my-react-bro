import Picamir from "./assets/Picamir.png";
import "./index.css";
function Card() {
  return (
    <div className="Card">
      <img className="Card-img" src={Picamir} alt="my picture" />
      <h2 className="Card-title">amirhossein</h2>
      <p className="Card-text">I make program for website</p>
    </div>
  );
}
export default Card;
