import { Link } from 'react-router-dom';

import { socialLinks } from '../constants';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>© {date}. All rights reserved.</p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              target='_blank'
              aria-label={`Visit ${link.name}`}
            >
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
