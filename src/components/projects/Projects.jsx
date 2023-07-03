/* eslint-disable no-unused-vars */
import "./projects.css";
import chefPh from "../../assets/projects/chefs-ph.png";
import brainBox from "../../assets/projects/brain-box-.png";
import sportyFy from "../../assets/projects/sportify-camp-3a941.web.app_.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div name="projects" className="bg-gradient-to-r from-black via-gray-900 to-gray-700 min-h-screen text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="pb-1 ">
          <p className="text-4xl font-bold inline border-b-4 border-green-600">
            Projects
          </p>
          <p className="py-6">Check out some of my recent projects</p>
        </div>

        {/* Project content goes here */}
        <div className="mx-auto  grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[95%]">
          
          
          <div className="card w-[85%] rounded-lg mb-8 mx-auto">
            <figure className="image-wrap w-full">
              <img src={chefPh} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title mb-4">
                Kitchen Chronicles (A web application featuring chefs and their
                recipes)
              </h2>
              <p>
                <span  className="block text-xl font-bold mb-3">Top Features:</span>
                • Explore talented chefs and delicious recipes in one place. <br /> • User friendly experience with detailed chef info
              </p>
              <div className="card-actions flex justify-between py-8">
                <Link to="https://chefs-ph-project.web.app/">
                <div className="badge btn btn-xs btn-outline btn-accent">
                  Demo
                </div>
                </Link>
                <div className="flex gap-2">
                  <Link to="https://github.com/Tanvir-khondoker/kitchen-chronicles-client-side">
                  <div className="badge btn btn-xs btn-outline btn-accent">
                    Github Client
                  </div>
                  </Link>
                  <Link to="https://github.com/Tanvir-khondoker/kitchen-chronicles-server">
                  <div className="badge btn btn-xs btn-outline btn-accent">
                    Github Server
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          
          <div className="card w-[85%] rounded-lg mb-8 mx-auto">
            <figure className="image-wrap w-full">
              <img src={brainBox} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title mb-4">
                BrainBoxToys (A Toy review website to explore, contribute and
                discover toys)
              </h2>
              <p>
              <span  className="block text-xl font-bold mb-3">Top Features:</span>
                • Effortlessly explore and discover toys by categories. <br /> • Instantly access detailed toy information with a single click for logged-in users, and conveniently manage your toy collection.
                
              </p>
              <div className="card-actions flex justify-between py-8">
                <Link to="https://brain-box-toys.web.app/">
                <div className="badge btn btn-xs btn-outline btn-accent">
                  Demo
                </div>
                </Link>
                <div className="flex gap-2">
                  <Link to="https://github.com/Tanvir-khondoker/brain-box-toys-client">
                  <div className="badge btn btn-xs btn-outline btn-accent">
                    Github Client
                  </div>
                  </Link>
                  <Link to="https://github.com/Tanvir-khondoker/brain-box-toys-server">
                  <div className="badge btn btn-xs btn-outline btn-accent">
                    Github Server
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          
          <div className="card w-[85%] rounded-lg mb-8 mx-auto">
            <figure className="image-wrap w-full">
              <img src={sportyFy} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title mb-4">
                SportifyCamp (All-in-one web platform for sports course
                management and enrollment)
              </h2>
              <p>
              <span  className="block text-xl font-bold mb-3">Top Features:</span>
                • User-friendly course experience: Easy navigation, enrollment, and payment for sports skill courses. <br /> • Role-specific dashboards: Customized dashboards for users, instructors, and admins to efficiently manage courses. (In github client-side you will find admin credential) 
              </p>
              
              
              <div className="card-actions flex justify-between py-8">
                <Link to="https://sportify-camp-3a941.web.app/">
                <div className="badge btn btn-xs btn-outline btn-accent">
                  Demo
                </div>
                </Link>
                <div className="flex gap-2">
                  <Link to="https://github.com/Tanvir-khondoker/sportify-camp-client">
                  <div className="badge btn btn-xs btn-outline btn-accent">
                    Github Client
                  </div>
                  </Link>
                  <Link to="https://github.com/Tanvir-khondoker/sportify-camp-server">
                  <div className="badge btn btn-xs btn-outline btn-accent">
                    Github Server
                  </div>
                  </Link>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
