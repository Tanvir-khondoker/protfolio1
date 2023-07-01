import { CiLocationOn } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 pt-16 bg-[#0b1b31]  text-gray-300">
        <div className="flex sm:flex-col md:flex-row justify-between items-center gap-20 mx-auto">
        <div>
    
    <p><span className="text-xl font-bold">Md. Tanvir Hossain Khondoker</span>.<br/>Providing professional web solutions tailored to your unique needs</p>
    <p className="mt-1 flex gap-2 items-center"><CiLocationOn/>Barishal,Bangladesh</p>
  </div> 
  <div className="lg:ml-[600px] md:ml-[220px] flex flex-col justify-center">
    <span className="footer-title">Social</span> 
    <div className=" mt-2 grid grid-flow-col gap-2">
      <Link to="https://github.com/Tanvir-khondoker">
         <FiGithub className="w-[30px] h-[30px]"/>
      </Link>
      
      <Link to="https://www.linkedin.com/in/md-tanvir-hossain-khondoker-069856230/">
        <BsLinkedin className="w-[30px] h-[30px]"/>
      </Link>
      <Link to="https://web.facebook.com/profile.php?id=100009848400438">
        <AiOutlineFacebook className="w-[30px] h-[30px]"/>
      </Link>
    </div>
  </div>
</div>
    </footer>
  );
};

export default Footer;
