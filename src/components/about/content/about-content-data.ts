import { IAboutContent } from './AboutContent';

const workExperiences: IAboutContent[] = [
  {
    title: 'Software Engineer intern at Agoda (Bangkok)',
    period: 'June 2022 - Present',
    description: `I am currently working as a full stack software engineer intern in frontend team. 
      Worked on creating "profiling tool" as an internal tool to profile the Agoda production .NET application. I am responsible for researching on .NET monitor in k8s, front-end development by using React with Typescript, back-end development by using .NET core, and unit testing. This project allows me to work in a scrum team, learn about k8s and unit testing.`,
  },

  {
    title: 'Freelance full-stack web developer at KKP cargo',
    period: 'December 2020 - April 2021',
    description: `Worked on developing web application of KKP Cargo & Logistics company to let customers can keep track of their orders. This project allow me to collaborate with customer, and deploy application to production on cloud.`,
  },
];

const activityExperiences: IAboutContent[] = [
  {
    title: 'Teaching Assistance',
    period: 'August 2020 - December 2021',
    description: `I was a mentor in Introduction to programming and Web application development course for the first year student at SIT KMUTT. I was responsible for teaching Java with OOP concept, reviewing questions for quiz, and teaching basic of React.`,
  },

  {
    title: 'Core team of GDSC KMUTT',
    period: 'September 2020 - May 2022',
    description: `Written contents about Google services and SDGs. The topic that I published on facebook page are Basic ideas of how Google Maps work, Basic of Google Map APIs, and Brief of Sustainable Development Goals.`,
  },
];

const awards: IAboutContent[] = [
  {
    title: 'Programming Competition Thailand National',
    period: '2019',
    description: `🥇 Gold medal (1st place) - Competitive programming which includes problem-solving, algorithms, and data structures with team of 2 members.`,
  },

  {
    title: 'Thailand Olympaid in Informatics (TOI 14th)',
    period: '2019',
    description: `🥉 Bronze medal (28th place) - The competition of representative from computer olympiad camp. The competition is focused on competitive programming which required experience on Algorithms, and Data structures.`,
  },

  {
    title: 'Thailand Olympaid in Informatics (TOI 13th)',
    period: '2019',
    description: `🥉 Bronze medal (42th place)`,
  },
];

export { workExperiences, activityExperiences, awards };
