/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import express from "../../assets/express.png";
import node from "../../assets/node.png";
import github from "../../assets/github.png";
import mongo from "../../assets/mongo.png";
import tailwind from "../../assets/tailwind.png";
import bootstrap from "../../assets/bootstrap.png";
import firebase from "../../assets/firebase.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300 ">
      {/* container */}
      <div className="mx-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <p className="text-4xl font-bold inline border-b-4 border-green-600">
          Skills
        </p>
        <p className="py-4"> These are the technologies I've worked with</p>
      </div>
      <div className="w-[85%] lg:w-[70] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-center py-8">
        <div className="shadow-md  shadow-[#040c16] hover:scale-110 duration-500 rounded-3xl ">
          <img
            className="w-20 mx-auto rounded-lg"
            src={javascript}
            alt="js icon"
          />
          <p className="my-4">Javascript</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img
            className="w-20 mx-auto rounded-lg"
            src={tailwind}
            alt="js icon"
          />
          <p className="my-4">Tailwind CSS</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img
            className="w-20 mx-auto rounded-lg"
            src={bootstrap}
            alt="js icon"
          />
          <p className="my-4">Bootstrap</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img
            className="w-20 mx-auto rounded-lg"
            src={react}
            alt="js icon"
          />
          <p className="my-4">React JS</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img
            className="w-20 mx-auto rounded-lg"
            src={node}
            alt="js icon"
          />
          <p className="my-4">Node JS</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img
            className="w-20 mx-auto rounded-lg"
            src={express}
            alt="js icon"
          />
          <p className="my-4">Express JS</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img
            className="w-20 mx-auto rounded-lg"
            src={mongo}
            alt="js icon"
          />
          <p className="my-4">MongoDB</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img
            className="w-20 mx-auto rounded-lg"
            src={firebase}
            alt="js icon"
          />
          <p className="my-4">FireBase</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img
            className="w-20 mx-auto rounded-lg"
            src={github}
            alt="js icon"
          />
          <p className="my-4">GitHub</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
