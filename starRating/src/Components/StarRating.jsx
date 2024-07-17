import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [text, setText] = useState("");
  const [review, setReview] = useState("");

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleMouseMove = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  const handleText = () => {
    setText(
      <div className="alert alert-success" role="alert">
        Review Submitted Successfully!!!!!
      </div>
    );
  };

  return (
    <center>
      <div>
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseMove(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={40}
            />
          );
        })}
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h6>Enter Your Review Here</h6>
        </label>
        <textarea
          className="tex"
          id="exampleFormControlTextarea1"
          rows="3"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <input
          type="submit"
          onClick={() => handleText()}
          className="btn btn-primary mt-3"
        />
      </div>
      {text}
    </center>
  );
};

export default StarRating;
