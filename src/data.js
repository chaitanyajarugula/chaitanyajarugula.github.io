import yashu from "./images/yashu.jpg";
import eszter from "./images/eszter.jpg";
import attila from "./images/attila.jpg";
import ganapathy from "./images/ganapathy.jpg";
export const experiences = [
  {
    title: "Data Engineer - Consultant",
    organization: "Bayer",
    description: [
      "Demonstrating ownership of intricate data entities in Google BigQuery, applying Ralph Kimball’s Dimensional Modeling concepts to establish a robust data architecture that enhances decision-making and analytics.",
      "Developing Dataflow pipelines for Extract, Transform, Load (ETL) operations, facilitating seamless data processing.",
      "Responsible for implementing Kafka producers and consumers on AWS fargate clusters to facilitate data transfer between on-premises databases and the BigQuery stage area."
    ],
    from: "June 2023",
    to: "Present",
  },
  {
    title: "Graduate Assistant",
    organization: "Missouri University of Science and Technology",
    description: [
      "Maintain optimal website performance and manage hosting environment of Missouri University of Science and Technology.",
      "Cleaning and organizing data in the admissions database which can later be used for administrative purpose.",
      "Interacting with incoming international students to enable smooth transition.",
    ],
    from: "May 2022",
    to: "May 2023",
  },
  {
    title: "Teaching Assistant",
    organization: "Missouri University of Science and Technology",
    description: [
      "Assisted Professor with the course work of Intro to digital Electronics including Grading students assignments and projects on timely basis",
      "Conducted office hours to respond to students questions about assignments and projects",
    ],
    from: "Jan 2022",
    to: "May 2022",
  },
  {
    title: "Data Engineer - Digital Cadre",
    organization: "Tata Consultancy Services",
    description: [
      "Written Terraform scripts for deployment of GCP Data Fusion and Airflow infrastructure.",
      "Built Scalable and reusable ETL pipelines using Google cloud data fusion to migrate petabytes of data from on-premises servers to Google Cloud platform.",
      "Developed Advanced SQL like Aggregation Scripts for different loading strategies like SCD1, SCD2, insert append and truncate load in Google BigQuery.",
      "Designed and Developed a light-weight Progressive Web Application and deployed the containerized image in Google app Engine for Vodafone Telecom organization using Flask web framework responsible for increase in data availability by 3.5%.",
      "Written python automation scripts using modelling sheets which reduced the work load of creating DML and DDL modules from mapping sheets by 90%.",
      "Designed and Implemented solution for cross DAG dependencies and orchestrated the pipelines using Google Cloud Composer."
    ],
    from: "Sep 2020",
    to: "Dec 2021",
  },
  {
    title: "Technical trainer",
    organization: "Talentio",
    description: [
      "Thought students Data structures and algorithms using python and fundamentals of database management systems.",
      "Created Assignments and modules which are used by all trainers in the program.",
      "Conducted one-one sessions with students which enabled to gain much better understanding of fundamentals",
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
      "Supervised the ticket management section and provided support for both website and database.",
      "Collected user feedback every year at the end of the event and migrated the end-data to Google cloud bigquery from on-prem server using DataFlow and extended the report analysis section.",
    ],
    from: "Dec 2018",
    to: "Feb 2020",
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


