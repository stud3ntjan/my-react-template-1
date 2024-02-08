import React from "react";
import LoadingDiv from "../components/LoadingDiv";
import StandardBtn from "../components/StandardBtn";

const InfoPage = () => {
  const handleClick = () => {
    alert("Hallo von der Info Seite");
  };

  return (
    <div>
      <h1>Info Page</h1>
      <LoadingDiv />
      <StandardBtn onClick={handleClick} text="Klick mich" />
    </div>
  );
};

export default InfoPage;
