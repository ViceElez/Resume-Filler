import '../index.css'
import { NavigationBar,AboutSection,HowItWorksSection,ContactInfoSection,HomeSection } from '../components/index';

export const HomePage = () => {
  return (
    <div className='home-page-container'>
      <NavigationBar />
      <HomeSection/>
      <AboutSection />
      <HowItWorksSection /> 
      <ContactInfoSection />
    </div>
  );
};
