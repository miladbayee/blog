import "./auther-info.css";
import avatar from "../../assets/images/avatar.png";

const AutherInfo = ({ auther, postsNumber }) => {
  return (
    <div className="auther__info">
      <div className="auther__info__img">
        <img src={avatar} alt={`${auther} avarta`} />
      </div>
      <h4>{auther}</h4>
      <p>
        <span>Number of posts : </span>
        <span>{postsNumber}</span>
      </p>
    </div>
  );
};

export default AutherInfo;
