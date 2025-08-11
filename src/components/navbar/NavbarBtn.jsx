import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className=" px-4 py-2 rounded-full text-xl font-bold font-body text-white border-pink border flex items-center gap-1 bg-pink transition-all duration-500 hover:scale-110 hover:border-plubre cursor-pointer hover:shadow-pink">
      <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
        Contact Me
      </Link>
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
