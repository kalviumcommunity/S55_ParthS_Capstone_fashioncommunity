
import React, { useState } from 'react';
import './create.css'; 

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  const nextStep = () => setStep(prevStep => prevStep + 1);
  const prevStep = () => setStep(prevStep => prevStep - 1);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile && selectedFile.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => setFilePreview(e.target.result);
      reader.readAsDataURL(selectedFile);
    } else {
      setFilePreview(null);
    }
  };

  return (
    <div className="form-container">
      <ul id="progressbar">
        <li className={step >= 0 ? 'active' : ''}>Account Setup</li>
        <li className={step >= 1 ? 'active' : ''}>Social Profiles</li>
        <li className={step >= 2 ? 'active' : ''}>Personal Details</li>
      </ul>

      {/* <fieldset className={step === 0 ? 'show' : ''}>
        <h2 className="fs-title">Add your designs</h2>
        <h3 className="fs-subtitle">This is step 1</h3>
        <input type="text" name="name" placeholder="Design Name" />
        <input type="text" name="desc" placeholder="Description" />
        <input type="file" onChange={handleFileChange} />
        {filePreview && <img src={filePreview} alt="Preview" style={{ width: '100px', height: '100px', marginTop: '10px' }} />}
        <button type="button" className="next action-button" onClick={nextStep}>
          Next
        </button>
      </fieldset> */}


<fieldset className={step === 0 ? 'show' : ''}>
  <h2 className="fs-title">Add your designs</h2>
  <h3 className="fs-subtitle">This is step 1</h3>
  <input type="text" name="name" placeholder="Design Name" />
  <input type="text" name="desc" placeholder="Description" />
  <div className="file-upload-wrapper">
    <label className="file-upload-label" htmlFor="file-upload-input">
      Choose File
    </label>
    <input
      id="file-upload-input"
      className="file-upload-input"
      type="file"
      onChange={handleFileChange}
    />
  </div>
  {filePreview && <img src={filePreview} alt="Preview" style={{ width: '100px', height: '100px', marginTop: '10px' }} />}
  <button type="button" className="next action-button" onClick={nextStep}>
    Next
  </button>
</fieldset>


      <fieldset className={step === 1 ? 'show' : ''}>
        <h2 className="fs-title">Social Profiles</h2>
        <h3 className="fs-subtitle">Your presence on the social network</h3>
        <input type="text" name="twitter" placeholder="Twitter" />
        <input type="text" name="facebook" placeholder="Facebook" />
        <input type="text" name="gplus" placeholder="Google Plus" />
        <button type="button" className="previous action-button" onClick={prevStep}>
          Previous
        </button>
        <button type="button" className="next action-button" onClick={nextStep}>
          Next
        </button>
      </fieldset>

      <fieldset className={step === 2 ? 'show' : ''}>
        <h2 className="fs-title">Personal Details</h2>
        <h3 className="fs-subtitle">We will never sell it</h3>
        <input type="text" name="fname" placeholder="First Name" />
        <input type="text" name="lname" placeholder="Last Name" />
        <input type="text" name="phone" placeholder="Phone" />
        <textarea name="address" placeholder="Address"></textarea>
        <button type="button" className="previous action-button" onClick={prevStep}>
          Previous
        </button>
        <a href="/" className="submit action-button">
          Submit
        </a>
      </fieldset>
    </div>
  );
};

export default MultiStepForm;
