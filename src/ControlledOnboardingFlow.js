import React from "react";

export const ControlledOnboardingFlow = ({
  children,
  onFinish,
  currentIndex,
  onNext,
}) => {
  const goToNext = (data) => {
    onNext(data);
  };
  //   .toArray(children) covers us in the case that children is a single element (it wouldnt come as an array)
  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return currentChild;
};
