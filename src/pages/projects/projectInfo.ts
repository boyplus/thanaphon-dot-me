interface ProjectInfo {
  name: string;
  title: string;
  description: string;
  link?: string;
  github?: string;
  stacks: string[];
  home: string;
  images: string[];
  isMobile: boolean;
  width?: number;
  height?: number;
  mates?: string[];
}

const projectInfos: ProjectInfo[] = [
  {
    name: 'easy-bartering',
    title: 'Easy Bartering - Mobile application for multi-party bartering',
    description:
      'Easy bartering is a mobile application for finding and performing multi-party bartering to solve the problem of 1-1 trading which is a traditional way of item exchanging. Instead of finding someone who has something you want and wants something you have, this application will find and select the best group of people that can exchange things together.',
    github: 'https://github.com/CS20-SIT/Eduroom',
    stacks: [
      'Front-end: Flutter',
      'Back-end: NodeJS (Nest) with typscript',
      'Graph database: Neo4j',
      'Document database: MongoDB',
      'Data structure store: Redis',
      'Version Control: Github',
      'Infrastructure: Google Cloud Run, Google Cloud Storage',
    ],
    home: '/images/project/easy-bartering/home.png',
    images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png'],
    isMobile: false,
  },
  {
    name: 'eduroom',
    title: 'Eduroom (Online Learning Platform)',
    description:
      'Online learning platform which is a term project of Intregated Project I in Computer Science course. My responsibility of this project is to be a application development leader. These project divide into 10 features (each group do one feature)',
    link: 'https://eduroom.cscms.me',
    github: 'https://github.com/CS20-SIT/Eduroom',
    stacks: [
      'Front-end: NextJS',
      'Back-end: NodeJS (Express)',
      'Realtime Chat System: SocketIO',
      'CSS Library: Material UI',
      'Database: PostgresSQL',
      'Version Control: Github',
      'Host: Google Cloud Platform',
    ],
    home: '/images/project/eduroom/home.png',
    images: ['1.png', '2.png', '3.png', '4.png', '5.png'],
    isMobile: false,
  },

  {
    name: 'bts-live-view',
    title: 'BTS Live view count',
    description:
      'Web application that show the current view count of music video of BTS (Korean boy band) in real time. I create this web application becuase I am a fan of BTS, so I would like to see the live view of their music videos. I can also add new music viedo in website (admin part).',
    link: 'https://bts-live-view.herokuapp.com',
    github: 'https://github.com/boyplus/bts-live-view-count',
    stacks: [
      'Front-end: ReactJS',
      'Back-end: NodeJS (Express)',
      'Database: MongoDB',
      'Version Control: Github',
      'Host: Heroku',
    ],
    home: '/images/project/bts-live-view/home.png',
    images: ['1.png', '2.png', '3.png', '4.png', '5.png'],
    isMobile: false,
  },

  {
    name: 'kkp-cargo',
    title: 'KKP Cargo & Logistic',
    description:
      'Web application of cargo services to let customer can keep track of their orders. Also let staff to update the status of products by scan barcode of traking number. I am a freelance full stack developer of this project. My responsibility is gathering information and requirement from KKP cargo company, design the database, frontend, and backend.',
    link: 'https://www.kkpcargo.com/',
    stacks: [
      'Front-End Framework: NextJS',
      'Back-end: NodeJS (Express)',
      'Database: MySQL',
      'Version Control: Github',
      'Host: Azure',
    ],
    mates: ['Chalanthorn Sirimongkholphawong'],
    home: '/images/project/kkp-cargo/home.png',
    images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png'],
    isMobile: false,
  },

  {
    name: 'dek-care',
    title: 'Dek Care',
    description:
      'Mobile application which is a term project of Integrated Project II in Computer Science course. This application is for parents who would like to consult with doctor and communicate with other parents.',
    github: 'https://github.com/int-pro-2/dekcare-frontend',
    stacks: [
      'Front-end: Flutter',
      'Back-end: NodeJS (Express)',
      'Database: MySQL',
      'Version Control: Github',
      'Host: Google Cloud',
    ],
    home: '/images/project/dek-care/home.png',
    images: ['1.png', '2.png', '3.png'],
    isMobile: true,
    width: 266,
    height: 478,
  },

  {
    name: 'setthi',
    title: 'Setthi',
    description:
      'Setthi is an expense manage mobile application. This application can help user to manage their daily expense. My resposibility of this project is to design application and do frontend part by using flutter and dart.',
    github: 'https://github.com/int-pro-2/dekcare-frontend',
    stacks: [
      'Front-end: Flutter',
      'Back-end: NodeJS (Express)',
      'Database: MySQL',
      'Version Control: Github',
      'Host: Google Cloud',
    ],
    mates: [
      'Wisarut Kitticharoenphonngam',
      'Kaewket Saelee',
      'Thanakorn Aungkunchuchod',
      'Sethanant Pipatpakorn',
    ],
    home: '/images/project/setthi/home.png',
    images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png'],
    isMobile: true,
    width: 207,
    height: 448,
  },
];
export default projectInfos;
