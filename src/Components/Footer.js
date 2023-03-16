import { FaHeart } from 'react-icons/fa';
import './Header.css'

const Footer = () => {
  return (
    <div className="footer">
      Created By <i className="FaHeart"><FaHeart /></i>
      {/* <i className="fa-solid fa-heart"></i> */}
      {/* <a href="https://www.linkedin.com/in/chetannada/" target="_blank"> */}
      <h4>
        Shubham
      </h4>
      <i className="fa-solid fa-copyright"></i>2023
      <strong>
        Food<span>Fire</span>
      </strong>
    </div>
  );
};

export default Footer;