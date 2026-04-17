import yashu from "./images/yashu.jpg";
import eszter from "./images/eszter.jpg";
import attila from "./images/attila.jpg";
import ganapathy from "./images/ganapathy.jpg";
export const experiences = [
  {
    title: "AI Data Engineer",
    organization: "Bayer",
    description: [
    "Transforme data entities in BigQuery by leveraging combination of Dimensional Modeling and flatted table principles to architect a data framework using Hackolade, resulting in a 40% enhancement in data visibility compared to source.",
  "Employed Git version control for source code management and GitHub Actions for continuous integration/continuous deployment (CI/CD) of the Kafka and Apache beam pipelines, ensuring rapid, secure, and efficient code releases.",
  "Architected and implemented Apache Beam pipelines, reducing data processing time by 50% and delivering robust data handling capabilities; Incorporated Dataplex APIs to enable seamless data discovery and metadata management.",
  "Leveraged proficiency in Apache Airflow to design and implement custom operators and DAGs, orchestrating data pipelines on GCP. Integrated SQL scripts to optimize workflow efficiency and streamline data processing.",
  "Engineered terraform scripts to provide infrastructure for AWS Fargate, AWS Cloudwatch, defined all the necessary IAM rules ensuring least-access privilege policies.",
  "Engineered a highly extensible Dataflow Flex Template leveraging Apache Beam to orchestrate schema-aware ingestion, transformation, and loading of heterogeneous file formats (CSV, fixed-width, Parquet, text) from SFTP into BigQuery with robust error handling and parameterized runtime configuration.",
  "Implemented GitHub Actions pipelines to automate publishing of Dataflow Flex Template container images to GCP Artifact Registry, execute security and vulnerability scans across Python dependencies, and provision AWS Fargate clusters to stream Kafka topics from SLT into BigQuery."
    ],
    from: "June 2023",
    to: "Present",
  },
  {
    title: "Graduate Assistant",
    organization: "Missouri University of Science and Technology",
    description: [
      "Maintained optimal website performance and managed the hosting environment at Missouri University of Science and Technology.",
      "Cleaned and organized admissions database data for administrative reporting and decision-making.",
      "Supported incoming international students to enable a smooth transition.",
    ],
    from: "May 2022",
    to: "May 2023",
  },
  /*{
    title: "Teaching Assistant",
    organization: "Missouri University of Science and Technology",
    description: [
      "Assisted Professor with the course work of Intro to digital Electronics including Grading students assignments and projects on timely basis",
      "Conducted office hours to respond to students questions about assignments and projects",
    ],
    from: "Jan 2022",
    to: "May 2022",
  },*/
  {
    title: "Data Engineer",
    organization: "Tata Consultancy Services",
    description: [
      "Led the Development of SQL Scripts for aggregation using business logic for Fact and dimensional table loading strategies like SCD1, SCD2 and performed data-driven troubleshooting for more than 2000 Jira tickets on data in Google BigQuery.",
      "Improved data availability by 25% by developing an end-to-end data management application using React JS, Flask and Utilizing BigQuery APIs to interact with the data warehouse.",
      "Developed Terraform scripts and streamlined the deployment using CI/CD builds on Google Cloud build for GCP Data Fusion and Composer infrastructure, resulting in an 80% reduction in deployment time and improved resource utilization.",
      "Spearheaded the development of scalable and reusable ETL pipelines using Google Cloud Data Fusion for data ingestion, migrating more than 400 Terabytes of data from on-premises servers to Google Cloud Platform; achieved significant cost savings and streamlined data processing capabilities.",
      "Accelerated migration time by Developing a Java program leveraging the Hadoop map-reduce framework to seamlessly migrate data from diverse sources to Google Cloud Storage (GCS).",
      "Decreased the DML and DDL generation time by 90% through creation of python automation scripts using modeling sheets.",
      "Designed and Implemented effective solution for cross DAG dependencies and orchestrated the data pipelines using Apache Airflow on Google Cloud.",
      "Applied compliance standards rigorously throughout the software development process to ensure that the product met industry regulations (GDPR) and company policies, providing data security to PII data in Google BigQuery."
    ],
    from: "Sep 2020",
    to: "Dec 2021",
  },
  {
    title: "Technical trainer",
    organization: "Talentio",
    description: [
      "Delivered hands-on training in Python, data structures & algorithms, and database fundamentals, emphasizing problem-solving and practical implementation.",
      "Designed assignments and reusable learning modules adopted across the training program to standardize instruction and improve learner outcomes.",
      "Mentored students through 1:1 sessions, clarifying core concepts and accelerating progress through personalized feedback.",
      "Recognized as runner-up for Best Trainer for strong learner feedback and consistent instructional quality.",
    ],
    from: "June 2019",
    to: "June 2019",
  },
  {
    title: "Database developer Intern",
    organization: "All India Industrial Exhibition",
    description: [
      "Designed and developed a highly efficient relational data models, enabling users to effortlessly print tickets in batch mode, resulting in a 40% improvement in operational productivity.",
      "Supervised the ticket printing management department and provided on-call support for the application. Solved more than 200 user queries related to application and audit reports generated.",
      "Built a relational database in MySQL from scratch following 3NF database modeling principles to avoid data redundancies.",
      "Generated comprehensive excel reports for ticket sales data utilizing advanced SQL queries; provided accurate and detailed insights for auditing, resulting in improved financial transparency and streamlined decision-making processes.",
    ],
    from: "Dec 2018",
    to: "Feb 2020",
  },
];

export const skills = [
  "Python", "SQL", "Java", "Shell Scripting", "JavaScript","Apache Beam (Dataflow)", "Apache Airflow (Composer)", "Spark (PySpark)", "Kafka", "Data Modeling", "ETL/ELT Design", "BigQuery","Google Cloud Platform", "AWS", "Terraform", "Docker", "GitHub Actions (CI/CD)",
  "React JS", "Flask", "HTML5", "CSS3", "RESTful APIs","Model Context Protocol (MCP)", "LLMs", "LangChain", "JIRA", "Hackolade"
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


