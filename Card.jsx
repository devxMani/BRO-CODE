import profilePic from "./assets/images.jpeg";
function Card() {
  return (
    <div className="card">

       <img className ='card-image' src={profilePic} alt="profile picture"></img>
      <h2 className="card-title">Bro Code</h2>
      <p className = "card-text" >I make youtube videos</p>
    </div>
  );
}
export default Card;

/* 1- this line imports a image from assests then stores into a
variable named profilePic.
2- this declared a fucntional component a way to define react components
3- inside the card fucntion - 
<div className="card"> ... </div>: This creates a div element with the class name card
div serves as the container for the card content.
4- export default Card; This exports the Card component
 as the default export from this module, 
 making it available for use in other parts of the application.
*/

