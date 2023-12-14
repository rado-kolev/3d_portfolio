import { experiences, skills } from '../constants';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';



const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        👋 Hello, I'm{' '}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Rado
        </span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          A London-based Computing Technologies graduate passionate about
          crafting seamless digital experiences, eager to launch a career in
          front-end development.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>
          My{' '}
          <span className='blue-gradient_text font-semibold drop-shadow'>
            Skills
          </span>
        </h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>
          My{' '}
          <span className='blue-gradient_text font-semibold drop-shadow'>
            Experience
          </span>
        </h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Blending a diverse background, I've actively crafted technical
            expertise through university studies, intensive coursework,
            bootcamps, hands-on projects, and self-directed learning, setting
            the stage for a successful transition into front-end development.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-300' />

      <CTA />
    </section>
  );
};

export default About;
