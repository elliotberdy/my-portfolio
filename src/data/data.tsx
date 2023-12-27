// this file contains all of the relevant data for the website

import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  DocumentTextIcon,
  MapIcon,
} from '@heroicons/react/24/outline';
import {Image} from 'react-grid-gallery';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background2.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';
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
  Images: 'images',
  Resume: 'resumé',
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
      text: 'Resumé',
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
        level: 5,
      },
      {
        name: 'C++',
        level: 4,
      },
      {
        name: 'C',
        level: 3,
      },
      {
        name: 'JavaScript',
        level: 3,
      },
    ],
  },
  {
    name: 'Web Development/Database',
    skills: [
      {
        name: 'HTML/CSS',
        level: 3,
      },
      {
        name: 'React.js',
        level: 2,
      },
      {
        name: 'Node.js',
        level: 1,
      },
      {
        name: 'Postgres',
        level: 1,
      },
    ],
  },
  {
    name: 'Miscellaneous',
    skills: [
      {
        name: 'Git',
        level: 4,
      },
      {
        name: 'Linux',
        level: 3,
      },
      {
        name: 'Tensorflow/Pytorch',
        level: 2,
      },
      {
        name: 'AWS',
        level: 2,
      },
      {
        name: 'GCP',
        level: 2,
      },
      {
        name: 'Docker',
        level: 2,
      },
    ],
  },
  {
    name: 'Non-technical Skills',
    skills: [
      {
        name: 'Leadership',
        level: 5,
      },
      {
        name: 'Teamwork',
        level: 5,
      },
      {
        name: 'Communication',
        level: 4,
      },
      {
        name: 'Hebrew',
        level: 3,
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
    title: 'My Medium Profile',
    description: 'Check out some blog posts I have written!',
    url: 'https://medium.com/@berdyelliot',
    image: porfolioImage4,
  },
  {
    title: 'My Personal Website',
    description: 'My website that shows the world who I am.',
    url: '#',
    image: porfolioImage2,
  },
  {
    title: 'Spotify Alarm',
    description: 'Quick python script that plays a given song from Spotify using the Spotify Web API at a set time.',
    url: 'https://github.com/elliotberdy/spotify-alarm/tree/main',
    image: porfolioImage3,
  },
];

export interface ImageItem extends Image {
  original: string;
}

export const imageItems: ImageItem[] = [
  {
    src: '/imageGallery/img1.jpg',
    original: '/imageGallery/img1.jpg',
    width: 768,
    height: 1024,
  },
  {
    src: '/imageGallery/img2.jpg',
    original: '/imageGallery/img2.jpg',
    width: 2305,
    height: 1537,
  },
  {
    src: '/imageGallery/img3.jpg',
    original: '/imageGallery/img3.jpg',
    width: 2305,
    height: 1537,
  },
  {
    src: '/imageGallery/img4.jpg',
    original: '/imageGallery/img4.jpg',
    width: 4032,
    height: 3024,
  },
  {
    src: '/imageGallery/img5.jpg',
    original: '/imageGallery/img5.jpg',
    width: 4032,
    height: 3024,
  },
  {
    src: '/imageGallery/img6.jpg',
    original: '/imageGallery/img6.jpg',
    width: 3024,
    height: 4032,
  },
  {
    src: '/imageGallery/img7.jpg',
    original: '/imageGallery/img7.jpg',
    width: 1365,
    height: 2048,
  },
  {
    src: '/imageGallery/img8.jpeg',
    original: '/imageGallery/img8.jpeg',
    width: 1920,
    height: 1280,
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
        <strong>Dean's Honors List:</strong> Spring 2020, Fall 2021, Spring 2022<br></br>
        <strong>Technical Breadth:</strong> Computational Genomics<br></br>
        <strong>Relevant Coursework:</strong> Machine Learning, Neural Networks and Deep Learning, Artificial
        Intelligence, Natural Language Processing, Neural Signal Processing, Software Engineering, Data Structures and
        Algorithms, Algorithms and Complexity, Cell and Molecular Biology, Physiology and Human Biology, Introduction to
        Enzymes and Metabolism, General and Organic Chemistry
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'October 2023 - Present',
    location: 'Fayble Inc.',
    title: 'Software Engineer',
    content: (
      <div>
        <ul style={{listStyleType: 'disc', marginLeft: '20px'}}>
          <li>
            Developing sole means for user-product interaction through interactive voice response (IVR) interface using
            AWS and Python, enabling users to engage in an interactive and dynamic experience
          </li>
          <li>
            Ensuring project alignment with requirements of product and company through close collaboration with fellow
            engineers
          </li>
          <li>
            Optimized storage and retrieval of user-related data by configuring DynamoDB as persistence layer, allowing
            for personalized experience
          </li>
          <li>
            Enabled IVR interface to adapt to changing game scenarios by implementing dynamic entities to support varied
            and evolving voice response options
          </li>
          <li>
            Designed and implemented user-product interaction flow by creating specialized handlers for product specific
            actions, including starting the game, making wagers, analyzing past wagers, and managing game states,
            creating a user friendly and engaging experience
          </li>
          <li>
            Enhanced product’s resilience and facilitated efficient issue resolution through implementing robust logging
            mechanisms
          </li>
        </ul>
      </div>
    ),
  },
  {
    date: 'November 2021 - November 2022',
    location: 'UCLA Neurosurgery',
    title: 'Student Researcher',
    content: (
      <div>
        <ul style={{listStyleType: 'disc', marginLeft: '20px'}}>
          <li>
            Developed MRI modality image classifier with Python and Tensorflow, achieving a 98.9% accuracy by leveraging
            transfer learning with five state-of-the-art deep learning models
          </li>
          <li>
            Enabled training of machine learning algorithms to assess and quantify paraspinal muscle degeneration by
            collaborating with multidisciplinary team of researchers and neurosurgeons to manually segment paraspinal
            muscles in lumbar MRIs
          </li>
          <li>
            Contributed to writing and publishing multiple research papers in prestigious journals, including World
            Neurosurgery and SPIE Medical Imaging
          </li>
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
            Helped derive meaningful insights in oncological research by producing five dynamic dashboards utilizing
            Python and the Health Data Platform, showcasing essential patient baseline information and healthcare costs
            and utilization patterns across diverse diseases and treatment modalities
          </li>
          <li>
            Contributed to the advancement of equitable healthcare practices at AbbVie by utilizing SAS and national
            databases to measure and analyze diversity within AbbVie’s clinical trials
          </li>
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
            Facilitated growth of 80 10th grade students as individuals and leaders in their communities by designing
            and running month-long outdoor leadership program with weeklong hiking and canoeing trips and experiential
            education focused on community and the power of speech
          </li>
          <li>
            Responsible for the health and safety of 90+ campers and staff members and mentored 12 post-high school
            staff members in conflict resolution, program implementation, and problem solving
          </li>
          <li>
            Served as the head medic during program activities, providing medical care and first aid for a wide range of
            conditions, from blisters to broken bones, ensuring the safety and well-being of participants during outdoor
            excursions
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
      name: 'Yakov Fleischmann',
      text: 'I had the privilege of working with, supervising, and mentoring Elliot for several years \
      as he rose in the ranks at Camp Stone. In his final two year at camp, he ran our outward-bound \
      leadership training program for 10th graders comprised of 85 campers and 15 staff members. \
      He is truly remarkable. He is kind, intelligent, thoughtful, patient, and a pleasure to work with. \
      He is confidential and trustworthy and would make an excellent addition to any team. \
      He is the sort of individual that would be successful in any career he chooses to pursue, \
      and any employer would be lucky to have him on their team. One of the things that stands out most \
      about Elliot is his loyalty and therefore his selflessness. I found that he prioritized our needs \
      at camp and his ability to help us over other personal needs and objectives/goals. \
      It is rare and I mean RARE to find individuals in today\'s society that prioritize the needs of \
      the many over the needs of the few or the one. If you would you like to discuss Elliot further in \
      consideration of future employment, please feel free to contact me."',
      // image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
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
