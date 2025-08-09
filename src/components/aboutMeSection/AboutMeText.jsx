import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-pink mb-10">About Me</h2>
      <p>
        I’m Marwa, a Frontend Developer with 2 years of experience building responsive and scalable web applications using JavaScript and TypeScript. Skilled in React, Next.js, Tailwind CSS, React Query, Redux, and Zustand. Proficient in leveraging AI-assisted tools like GitHub Copilot to improve code quality and productivity. Experienced with Git and GitLab for version control and collaborative workflows. Self-motivated, detail-oriented, and committed to writing clean, maintainable code.maintainable code.
      </p>
      <button className="border border-tote  bg-pink rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-pink transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-tote transition-all duration-500 "
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
