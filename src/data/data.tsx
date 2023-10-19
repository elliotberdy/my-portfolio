// this file contains all of the relevant data for the website

import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  DocumentTextIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background2.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Elliot Berdy Personal Site',
  description: 'My personal site',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'home',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Elliot Berdy/>`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a California based <strong className="text-stone-100">Software Developer</strong>, who recently graduated
        from <strong className="text-stone-100">UCLA</strong> with a degree in Computer Science. I'm dedicated to making
        a <strong className="text-stone-100">positive</strong> difference in the world through the things that truly
        inspire me.
      </p>
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training for a <strong className="text-stone-100">triathlon</strong>, in
        the Pacific Ocean <strong className="text-stone-100">surfing</strong>, or exploring the great{' '}
        <strong className="text-stone-100">outdoors</strong>.
      </p> */}
    </>
  ),
  actions: [
    {
      href: '/Resume_Elliot_Berdy.pdf',
      text: 'Resume',
      primary: true,
      Icon: DocumentTextIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: true,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hi! I'm Elliot Berdy, a recent computer science graduate from UCLA. 
  My passion lies in building things with code, and I am especially interested in AI, ML, and medicine. 
  I'm not just a tech enthusiast though; I'm also an avid triathlete, nature lover, surfer, and pianist. 
  Whether I'm coding, exploring the outdoors, or engaging with my community, I'm always trying to learn and grow as a person. 
  My diverse experiences have honed my leadership and teamwork skills, and have also contributed to a wide knowledge base. 
  I'm committed to making a positive impact on society and bringing joy and light to the world around me!`,
  aboutItems: [
    {label: 'Education', text: 'UCLA', Icon: AcademicCapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Location', text: 'Irvine/San Francisco, CA', Icon: MapIcon},
    // {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    {label: 'Employment', text: 'Searching...', Icon: BuildingOffice2Icon},
    // {label: 'Interests', text: 'Triathlon, Basketball, Surfing', Icon: SparklesIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'C++',
        level: 7,
      },
      {
        name: 'C',
        level: 4,
      },
    ],
  },
  {
    name: 'Soft Skills',
    skills: [
      {
        name: 'Leadership',
        level: 9,
      },
      {
        name: 'Teamwork',
        level: 8,
      },
      {
        name: 'Communication',
        level: 7,
      },
    ],
  },
  {
    name: 'Web Development/Database',
    skills: [
      {
        name: 'HTML/CSS',
        level: 6,
      },
      {
        name: 'JavaScript',
        level: 4,
      },
      {
        name: 'Node.js',
        level: 4,
      },
      {
        name: 'Postgres',
        level: 3,
      },
      {
        name: 'React.js',
        level: 3,
      },
    ],
  },
  {
    name: 'Miscellaneous',
    skills: [
      {
        name: 'Git',
        level: 8,
      },
      {
        name: 'Linux',
        level: 7,
      },
      {
        name: 'Tensorflow/Pytorch',
        level: 6,
      },
      {
        name: 'GCP',
        level: 5,
      },
      {
        name: 'Docker',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'MyFood',
    description:
      'MyFood is a personal project of mine that can track the food a user is eating and how they are feeling after that food.',
    url: 'https://elliotberdy.onrender.com/',
    image: porfolioImage1,
  },
  {
    title: 'My Personal Website',
    description: 'My website that shows the world who I am.',
    url: '#',
    image: porfolioImage2,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2023',
    location: 'University of California, Los Angeles (UCLA)',
    title: 'Bachelors of Science, Computer Science',
    content: (
      <p>
        <strong>GPA:</strong> 3.63<br></br>
        <strong>Dean's Honors List</strong> (Spring 2020, Fall 2021, Spring 2022)<br></br>
        <strong>Computational Genomics</strong> Technical Breadth<br></br>
        <strong>Relevant Coursework:</strong> Machine Learning, Neural Networks and Deep Learning, Artificial
        Intelligence, Natural Language Processing, Neural Signal Processing, Software Engineering, Data Structures and
        Algorithms, Algorithms and Complexity
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'November 2021 - November 2022',
    location: 'UCLA Neurosurgery',
    title: 'Student Researcher',
    content: (
      <div>
        <ul style={{listStyleType: 'disc', marginLeft: '20px'}}>
          <li>
            Independently developed image classifier using Python and TensorFlow to determine MRI modality in mixed
            dataset of brain and spine MRIs with accuracy of 98.9%
          </li>
          <li>
            Manually segmented paraspinal muscles in lumbar MRIs in collaboration with team of researchers and
            neurosurgeons to train machine learning algorithms to assess degeneration and muscle integrity of paraspinal
            muscles
          </li>
          <li>Published papers to World Neurosurgery and SPIE Medical Imaging</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'August 2020 - December 2020',
    location: 'AbbVie Inc.',
    title: 'Research Analyst',
    content: (
      <div>
        <ul style={{listStyleType: 'disc', marginLeft: '20px'}}>
          <li>
            Analyzed real-world data as a member of the Health Economics and Outcomes Research Oncology department
          </li>
          <li>
            Built 5 dashboards exhibiting patients baseline info and healthcare costs and utilizations for various
            diseases and treatments using Python and the Instant Health Data platform
          </li>
          <li>
            Selected important measures to consider when examining data by reading through various research publications
          </li>
          <li>Measured diversity in AbbVie’s clinical trials using SAS and national databases as control</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'June 2018 - August 2023',
    location: 'Camp Stone',
    title: 'Outdoor Leadership Summer Program Director',
    content: (
      <div>
        <p>
          <strong>
            Outdoor Leadership Summer Program Director (2022-23); Division Head/Medic (2021) Counselor (2018-2020)
          </strong>
        </p>
        <ul style={{listStyleType: 'disc', marginLeft: '20px'}}>
          <li>
            Designed and facilitated month-long outdoor focused program for 80 incoming 10th grade students designed to
            help students grow and become leaders in their communities
          </li>
          <li>
            Mentored and led 12 post-high school staff members in conflict resolution, program implementation, and
            problem solving
          </li>
        </ul>
      </div>
    ),
  },
  {
    date: 'January 2022 - March 2022',
    location: 'PRN',
    title: 'EMT',
    content: (
      <div>
        <ul style={{listStyleType: 'disc', marginLeft: '20px'}}>
          <li>
            Cared for patients while transporting via ambulance and administered medical treatment en route to/from
            hospitals
          </li>
          <li>
            Communicated with medical professionals, patients, and patients’ families to obtain medical histories and
            identify treatments based on symptoms
          </li>
        </ul>
      </div>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Elliot Berdy',
      text: 'Hire him now!',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: `I'd love to connect! Whether it is to discuss a job opportunity, a personal project, or just life, please reach out!`,
  items: [
    {
      type: ContactType.Email,
      text: 'berdyelliot@gmail.com',
      href: 'mailto:berdyelliot@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Irvine/San Francisco, United States',
      href: '',
    },
    {
      type: ContactType.Github,
      text: 'elliotberdy',
      href: 'https://github.com/elliotberdy',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/elliotberdy'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/elliot-berdy/'},
];
