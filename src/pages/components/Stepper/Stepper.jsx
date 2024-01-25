import React, { useState } from 'react';
import FormOtp from '../FormOTP';
import SelectedAvatar from '../SelectedAvatar';
import SelectAvatar from '../SelectAvatar';
import RegisterForm from '../RegisterForm';
import ForgiveIdentity from '../ForgetIdentity';
import SuccessMessage from '../SuccessMessage';
// Import other step components...

const Stepper = () => {
    const [currentComponent, setCurrentComponent] = useState(1);
    const [state , setState] = useState()
    const [response , setResponse] = useState()
    const handleNext = () => {
      setCurrentComponent((prevComponent) => (prevComponent < 6 ? prevComponent + 1 : prevComponent));
    };


    return (
        <div>


      {currentComponent === 1 && <ForgiveIdentity onNext={handleNext} />}
      {currentComponent === 2 && <SelectAvatar state={state} setState={setState} onNext={handleNext} />}
      {currentComponent === 3 && <SelectedAvatar state={state} setState={setState} onNext={handleNext} />}
      {currentComponent === 4 && <RegisterForm state={state} setState={setState} onNext={handleNext} setResponse={setResponse} />}
      {currentComponent === 5 && <FormOtp response={response} onNext={handleNext} />}
      {currentComponent === 6 && <SuccessMessage onNext={handleNext} />}

        </div>
    );
};

export default Stepper;
