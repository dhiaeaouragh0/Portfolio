/**
 * @copyright 2024 DHIAEAOURAGH
 * @license apache-2.0
 */
/**
 * Node Modules
 */
import React from 'react'

const About = () => {
    const aboutItems = [
        {
          label: 'Project done',
          number: 3
        },
        {
          label: 'Years of experience',
          number: 1
        }
      ];
  return (
    <section className="section"
    id='about'>
        <div className="container">
            
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                Welcome! I’m AOURAGH DHIAEDDINE,
                 a passionate web developer specializing in creating dynamic,
                  user-friendly websites. With a blend of creative flair and technical skills,
                   I bring ideas to life,delivering exceptional digital experiences that perform
                    seamlessly and look amazing.
                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {aboutItems.map(({label , number},key)=> (
                        <div key={key}>
                            <div className="flex items-center md:mb-2">
                                <span className="text-2xl font-semibold
                                 md:text-4xl">{number}</span>
                                <span className="text-sky-400 font-semibold 
                                md:text-3xl" >+</span>
                            </div>
                            <p className="text-sm text-zinc-400">{label}</p>
                        </div>
                    ))}
                    <img
                        src='/images/LOGOwhite.png'
                        alt='logo'
                        width={30}
                        height={30}
                        className='ml-auto md:w-[40px] md:h-[40px]'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About