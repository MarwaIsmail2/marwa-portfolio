import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4 justify-center">
      <SingleContactSocial link="https://www.linkedin.com/in/marwa-ismail-bbb71b332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/MarwaIsmail2" Icon={FiGithub} />
     
    </div>
  );
};

export default ContactSocial;
