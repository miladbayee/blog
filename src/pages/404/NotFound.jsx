import "./notfound.css";
import notfoundImg from "../../assets/images/404.png";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const {push} = useHistory();

  const handleClick=()=>{
      push('/')
  }

  return (
    <div className="not-found">
      <img src={notfoundImg} alt="" />
      <button className='not-found__btn' onClick={handleClick}>home page</button>
    </div>
  );
};

export default NotFound;
