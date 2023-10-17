import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  // get about me data from aboutData object
  const {profileImageSrc, description, aboutItems} = aboutData;
  return (
    // create section with dark background
    <Section className="bg-neutral-900" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-3': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-startw">
            <div className="relative h-48 w-48 overflow-hidden rounded-xl md:h-96 md:w-64">
              <Image alt="about-me-image" className="h-full w-full object-cover" src={profileImageSrc} />
            </div>
          </div>
        )}
        <div
          className={classNames('col-span-1 flex flex-col gap-y-6', {
            'md:col-span-2': !!profileImageSrc,
            'md:ml-10': !!profileImageSrc,
          })}>
          <div className="flex flex-col gap-y-2 pt-2">
            <h2 className="text-2xl font-bold text-white">About me</h2>
            <p className="prose prose-sm text-gray-300 sm:prose-base">{description}</p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="col-span-1 flex items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-white" />}
                <span className="text-sm font-bold text-white">{label}:</span>
                <span className=" text-sm text-gray-300">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
