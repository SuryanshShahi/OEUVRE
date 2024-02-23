import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row text-secondary gap-5 items-center sm:justify-between py-8 max-w-[1140px] mx-auto px-5">
      <div className="flex gap-x-5 font-medium">
        <div>@ 2023 asdad</div>
        <div className="hover:text-white duration-500 cursor-pointer">
          Terms
        </div>
        <div className="hover:text-white duration-500 cursor-pointer">
          Services
        </div>
        <div className="hover:text-white duration-500 cursor-pointer">
          Privacy
        </div>
      </div>
      <div className="flex gap-x-5 justify-center items-center">
        <FaTwitter className="hover:rotate-[360deg] duration-500 cursor-pointer" />
        <AiFillInstagram className="hover:rotate-[360deg] duration-500 cursor-pointer" />
        <FaLinkedin className="hover:rotate-[360deg] duration-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
