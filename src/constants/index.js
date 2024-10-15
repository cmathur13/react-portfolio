//import project1 from "../assets/projects/project-1.png";
//import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
//import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";


export const HERO_CONTENT = `
I am a dedicated full stack developer with a talent for creating robust and scalable web applications. With around two years of practical experience, I have developed expertise in front-end technologies such as React.js, HTML, and CSS, as well as back-end technologies including Node.js, Java Spring Boot, and databases like MySQL and MongoDB. I also have experience in cloud computing and have worked extensively with various AWS services. My aim is to leverage my skills to develop innovative solutions that enhance business growth and provide outstanding user experiences.`;

export const ABOUT_TEXT = `Hey there! I’m Chavi Mathur, hailing from Jaipur, a city full of culture in India.
 I'm currently pursuing my graduate studies in Software Engineering at Seattle University, where I've maintained a 3.7 GPA. I earned my bachelor’s degree from JECRC University in Jaipur.

 During my tenure at Deloitte, I collaborated with top minds in Software Engineering domain, gaining valuable experience across diverse technical domains such as front-end, back-end, and cloud computing. In my free time, I enjoy playing outdoor and indoor games like Basketball, Table Tennis, and Badminton.

Right now, I'm on the lookout for an full-time or a co-op position. I’m particularly interested in full stack or cloud roles but am open to exploring other tech areas too. If my profile piques your interest, feel free to get in touch!`;

export const EXPERIENCES = [
  {
    year: "Jun 2024 – Sep 2024",
    role: "Software Engineer (SWE Fellowship)",
    company: "Headstarter AI (New York, Remote)",
    description: `During my SWE Fellowship at Headstarter AI, I developed a specialized academic chatbot using LlamaIndex, Chainlit, and ReAct, designed to engage over 1000 students and researchers. I implemented Retrieval Augmented Generation (RAG) with OpenAI's model to provide real-time, relevant responses, enhancing user interaction and engagement. Additionally, I designed and deployed a user-friendly conversational interface, with ongoing efforts to optimize user adoption and engagement.`,
    technologies: ["LlamaIndex", "Chainlit", "ReAct", "OpenAI", "Python"]
},

  {
    year: "Mar 2022 - Sep 2023",
    role: "Software Developer",
    company: "Deloitte (Bangalore, India)",
    description: `During my tenure at Deloitte, I led a critical project to migrate our customer service database from Informix-4GL to PostgreSQL, modernizing our data infrastructure. I utilized Java (Maven), Spring Boot, and Azure DevOps to develop a customer query analysis system with CI/CD capabilities, improving performance and ensuring secure authentication using OAuth and JWT.

    In collaboration with cross-functional teams, I created a custom plugin in Oracle SQL Developer to automate SQL query generation, significantly enhancing efficiency. Additionally, I developed an IntelliJ plugin to automate Java file creation with PRD templates and boilerplate code, streamlining our development processes. This project showcases my expertise in system migration, performance enhancement, and innovative automation.`,
    technologies: ["Java", "OCPP 1.6", "Java AWT", "Spring Boot", "Oracle SQL Dev", "Agile"],
  },
  {
    year: "Jan 2022 - Mar 2022",
    role: "Remote Software Engineer",
    company: "Advaiya Technology Solutions (Seattle, WA)",
    description: `During my tenure, I implemented dynamic token generation for a custom API in Power BI to ensure up-to-date data retrieval and facilitate data analysis. I developed and integrated scripts for dynamic token generation, configured Power BI, and tested the process, which reduced manual effort by 70%. This initiative enabled seamless and secure data updates, improving report accuracy by 90% and cutting project costs by $20,000 annually.`,
    technologies: ["Power BI", "Data analysis"],
  },

];

