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
            <br className="hidden lg:inline-block" />I am a Data Engineer.
          </h1>
          <p className="mb-8 leading-relaxed"> I'm a passionate Computer Science professional with a Master's degree in Computer Science, specializing in Data Engineering. I thrive in dynamic, feedback-driven development environments, where innovation and collaboration take center stage. My expertise lies in Data Analytics, ETL pipeline development, and data architecture, and I'm excited to share my journey and insights with you. Join me on this digital exploration as I showcase my skills and commitment to creating impactful solutions in a collaborative and feedback-centric space.</p>
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
