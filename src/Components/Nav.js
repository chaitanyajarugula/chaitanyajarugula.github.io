const Nav = () => {
  return (
    <header className="bg-custom md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Chaitanya Jarugula
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a
            href="#Experience"
            className="text-center  border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
          >
            Professional Experience
          </a>
          <a
            href="#skills"
            className="text-center  border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
          >
            Skills
          </a>
          <a
            href="#testimonials"
            className="text-center  border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
          >
            Testimonials
          </a>
        </nav>
        <div className="flex space-x-4">
        
        <a
          href="https://drive.google.com/file/d/1pimryeXBeXuan4kmVuwdzSObrsMx-rUe/view?usp=sharing"
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          target="_blank"
        >
          Download Resume
        </a>
        <a
          href="#Contact"
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >
         Contact me
        </a>
        </div>
      </div>
    </header>
  );
};
export default Nav;
