import "./card.css";

import { Link } from "react-router-dom";
import CardFooter from "../CardFooter";
import PlaceholderLoader from "../PlaceholderLoder";

const Card = ({ ...props }) => {
  const { id, title, img, description } = props;
  return (
    <li className="card">
      <div className="card__header">
        {img.thumbnail ? (
          <img src={img.thumbnail} alt={title} />
        ) : (
          <PlaceholderLoader />
        )}
      </div>
      <div className="card__body">
        <h3>
          <Link to={`post/${id}`}>{title}</Link>
        </h3>
        <p>{description}</p>
      </div>
      <CardFooter {...props} />
    </li>
  );
};

export default Card;
