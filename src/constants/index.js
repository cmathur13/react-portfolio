import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";


export const HERO_CONTENT = `
I am a dedicated full stack developer with a talent for creating robust and scalable web applications. With around three years of practical experience, I have developed expertise in front-end technologies such as React.js, HTML, and CSS, as well as back-end technologies including Node.js, and databases like MySQL and MongoDB. I also have experience in cloud computing and have worked extensively with various AWS services. My aim is to leverage my skills to develop innovative solutions that enhance business growth and provide outstanding user experiences.`;

export const ABOUT_TEXT = `Hey there! I’m Chavi Mathur, hailing from Jaipur, a city full of culture in India.
 I'm currently pursuing my graduate studies in Software Engineering at Seattle University, where I've maintained a 3.7 GPA. I earned my bachelor’s degree from JECRC University in Jaipur.

 During my tenure at Deloitte, I collaborated with top minds in Software Engineering domain, gaining valuable experience across diverse technical domains such as front-end, back-end, and cloud computing. In my free time, I enjoy playing outdoor and indoor games like Basketball, Table Tennis, and Badminton.

Right now, I'm on the lookout for an full-time or a co-op position. I’m particularly interested in full stack or cloud roles but am open to exploring other tech areas too. If my profile piques your interest, feel free to get in touch!`;

export const EXPERIENCES = [
  {
    year: "Jun 2022 - Sep 2023",
    role: "Software Developer",
    company: "Deloitte",
    description: `At Deloitte, I collaborated with my team to develop B2B applications in the e-commerce sector using the OSF framework (React-based). I focused on refactoring code to enhance performance, streamlining processes to prevent redundant API calls and unnecessary UI updates. I optimized delivery management systems by leveraging AWS Lambda functions, SQS, SNS, JavaScript, and DynamoDB to create multiple APIs. I also minimized downtime and resolved production issues through effective testing and real-time incident resolution.

    During my tenure, I created a plugin within Oracle SQL Developer, improving user efficiency by 35% and streamlining database management. I developed an integrated plugin for IntelliJ to automate Java file creation, boosting performance optimization by 70%. I designed a Charging Station Management Application with booking and billing integration using OCPP 1.6. Implementing Java AWT token authentication, I reduced unauthorized access by 50%. I spearheaded sprint planning and demos, managing a team of 15 developers, resulting in a 25% increase in project efficiency. Additionally, I leveraged Java Spring Boot for the backend of an Educational App and built a chat application that led to a 50% increase in collaboration. I guided agile adoption, which boosted team synergy and increased project completion rates by 60%.`,
    technologies: ["Java", "OCPP 1.6", "Java AWT", "Spring Boot", "Oracle SQL Dev", "Agile"],
  },
  {
    year: "Feb 2022 - Jun 2022",
    role: "Remote Software Engineer",
    company: "Advaiya Technology Solutions",
    description: `During my tenure, I implemented dynamic token generation for a custom API in Power BI to ensure up-to-date data retrieval and facilitate data analysis. I developed and integrated scripts for dynamic token generation, configured Power BI, and tested the process, which reduced manual effort by 70%. This initiative enabled seamless and secure data updates, improving report accuracy by 90% and cutting project costs by $20,000 annually.`,
    technologies: ["Power BI", "Data analysis"],
  },
  // {
  //   year: "Jan 2020 - Jun 2020",
  //   role: "Software Engineer Intern",
  //   company: "Tech Mahindra",
  //   description: `I significantly improved the code coverage for three sub-modules within the Order Management module, achieving over 90% coverage through the use of JUnit and Mockito for testing. Moreover, I boosted efficiency in business process management by incorporating 'flowable', a flexible business process engine.`,
  //   technologies: ["Java", "Flowable", "JUnit", "Mockito", "HTML", "CSS"],
  // },
];

export const PROJECTS = [
  {
    title: "AWS Cloud Computing: Cloud Native HR Management SAAS Application",
    image: project1,
    description:
      "I built a cloud-native SAAS application with REST APIs using EC2 instances, AWS S3, and DynamoDB. As part of this project, I developed microservices for employee profile and photo management, securing the APIs with OAuth 2.0 authorization. Additionally, I implemented automated deployment pipelines using Jenkins, which enhanced the CI/CD processes and reduced deployment time by 30%.",
    technologies: ["AWS", "REST API", "OAuth 2.0", "Jenkins", "CI/CD"],
  },
  {
    title: "Hotel Booking Application",
    image: project2,
    description:
      "This full-stack web application is designed to help users find and book accommodations, including hotels, apartments, and villas. Users can input their desired dates, city, and the number of guests to discover available options. The application allows users to select a hotel and, depending on availability, proceed to book their stay..",
    technologies: ["React.js", "Node.js", "MongoDB", "Axios", "Redux", "JWT"],
  },
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
  {
    title: "EcoFinance: Strategic Financial Management System",
    image: project4,
    description:
      "Developed a full-stack budget management application featuring categorization, tracking, and visualization of periodic expenses. Utilized AngularJS for the frontend, Node.js with Express for the backend, and MySQL for efficient database management. Implemented Single Sign-On (SSO) to enhance security and streamline user authentication across platforms, reducing password-related issues by 40%. Deployed the application with Docker, Kubernetes, and Azure container services, achieving 99.9% uptime and ensuring robust performance.",
    technologies: ["Angular", "Node.js", "TypeScript", "Python", "Docker", "Kubernetes"],
  },
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
  email: "cmathur13@outlook.com",
};
