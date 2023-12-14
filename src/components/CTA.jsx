import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Ready to bring innovative solutions to your team? <br />
        <br />
        Let's connect and explore how my skills can contribute to your projects.
      </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
