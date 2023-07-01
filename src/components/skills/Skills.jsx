/* eslint-disable react/no-unescaped-entities */
import './skills.css'
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
    <div name="skills" className="bg-[#0a192f] text-gray-300">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold border-b-4 border-green-600 mb-6">
          Skills
        </h1>
        <p className="text-lg mb-4">
          These are the technologies I've worked with:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:w-[80%] lg:w-[75%] mx-auto">
          <div className="skill rounded-3xl overflow-hidden shadow-md bg-[#0a192f] hover:scale-105 transition-transform duration-1000">
            <img
              className="w-20 mx-auto mt-6"
              src={javascript}
              alt="JavaScript icon"
            />
            <p className="my-4 text-center">JavaScript</p>
            <div className="flex items-center gap-2 ml-4 mb-2">
              <span>Proficiency:</span>
              <progress
                className="progress progress-success w-56 h-[15px]"
                value={46}
                max="100"
              ></progress>
            </div>
          </div>

          <div className="skill rounded-3xl overflow-hidden shadow-md bg-[#0a192f] hover:scale-105 transition-transform duration-300">
            <img
              className="w-20 mx-auto mt-6"
              src={tailwind}
              alt="Tailwind CSS icon"
            />
            <p className="my-4 text-center">Tailwind CSS</p>
            <div className="flex items-center gap-2 ml-4 mb-2">
              <span>Proficiency:</span>
              <progress
                className="progress progress-success w-56 h-[15px]"
                value={60}
                max="100"
              ></progress>
            </div>
          </div>

          <div className="skill rounded-3xl overflow-hidden shadow-md bg-[#0a192f] hover:scale-105 transition-transform duration-300">
            <img
              className="w-20 mx-auto mt-6"
              src={bootstrap}
              alt="Bootstrap icon"
            />
            <p className="my-4 text-center">Bootstrap</p>
            <div className="flex items-center gap-2 ml-4 mb-2">
              <span>Proficiency:</span>
              <progress
                className="progress progress-success w-56 h-[15px]"
                value={54}
                max="100"
              ></progress>
            </div>
          </div>

          <div className="skill rounded-3xl overflow-hidden shadow-md bg-[#0a192f] hover:scale-105 transition-transform duration-300">
            <img
              className="w-20 mx-auto mt-6"
              src={react}
              alt="React JS icon"
            />
            <p className="my-4 text-center">React JS</p>
            <div className="flex items-center gap-2 ml-4 mb-2">
              <span>Proficiency:</span>
              <progress
                className="progress progress-success w-56 h-[15px]"
                value={58}
                max="100"
              ></progress>
            </div>
          </div>

          <div className="skill rounded-3xl overflow-hidden shadow-md bg-[#0a192f] hover:scale-105 transition-transform duration-300">
            <img className="w-20 mx-auto mt-6" src={node} alt="Node JS icon" />
            <p className="my-4 text-center">Node JS</p>
            <div className="flex items-center gap-2 ml-4 mb-2">
              <span>Proficiency:</span>
              <progress
                className="progress progress-success w-56 h-[15px]"
                value={37}
                max="100"
              ></progress>
            </div>
          </div>

          <div className="skill rounded-3xl overflow-hidden shadow-md bg-[#0a192f] hover:scale-105 transition-transform duration-300">
            <img
              className="w-20 mx-auto mt-6"
              src={express}
              alt="Express JS icon"
            />
            <p className="my-4 text-center">Express JS</p>
            <div className="flex items-center gap-2 ml-4 mb-2">
              <span>Proficiency:</span>
              <progress
                className="progress progress-success w-56 h-[15px]"
                value={40}
                max="100"
              ></progress>
            </div>
          </div>

          <div className="skill rounded-3xl overflow-hidden shadow-md bg-[#0a192f] hover:scale-105 transition-transform duration-300">
            <img className="w-20 mx-auto mt-6" src={mongo} alt="MongoDB icon" />
            <p className="my-4 text-center">MongoDB</p>
            <div className="flex items-center gap-2 ml-4 mb-2">
              <span>Proficiency:</span>
              <progress
                className="progress progress-success w-56 h-[15px]"
                value={34}
                max="100"
              ></progress>
            </div>
          </div>

          <div className="skill rounded-3xl overflow-hidden shadow-md bg-[#0a192f] hover:scale-105 transition-transform duration-300">
            <img
              className="w-20 mx-auto mt-6"
              src={firebase}
              alt="Firebase icon"
            />
            <p className="my-4 text-center">Firebase</p>
            <div className="flex items-center gap-2 ml-4 mb-2">
              <span>Proficiency:</span>
              <progress
                className="progress progress-success w-56 h-[15px]"
                value={43}
                max="100"
              ></progress>
            </div>
          </div>

          <div className="skill rounded-3xl overflow-hidden shadow-md bg-[#0a192f] hover:scale-105 transition-transform duration-300">
            <img className="w-20 mx-auto mt-6" src={github} alt="GitHub icon" />
            <p className="my-4 text-center">GitHub</p>
            <div className="flex items-center gap-2 ml-4 mb-2">
              <span>Proficiency:</span>
              <progress
                className="progress  progress-success w-56 h-[15px]"
                value={50}
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
