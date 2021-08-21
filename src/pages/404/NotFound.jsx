import './notfound.css'
import notfoundImg from '../../assets/images/404.png'

const NotFound = () => {
    return (
        <div className='not-found'>
           <img src={notfoundImg} alt="" />
        </div>
    )
}

export default NotFound
