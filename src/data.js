import yashu from "./images/yashu.jpg";
import eszter from "./images/eszter.jpg";
import attila from "./images/attila.jpg";
import ganapathy from "./images/ganapathy.jpg";
export const experiences = [
  {
    title: "Graduate Assistant",
    organization: "Missouri Univeristy of Science and Technology",
    description: [
      "Maintain optimal website performance and manage hosting environment of Missouri University of Science and Technology.",
      "Cleaning and organizing data in the admissions database which can later be used for administrative purpose.",
      "Interacting with incoming international students to enable smooth transition.",
    ],
    from: "May 2022",
    to: "Present",
  },
  {
    title: "Teaching Assistant",
    organization: "Missouri Univeristy of Science and Technology",
    description: [
      "Assisted Professor with the course work of Intro to digital Electronics including Grading students assignments and projects on timely basis",
      "Conducted office hours to respond to students questions about assignments and projects",
    ],
    from: "Jan 2020",
    to: "May 2022",
  },
  {
    title: "Google Cloud Platform developer",
    organization: "Tata Consultancy Services",
    description: [
      "Built Scalable pipelines using Google cloud data fusion and BigQuery scripts for different loading strategies such as insert append, SCD1, SCD2, truncate load.",
      "Developed python automation scripts using modelling sheets which reduced the manual work of creating DDLs and DMLs.",
      "Implemented an effective solution for handling Dag dependencies and orchestrated the pipelines using Google Cloud Composer.",
      "Built back-end for a web application using Flask web framework and deployed the application using Google App Engine.",
      "Contributed to Low level design document of the project.",
    ],
    from: "Sep 2020",
    to: "Dec 2021",
  },
  {
    title: "Technical trainer",
    organization: "Talentio",
    description: [
      "Thought students Data stuructues and algorithms using python and fundamentals of database management systems.",
      "Created Assignments and modules which are used by all trainers in the program.",
      "Conducted one-one sessions with students which enabled to gain much better understanding of fundementals",
      "Received runner-up for best trainer of the program.",
    ],
    from: "June 2019",
    to: "June 2019",
  },
  {
    title: "Database developer Intern",
    organization: "All India Industrial Exhibition",
    description: [
      "Designed and Developed a data model for TPMS (Ticket printing management system) which allows users to print tickets in batch mode.",
      "Built the database in MySQL sever to store the aggregations, history of the tickets sold per day and current day sales.",
      "Supervied the ticket management section and provided support for both website and database",
      "Collected user feedback every year at the end of the event and migrated the end-data to google cloud bigquery from on-prem server using DataFlow and extended the report analysis section.",
    ],
    from: "Dec 2018",
    to: "Feb 2019",
  },
];

export const skills = [
  "Python",
  "Machine Learning",
  "Deep Learning Architectures",
  "Java",
  "SQL",
  "BigQuery",
  "DataFlow",
  "Hadoop",
  "Apache Spark",
  "Apache Airflow",
  "React JS",
  "Node JS",
  "MongoDB",
  "HTML",
  "CSS",
  "GIT",
  "JIRA",
  "ETL",
  "Data Structures and algorithms",
  "React",
  "NodeJS",
  "Apache Kafka",
  "Flask",
  "CDAP/ Data fusion"
];

export const testimonials = [
  {
    quote:
      "I have worked with Chaitanya as colleague in GCP migration projects and found him having very good knowledge and understanding of GCP cloud tools and technologies. He has been asset to our team and has delivered quick solutions. He has that technical edge with good knowledge of python based on his experience and very good learning attitude as well along with analytical skills. He can manage customer and projects very well with right attitude required for a technical lead and conceptually also he has good understanding of big data concepts. I am sure he will do great in his career and will be an asset to the team which he works for. All the best !! ",
    name: "Yashu Dani",
    company: "Tata Consultancy Services",
    image: yashu,
  },
  {
    quote:
      "Worked with Chaitanya in one of his first projects building DWH solution on GCP BigQuery. He has a very good learning curve, he is proactive, listening to customer needs, taking development test more seriously than lot of developer I have work with. It was good to work with him, and I recommend him, he can be good member of a development team.",
    name: "Eszter Gasko",
    company: "DXC Technologies - Hungary",
    image: eszter,
  },
  {
    quote:
      "Chaitanya worked as developer for a GCP data transformation program. He has very good attitude towards work, excellent analytical ability and technical skills. He will be great asset to any development team.",
    name: "Ganapathy Subramanian",
    company: "Tata Consultancy Services",
    image: ganapathy,
  },
  {
    quote:
      "I worked with Chaitanya as customer at Vodafone Hungary. We built a new data warehouse on Google Cloud Platform. It was very new technology for me with lot of issues, but Chaitanya could work quickly and effective way in development team.",
    name: "Attila Fábián",
    company: "Vodafone - Hungary",
    image: attila,
  }
];
