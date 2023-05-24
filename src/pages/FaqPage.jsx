import { Link } from "react-router-dom";
import "../styles/faq.css"

export function FaqPage(){
  return (
    <div className="faq">
      <h1>FAQ</h1>
      <div>Hello! Nothing to see here...yet!</div>
      <Link to="/" className="sign-in">Back to Sign in!</Link>
    </div>
  );
}
