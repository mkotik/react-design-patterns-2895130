import React, { useState, useEffect } from "react";

export const ControlledForm = () => {
  const [nameInputError, setNameInputError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hairColor, setHairColor] = useState("");

  useEffect(() => {
    if (name.length < 2 && name.length > 0) {
      setNameInputError("Name must be over 2 characters");
    } else {
      setNameInputError("");
    }
  }, [name]);
  return (
    <form>
      <p style={{ color: "red", margin: "0px" }}>{nameInputError}</p>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <input
        name="hairColor"
        type="text"
        placeholder="Hair Color"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};
