/* eslint-disable react/no-unescaped-entities */
import profilePic from '../../assets/personal/formal_profile.jpg'
const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-[#0a192f] text-gray-300 py-14'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <div className='flex flex-col items-center justify-center gap-6'>
            <p className='text-4xl font-bold inline border-b-4 border-green-600 mx-auto '>
              About Me
            </p>
            <img src={profilePic} className='h-60 rounded-2xl my-4' alt="" />
            </div>
          </div>
          <div></div>
          </div>
            
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-3xl font-bold'>
              <p>Hi. I'm Md. Tanvir Hossain Khondoker, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am a passionate web developer specializing in the MERN stack. With a strong focus on user-friendly digital experiences, I enjoy crafting responsive web applications using MongoDB, Express.js, React.js, and Node.js. As a junior full-stack developer, I'm continuously expanding my skills in front-end and back-end development. I'm driven by the belief that technology has the power to shape the future. I strive to stay up-to-date with the latest industry trends and best practices.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;