import './loader.css'
import loader from "../../assets/images/loader.gif";

const Loader = () => {
  return (
    <div className='loader'>
      <img src={loader} alt="loader" />
    </div>
  );
};

export default Loader;
