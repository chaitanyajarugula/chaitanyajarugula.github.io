import { experiences } from "../data";
import { useState } from "react";
import { BriefcaseIcon } from "@heroicons/react/solid";
const PastWork = () => {
  const [index, setIndex] = useState(0);
  const setIndexHandler = (idx) => {
    setIndex(idx);
  };
  return (
    <section id="Experience" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-5">
          <BriefcaseIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white text-center mb-4">Experience</h1>
          </div>
        </div>
      <div className = 'flex flex-row divide-x py-5'>
        <div className="container px-5 py-5 mx-auto md-auto text-left lg:px-20">
          {experiences.map((val, idx) => (
            <li
              className={
                "cursor-pointer pt-2 " +
                (idx === index ? "text-blue-400" : "")
              }
              onClick={() => setIndexHandler(idx)}
            >
              {val.title} @ <b>{val.organization}</b>
            </li>
          ))}
        </div>
        <div className="container px-5 py-5 mx-auto text-justify lg:px-10">
          <h2 className="font-sans text-lg"> <b>{experiences[index].title}</b> </h2>
          <div className="flex flex-row mb-3">
              <div><b>From:</b> {experiences[index].from}</div>
              <div className="px-5"><b>To:</b> {experiences[index].to} </div>
          </div>
          <ul>
            {experiences[index].description.map((val) => (
              <li className = "list-disc text-left">{val}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
  // return (
  //   <section id="pastwork" className="text-gray-400 bg-gray-900 body-font">
  //     <div className="container px-5 py-10 mx-auto text-left lg:px-40">
  //       <div className="flex flex-wrap -m-4 flex space-y-10">
  //         {experiences.map((experience) => (
  //           <div className="flex space-x-4">
  //             <div className="px-8 py-10 relative z-4 w-full bg-gray-900 opacity-100 hover:opacity-60">
  //               {experience.organization}
  //             </div>
  //             <div className="divide-x divide-dashed">
  //               <div className="title-font text-lg font-medium text-indigo mb-3">
  //                 {experience.title}
  //               </div>
  //               <ul className="list-disc">
  //                 {experience.description.map((val) => (
  //                   <li>{val}</li>
  //                 ))}
  //               </ul>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
};
export default PastWork;