export const PROJECTS = [
  {
    title: "Academic Chatbot: Engaging Students and Researchers",
    image: project6,  // Replace with the appropriate image variable or URL
    description:
      "Developed a specialized academic chatbot using LlamaIndex, Chainlit, and ReAct, aimed at engaging over 1000 students and researchers. Implemented Retrieval Augmented Generation (RAG) with OpenAI's model to provide up-to-date and relevant responses in real-time. Designed and deployed a user-friendly conversational interface, with ongoing efforts to drive user adoption and engagement.",
    technologies: ["LlamaIndex", "Chainlit", "ReAct", "OpenAI", "Python"]
},
{
  title: "Enhanced Credit Card Fraud Detection with Machine Learning in R",
  image: project7,  // Replace with the appropriate image variable or URL
  description:
    "Developed a fraud detection system using R, implementing logistic regression, decision trees, and artificial neural networks (ANN) to identify fraudulent transactions. Applied ROC curves and other evaluation techniques to optimize model performance and enhance detection accuracy. Utilized data visualization to effectively compare and interpret model results, improving reliability and decision-making by 80%.",
  technologies: ["R", "Logistic Regression", "Decision Trees", "Artificial Neural Networks (ANN)", "Data Visualization"],
  timeframe: "01/24 – 03/24"
},

/*
  {
    title: "AWS Cloud Computing: Cloud Native HR Management SAAS Application",
    image: project1,
    description:
      "I built a cloud-native SAAS application with REST APIs using EC2 instances, AWS S3, and DynamoDB. As part of this project, I developed microservices for employee profile and photo management, securing the APIs with OAuth 2.0 authorization. Additionally, I implemented automated deployment pipelines using Jenkins, which enhanced the CI/CD processes and reduced deployment time by 30%.",
    technologies: ["AWS", "REST API", "OAuth 2.0", "Jenkins", "CI/CD"],
  },*/
/*  {
    title: "Hotel Booking Application",
    image: project2,
    description:
      "This full-stack web application is designed to help users find and book accommodations, including hotels, apartments, and villas. Users can input their desired dates, city, and the number of guests to discover available options. The application allows users to select a hotel and, depending on availability, proceed to book their stay..",
    technologies: ["React.js", "Node.js", "MongoDB", "Axios", "Redux", "JWT"],
  },*/
  {
    title: "SwiftStream: Low-Latency Cloud-Based Video Streaming Platform",
    image: project3,
    description:
      "Created a web application for streaming videos, enabling seamless content browsing, video searching, and push notifications for new content. Utilized the MERN stack with React and Context API for efficient state management, Axios for request handling, and JWT for user authentication. Integrated over 5 TMDB APIs to provide real-time data on the latest movies and TV shows, ensuring up-to-date content for 150+ users. Architected scalable live streaming on AWS, achieving 99.9% uptime with under 3-second latency, enhancing user engagement by 20%.",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Context API",
      "Sass",
      "CryptoJS",
    ],
  },
/*  {
    title: "EcoFinance: Strategic Financial Management System",
    image: project4,
    description:
      "Developed a full-stack budget management application featuring categorization, tracking, and visualization of periodic expenses. Utilized AngularJS for the frontend, Node.js with Express for the backend, and MySQL for efficient database management. Implemented Single Sign-On (SSO) to enhance security and streamline user authentication across platforms, reducing password-related issues by 40%. Deployed the application with Docker, Kubernetes, and Azure container services, achieving 99.9% uptime and ensuring robust performance.",
    technologies: ["Angular", "Node.js", "TypeScript", "Python", "Docker", "Kubernetes"],
  },*/
  {
    title: "ChargeInnovate: Intelligent Optimization System for EV Charging",
    image: project5,
    description:
      "Developed a charging station management system facilitating easy booking of slots for EV charging at nearby stations. Employed Java, Spring Boot, and Angular for user authentication and real-time monitoring, achieving 95% code coverage in unit tests. Implemented clean, maintainable code adhering to SOLID principles and OOP paradigms, ensuring a robust and scalable architecture. Achieved 97.9% uptime, supported over 200 charging stations and served 500 users, enhancing user engagement through intuitive dashboard features.",
    technologies: ["JAVA", "Angular", "Spring Boot", "JUnit", "HTML/CSS", "MySQL"],
  },
];

export const CONTACT = {
  address: "8th Ave Seattle, WA 98104 ",
  phoneNo: "+1 (206) 581 9777 ",
  email: "cmathur@seattleu.edu",
  alternate_email: "chavimathur00@outlook.com"
};
