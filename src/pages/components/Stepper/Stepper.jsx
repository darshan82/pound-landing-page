import React, { useState } from 'react';
import FormOtp from '../FormOTP';
import SelectedAvatar from '../SelectedAvatar';
import SelectAvatar from '../SelectAvatar';
import RegisterForm from '../RegisterForm';
import ForgiveIdentity from '../ForgetIdentity';
import SuccessMessage from '../SuccessMessage';
// Import other step components...

const Stepper = () => {
    // const [currentStep, setCurrentStep] = useState(2);
    const [currentComponent, setCurrentComponent] = useState(1);
    const handleNext = () => {
      setCurrentComponent((prevComponent) => (prevComponent < 6 ? prevComponent + 1 : prevComponent));
    };
  
    // const totalSteps = 6;

    // const handleButtonClick = () => {
    //     setCurrentStep((prevStep) => (prevStep < totalSteps ? prevStep + 1 : prevStep));
    // };


    return (
        <div>


      {currentComponent === 1 && <ForgiveIdentity onNext={handleNext} />}
      {currentComponent === 2 && <SelectAvatar onNext={handleNext} />}
      {currentComponent === 3 && <SelectedAvatar onNext={handleNext} />}
      {currentComponent === 4 && <RegisterForm onNext={handleNext} />}
      {currentComponent === 5 && <FormOtp onNext={handleNext} />}
      {currentComponent === 6 && <SuccessMessage onNext={handleNext} />}


            {/* <button onClick={handleButtonClick} disabled={currentStep === totalSteps}>
                {currentStep === totalSteps ? 'Finish' : 'Next'}
            </button> */}
        </div>
    );
};

export default Stepper;
