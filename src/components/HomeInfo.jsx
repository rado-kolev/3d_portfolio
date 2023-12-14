import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className='info-box'>
      <p className='font-medium sm:text-lg text-center'>{text}</p>
      <Link to={link} className='neo-btn neo-brutalism-white'>
        {btnText}
        <img src={arrow} />
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <div className='neo-brutalism-blue py-4 px-8 text-white text-center'>
      <h1 className='sm:text-xl sm:leading-snug mx-5'>
        👋 Hi, I am <span className='font-semibold'>Rado</span>
        <br />A Front-end Developer
      </h1>
      <br />
      <h3>Feel free to explore The Island</h3>
    </div>
  ),
  2: (
    <InfoBox
      text='I Know That a Good Site Means Good Business'
      link='/about'
      btnText='Learn More'
    />
  ),
  3: (
    <InfoBox
      text='My Creative Portfolio Section'
      link='/projects'
      btnText='Visit it'
    />
  ),
  4: (
    <InfoBox
      text='Take A Coffee & Chat With Me'
      link='/contact'
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
