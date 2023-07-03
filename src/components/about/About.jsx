/* eslint-disable react/no-unescaped-entities */
import profilePic from '../../assets/personal/formal_profile.jpg'
import "./about.css"
const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-gradient-to-r from-black via-gray-900 to-gray-700 text-gray-300 py-14'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <div className='flex flex-col items-center justify-center gap-6'>
            <p className='text-4xl font-bold inline border-b-4 rounded-md border-green-600 mx-auto '>
              About Me
            </p>
            <img src={profilePic} className='h-60 rounded-2xl my-4 about-image' alt='' />

            </div>
          </div>
          <div></div>
          </div>
            
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-2xl font-bold'>
              <p>Welcome, honored guest. I am Md. Tanvir Hossain Khondoker, a dedicated professional committed to delivering exceptional results.</p>
            </div>
            <div className='border-l-4 rounded-xl border-green-600'>
              <p className='pl-3'>I'm a dedicated and passionate WebApp developer specializing in the MERN stack. With a friendly approach and a focus on user-friendly experiences, I craft responsive applications using MongoDB, Express.js, React.js, and Node.js. As a junior full-stack developer, I continuously learn and expand my skills in front-end and back-end development. I believe in the transformative power of technology and strive to deliver exceptional, simple, and intuitive web applications.</p>
                
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;