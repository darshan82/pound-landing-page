import React, { useEffect, useLayoutEffect, useState } from 'react';
import FormOtp from '../FormOTP';
import SelectedAvatar from '../SelectedAvatar';
import SelectAvatar from '../SelectAvatar';
import RegisterForm from '../RegisterForm';
import ForgiveIdentity from '../ForgetIdentity';
import SuccessMessage from '../SuccessMessage';
import ErrorMessage from '../ErrorMessage';
import OnboardMission from '../OnbordMission';

const Stepper = () =>
{
  const [currentComponent, setCurrentComponent] = useState(1);
  const [state, setState] = useState()
  const [response, setResponse] = useState()
  const handleNext = () =>
  {
    setCurrentComponent((prevComponent) => (prevComponent < 6 ? prevComponent + 1 : prevComponent));
  };

  useLayoutEffect(() =>
  {

    const queryParams = new URLSearchParams(window.location.search);
    const paramValue = queryParams.get('step');
    console.log('Query parameter value:', paramValue);
    if(paramValue){
      setCurrentComponent(7)
    }

  }, [])

  return (
    <div>


      {currentComponent === 1 && <ForgiveIdentity onNext={handleNext} />}
      {currentComponent === 2 && <OnboardMission state={state} setState={setState} onNext={handleNext} />}
      {currentComponent === 3 && <SelectAvatar state={state} setState={setState} onNext={handleNext} />}
      {currentComponent === 4 && <SelectedAvatar state={state} setState={setState} onNext={handleNext} />}
      {currentComponent === 5 && <RegisterForm state={state} setState={setState} onNext={handleNext} setResponse={setResponse} />}
      {currentComponent === 6 && <FormOtp response={response} onNext={handleNext} />}
      {currentComponent === 7 && <SuccessMessage onNext={handleNext} />}
      {currentComponent === 8 && <ErrorMessage onNext={handleNext} />}


    </div>
  );
};

export default Stepper;
