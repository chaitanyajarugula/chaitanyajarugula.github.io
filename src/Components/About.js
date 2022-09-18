import logo from "../images/giphy.gif";
import handshake from "../images/handshake_1.gif";
const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-grey">
            Hi
            <span className="inline-flex items-baseline">
              <img
                src={handshake}
                alt=""
                className="self-center w-10 h-10 rounded-full mx-1"
              />
            </span>
            , I'm Chaitanya Jarugula.
            <br className="hidden lg:inline-block" />I am a Software developer.
          </h1>
          <p className="mb-8 leading-relaxed">I have 1.5 years of Full time work experience with proven expertise in the field of data engineering and application development. I have worked as a freelance database developer for more than 2 years. I am a data science enthusiast and keep myself updated with the latest trends in the feild of data science and machine learning. I beleive in consistent effort and feedback driven development.</p>
          <div className="flex justify-center">
            <a
              href="#Experience"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Professional Experience
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero1"
            src={logo}
          />
        </div>
      </div>
    </section>
  );
};
export default About;
