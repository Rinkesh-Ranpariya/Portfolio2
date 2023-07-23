// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  // googleTrackingID: "",
};

// Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Rinkesh",
  logo_name: "Rinkesh()",
  nickname: "",
  full_name: "Rinkesh Ranpariya",
  subTitle: "Frontend Developer 🔥. Always learning.",
  resumeLink: "",
  mail: "rinkeshranpariya15@gmail.com",
};

const socialMediaLinks = {
  github: "https://github.com/rinkesh-ranpariya",
  linkedin: "https://www.linkedin.com/in/rinkesh-ranpariya",
  gmail: "rinkeshranpariya15@gmail.com",
  instagram: "https://www.instagram.com/rinkesh.ranpariya",
};

const skills = {
  data: [
    {
      title: "Frontend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡Building responsive website front end using ReactJS",
        "⚡Creating application backend in Node, Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "MySQL",
        //   fontAwesomeClassname: "simple-icons:mysql",
        //   style: {
        //     color: "#4479A1",
        //   },
        // },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description: "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Engineer - Reactjs",
          company: "BIGSCAL TECHNOLOGIES Pvt. Ltd.",
          company_url: "https://www.bigscal.com/",
          logo_path: "bigscal.jpg",
          duration: "Jan 2022 - Present",
          location: "Surat, Gujarat",
          description:
            "As a React JS Developer at BIGSCAL TECHNOLOGIES Pvt. Ltd., I am responsible for developing and implementing user-friendly interfaces using React.js. I work closely with the development team to create scalable and optimized web applications that meet the needs of our clients. My key responsibilities included:",
          points: [
            "⚡Designed and developed reusable React components that increased the speed of development and improved the user experience.",
            "⚡Implemented Redux architecture to manage the state of the application and improved its scalability and maintainability.",
            "⚡Worked with third-party APIs and integrated them with our applications to provide better functionality and features.",
            "⚡Collaborated with the UI/UX designers to ensure that the application interfaces are consistent with the design specifications.",
            "⚡Actively participated in code reviews and implemented best practices to ensure that the codebase is maintainable and scalable.",
            "⚡Maintained the application codebase and ensured that it is up-to-date with the latest security patches and updates.",
          ],
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Education and certification Page
const degrees = {
  degrees: [
    {
      title: "Shree Swami Atmanand Saraswati Institute of Technology",
      subtitle: "Bachelor of Engineering - Computer Engineering",
      logo_path: "gtu.png",
      alt_name: "SSGC",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, etc.",
        "⚡ I have also completed various online courses for Full stack web development.",
        "⚡ I have secured 8.57 CGPA.",
      ],
      website_link: "https://ssasit.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Full-Stack Web Development with React Specialization",
      subtitle: "The Hong Kong University of Science and Technology",
      logo_path: "mern.webp",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/RVW4J9E5LSYJ",
      alt_name: "Full-Stack Web Development with React Specialization",
      color_code: "#47A048",
    },
    {
      title: "Server-side Development with NodeJS, Express and MongoDB",
      subtitle: "The Hong Kong University of Science and Technology",
      logo_path: "nodejs.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/DCZCSVTBYFN3",
      alt_name: "Server-side Development with NodeJS, Express and MongoDB",
      color_code: "#7A7A7A",
    },
    {
      title: "Front-End Web Development with React",
      subtitle: "The Hong Kong University of Science and Technology",
      logo_path: "react.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/82DQLCCTEX5J",
      alt_name: "Front-End Web Development with React",
      color_code: "#b190b0",
    },
    {
      title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
      subtitle: "The Hong Kong University of Science and Technology",
      logo_path: "css.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/9NYUH8GDHEUW",
      alt_name: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
      color_code: "#ffbfae",
    },
    {
      title: "Machine Learning for All",
      subtitle: "University of London",
      logo_path: "ml.webp",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/YSGTQSUCT7RD",
      alt_name: "Machine Learning for All",
      color_code: "#E2405F",
    },
    {
      title: "Python for Everybody Specialization",
      subtitle: "University of Michigan",
      logo_path: "python.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/YE4CB4Q9N7S9",
      alt_name: "Python for Everybody Specialization",
      color_code: "#ffc475",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      id: "0",
      name: "Keep Calm and Carry On",
      url: "",
      description:
        "This platform enables users to practice Augmented Reality meditation, play stress burster games, track task completion and engage in motivational exercises to cope with stress and anxiety at work.  ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Augmented Reality",
          iconifyClass: "bi:badge-ar",
        },
      ],
      links: [
        {
          name: "Github",
          url: "",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/keep-calm-and-carry-on",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
        {
          name: "Live Demo",
          url:
            "https://akshitagupta15june.github.io/Keep-Calm-and-Carry-On.github.io/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "1",
      name: "YOG4LIFE SOCIAL APP",
      url: "https://github.com/kevalvavaliya/Yog4Life",
      description:
        "An app for helping people their healthy life. Yog4Life Has a feed feature which is help to get information from the folks, Yog4Life has an anonymous chat room to get connected with the world.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/kevalvavaliya/Yog4Life",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devfolio",
          url: "https://devfolio.co/projects/yoglife-b20d",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "2",
      name: "Adoptisity",
      url: "https://github.com/kevalvavaliya/Adoptisity",
      description:
        "Our mission is to spread awareness about the benefits of adoption and to support LGBT families so that everyone has the chance to have a loving home environment.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Wix",
          iconifyClass: "bxl:wix",
        },
      ],
      links: [
        {
          name: "Github",
          url: "",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/adoptisity",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
        {
          name: "Live Demo",
          url: "https://rajmahadevwala1.wixsite.com/adoptisity",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "3",
      name: "FinSplit",
      url: "https://github.com/rajmahadev8/Fin-Split",
      description:
        "Split your bills with your friends without any hassle. Manage Group Expenses, Track your expenses, and much more.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/rajmahadev8/Fin-Split",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/finsplit",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "rinkesh.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
