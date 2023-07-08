import { IAboutContent } from './AboutContent';

const workExperiences: IAboutContent[] = [
  {
    title: 'Associate Software Engineer at Agoda (Bangkok)',
    period: 'June 2023 - Present',
    description: ``,
    bullets: [
      'Working in tech team to deal with technical debt in legacy .NET framework project',
      'Migrate from WCF service to call API gateway, the end goal is to move from running on windows to vm.',
      'Implement APIs in YSC gateway, and Supply Management API using c# and scala.',
    ],
    skills: ['Scala', 'ASP.NET Core', 'Software Migration'],
  },
  {
    title: 'Software Engineer intern at Agoda (Bangkok)',
    period: 'June 2022 - Present',
    description: ``,
    bullets: [
      `Developed internal profiling tool for production .NET applications. It helps developer to diagnose the root cause of spikes in production. Developed both front-end and back-end using React, Typescript, ASP.NET core, Ceph, which deployed to K8s`,
      `Break the monolith of host manage inbox page. Improve developer experience by reducing start and build front-end time by 300% and simplifying the code in front-end. The challenge is the breaking changes from .NET 4 to .NET 6.`,
      `Working on Agoda Homes product with 7 part-time intern in a scrum team. Develop client-side features which also include unit testing, AB testing integration.`,
    ],
    skills: ['React', 'Typescript', 'Redux', 'ASP.NET Core', 'Jest'],
  },

  {
    title: 'Freelance full-stack web developer at KKP cargo',
    period: 'December 2020 - April 2021',
    description: ``,
    bullets: [
      `Developed a web application for cargo service with over 100 customers which allows them to keep track of their orders. It also helps staff to manage product status by scanning the barcode.`,
      `My responsibilities were information gathering, database design, and web application development. This project allow me to collaborate with customer and continually get feedback from them.`,
    ],
    skills: ['React', 'NodeJS', 'PostgreSQL'],
  },
];

const activityExperiences: IAboutContent[] = [
  {
    title: 'Teaching Assistance',
    period: 'August 2020 - December 2021',
    description: `I was a mentor in Introduction to programming and Web application development course for the first year student at SIT KMUTT. I was responsible for teaching Java with OOP concept, reviewing questions for quiz, and teaching basic of React.`,
    bullets: [],
  },

  {
    title: 'Core team of GDSC KMUTT',
    period: 'September 2020 - May 2022',
    description: `Written contents about Google services and SDGs. The topic that I published on facebook page are Basic ideas of how Google Maps work, Basic of Google Map APIs, and Brief of Sustainable Development Goals.`,
    bullets: [],
  },
];

const awards: IAboutContent[] = [
  {
    title: 'Programming Competition Thailand National',
    period: '2019',
    description: `🥇 Gold medal (1st place) - Competitive programming which includes problem-solving, algorithms, and data structures with team of 2 members.`,
    bullets: [],
  },

  {
    title: 'Thailand Olympaid in Informatics (TOI 14th)',
    period: '2019',
    description: `🥉 Bronze medal (28th place) - The competition of representative from computer olympiad camp. The competition is focused on competitive programming which required experience on Algorithms, and Data structures.`,
    bullets: [],
  },

  {
    title: 'Thailand Olympaid in Informatics (TOI 13th)',
    period: '2019',
    description: `🥉 Bronze medal (42th place)`,
  },
];

export { workExperiences, activityExperiences, awards };
