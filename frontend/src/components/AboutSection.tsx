import images from "../assets/images/images";

export const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <h2>About</h2>
      <div className="about-main">
        <div className="about-content">
          <p>This page is designed to make the job application process faster, easier, and smarter. By uploading your personal resume and the company’s job description or resume, our system automatically analyzes both documents and generates a tailored version of your resume.</p>
          <p>Instead of manually rewriting or adjusting your CV for every job application, our tool highlights your most relevant skills, experiences, and achievements that match the company’s requirements. This way, you always present the strongest version of yourself to potential employers.</p>
          <p>Our goal is simple: save you time, reduce stress, and help you stand out with a resume that speaks directly to what each employer is looking for.</p>
        </div>
        <div className="about-image-container">
          <img src={images.AboutUs} alt="About Us" className="about-image" />
        </div>
      </div>
    </section>
  );
};
