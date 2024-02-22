import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-5 items-center sm:justify-between py-8 container mx-auto px-5">
      <div className="flex gap-x-5 font-medium">
        <div>@ 2023 asdad</div>
        <div>Terms</div>
        <div>Services</div>
        <div>Privacy</div>
      </div>
      <div className="flex gap-x-5 justify-center items-center">
        <FaTwitter />
        <AiFillInstagram />
        <FaLinkedin />
      </div>
    </div>
  );
};

export default Footer;
