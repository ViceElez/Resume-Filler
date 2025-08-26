import images from '../assets/images/images'
import '../index.css'

export const HowItWorksSection = () => {
  return (
    <section id='how-it-works' className='how-it-works-section'>
      <h2>How It Works</h2>
      <div className='how-it-works-main'>
        <div className='how-it-works-content'>
          <p>1. Upload Your Resume: Start by uploading your current resume and the job description of the position you're applying for.</p>
          <p>2. AI Analysis: Our advanced AI scans both documents to identify key skills and experiences.</p>
          <p>3. Tailored Resume: Receive a customized resume that highlights your strengths and aligns with the job requirements.</p>
        </div>
        <div className='how-it-works-image-container'>
          <img src={images.HowItWorks} alt="How It Works" className='how-it-works-image' />
        </div>
      </div>
    </section>
  );
};
