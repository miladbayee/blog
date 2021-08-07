import "./card-footer.css";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/images/avatar.png";

const CardFooter = ({ ...props }) => {
  const { auther, date, readTime } = props;

  const editAuther = useMemo(
    () => auther.toString().split(" ").join("-"),
    [auther]
  );

  return (
    <div className="card__footer">
      <div className="card__footer__auther">
        <div>
          <img src={avatar} alt={`${auther} avatar`} />
        </div>
        <Link to={`/auther/${editAuther}`}>
          <p>{auther}</p>
        </Link>
      </div>
      <div>
        <span>{date}</span>
        <span>.</span>
        <span>{`${readTime} min read`}</span>
      </div>
    </div>
  );
};

export default CardFooter;
