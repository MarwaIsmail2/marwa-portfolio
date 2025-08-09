import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="marwasmail221@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="0998536439" Image={FiPhone} />
      <SingleInfo text="Damascus, Syria" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
