/* eslint-disable react/no-unescaped-entities */
import { FaDownload } from 'react-icons/fa';
import resumePDF from '../../../public/resume/resume.pdf';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Typed from 'react-typed';

const Home = () => {
  

  

  const handleDownload = () => {
    const url = resumePDF;
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'resume.pdf';
    anchor.setAttribute('target', '_blank');
    anchor.setAttribute('rel', 'noopener noreferrer');
    anchor.click();
  };

  return (
    <div name="home" className="bg-gradient-to-r from-black via-gray-900 to-gray-700 lg:w-full h-screen">
      <div className="lg:max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-green-600 text-lg">Hi, my name is</p>
        <h1 className="text-4xl lg:text-5xl font-bold text-[#ccd6f6]">
          Tanvir Khondoker
        </h1>
        <h2 style={{textShadow:"0 0 9px blue"}} className=" text-xl lg:text-3xl  font-bold text-[#ccd6f6]">
          <Typed
            strings={[
              'I am a Full Stack Developer',
              'I am a WebApp Developer',
              'I am a MERN Developer',
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a junior full-stack developer specializing in building and designing user-friendly digital experiences. My current focus is on developing responsive full-stack web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack. I'm passionate about learning and expanding my skills in front-end and back-end development to create exceptional web applications.
        </p>
        <div className="lg:flex gap-2">
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-600 hover:border-green-600">
            <Link to="projects" smooth={true} duration={700}>
              View Projects
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
          <button onClick={handleDownload} className="text-white group border-2 px-6 py-3 my-2 flex items-center gap-2  hover:bg-green-600 hover:border-green-600">
            Download Resume <FaDownload/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
