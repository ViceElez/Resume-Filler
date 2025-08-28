import { saveFormInfo } from '../types/saveFormInfo';
import '../index.css'
export const HomeSection = () => {
    return (
      <div id='home' className='home-page-content'>
        <h1 className='home-page-title'>Resume Filler</h1>
        <div className='home-page-form'>
          <form className='form-grid'
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              await saveFormInfo(formData);
            }}
          >
            <input
              type="file"
              id="user-resume-upload"
              name="user-resume-upload-word"
              accept=".doc,.docx"
              required
            />
            <input
              type="file"
              id="company-resume-upload"
              name="company-resume-upload-word"
              required
              accept=".doc,.docx"
            />
            <button type="submit">Upload</button>
          </form>
        </div>
      </div>
    );
};
