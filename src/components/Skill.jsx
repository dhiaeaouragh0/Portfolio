/**
 * @copyright 2024 DHIAEAOURAGH
 * @license apache-2.0
 */
/**
 * Node Modules
 */
import React from 'react'
/**
 * Components
 */
import SkillCard from './SkillCard';


const Skill = () => {
  const skillItem = [
    {
        imgSrc: '/images/logos/JavaScript-logo.png',
        label: 'JavaScript',
        desc: 'Interaction'
    },
    {
        imgSrc: '/images/logos/React-icon.svg',
        label: 'React',
        desc: 'Front-end Framework'
    },
    {
        imgSrc: '/images/logos/node.svg',
        label: 'NodeJS',
        desc: 'Web Server'
    },
    {
        imgSrc: '/images/logos/express-js.svg',
        label: 'ExpressJS',
        desc: 'Node Framework'
    },
    {
        imgSrc: '/images/logos/mongodb-logo.png',
        label: 'MongoDB',
        desc: 'Database'
    },
    {
      imgSrc: '/images/logos/Tailwind_CSS_Logo.svg',
      label: 'TailwindCSS',
      desc: 'CSS Framework'
    },
    {
      imgSrc: '/images/logos/CSS3_logo.svg',
      label: 'CSS3',
      desc: 'Styling'
    },
    {
        imgSrc: '/images/logos/django.svg',
        label: 'Django',
        desc: 'Back-end Framework'
    },
    {
        imgSrc: '/images/logos/python.svg',
        label: 'Python',
        desc: 'Programming Language'
    },
    {
        imgSrc: '/images/logos/java-icon.svg',
        label: 'Java',
        desc: 'Programming Language'
    },
    {
        imgSrc: '/images/logos/sql.svg',
        label: 'SQL',
        desc: 'Database Management'
    },
    {
        imgSrc: '/images/logos/xml.svg',
        label: 'XML',
        desc: 'Markup Language'
    },
    {
        imgSrc: '/images/logos/Photoshop.svg',
        label: 'Photoshop',
        desc: 'Graphic Design'
    },
    {
        imgSrc: '/images/logos/Illustrator.svg',
        label: 'Illustrator',
        desc: 'Graphic Design'
    }
];

  return (
    <section className="section">
        <div className="container">

            <h2 className="headline-2">
                Tools I Rely On
            </h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
            Explore the essential tools and technologies that power my development process,
             ensuring high-quality, optimized web solutions.
            </p>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc,label,desc}, key) => (
                        <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill