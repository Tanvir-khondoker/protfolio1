/* eslint-disable no-unused-vars */
import "./projects.css";
import chefPh from "../../assets/projects/chefs-ph.png";
import brainBox from "../../assets/projects/brain-box-.png";
import sportyFy from "../../assets/projects/sportify-camp-3a941.web.app_.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div name="projects" className="bg-[#0a192f] min-h-screen text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-green-600">
            Projects
          </p>
          <p className="py-6">Check out some of my recent projects</p>
        </div>

        {/* Project content goes here */}
        <div className="mx-auto  grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[90%]">
          
          
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
                • Chefs & Recipes: Discover talented chefs and their
                mouthwatering recipes.<br></br>• User-Friendly: Enjoy a simple
                and intuitive experience.<br></br>• Detailed Chef Info: Explore
                comprehensive details about each chef and their top recipes.
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
                • Explore Toys: Effortlessly browse and discover toys by
                categories.<br></br>• Instant Details: Access detailed
                information on toys with a single click for logged-in users.
                <br></br>• Manage Collection: Add new toys easily and
                conveniently manage your collection.
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
                • User-Friendly Course Experience: Seamlessly explore, enroll,
                and pay for sports skill courses. <br /> • Role-Specific Dashboards:
                Tailored dashboards for users, instructors, and admins for
                efficient course management. <br /> • Streamlined Course Approval:
                Curated approval process to ensure high-quality courses.
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
