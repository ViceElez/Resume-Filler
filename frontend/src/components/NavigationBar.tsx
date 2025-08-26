import images from '../assets/images/images';
import '../index.css'
const menu=[
  { title: 'Home', link: '#home' },
  { title: 'About', link: '#about' },
  { title: 'How It Works', link: '#how-it-works' },
  { title: 'Contact', link: '#contact' },
]
export const NavigationBar = () => {
  return (
    <nav className='navigation-bar'>
        <div className='navigation-bar-content'>
          <img src={images.ResumeLogo} alt="Logo" className='navigation-bar-logo' />
          <h2 className='navigation-title'>Resume Filler</h2>
        </div>
      <ul className='navigation-links'>
        {menu.map((item) => (
          <li key={item.title} className='navigation-link-item'>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
