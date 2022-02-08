import { useState } from "react";
import { UncontrolledForm } from "./UncontrolledForm";
import { ControlledForm } from "./ControlledForm";
import { Modal } from "./Modal";
import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: "John Doe" })}>Next</button>
  </>
);

const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 100 })}>Next</button>
  </>
);

const StepThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <p>Congratulations! You qualify for our senior discount</p>
    <button onClick={() => goToNext()}>Next</button>
  </>
);

const StepFour = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
  </>
);

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [onboardingData, setOnboardingData] = useState({});
  const [shouldShow, setShouldShow] = useState(false);

  const toggleModal = () => {
    setShouldShow(() => !shouldShow);
  };

  const onNext = (stepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <>
      <UncontrolledForm />
      <ControlledForm />
      <Modal toggleModal={toggleModal} shouldShow={shouldShow} />

      {/* Controls which child component gets displayed */}
      <UncontrolledOnboardingFlow
        onFinish={(data) => {
          console.log(data);
          alert("onboarding complete");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow>
      <ControlledOnboardingFlow
        currentIndex={currentIndex}
        onNext={onNext}
        onFinish={(data) => {
          console.log(data);
        }}
      >
        <StepOne />
        <StepTwo />
        {onboardingData.age >= 62 && <StepThree />}
        <StepFour />
      </ControlledOnboardingFlow>
    </>
  );
}

export default App;
