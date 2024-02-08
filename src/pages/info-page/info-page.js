import React from "react";
import LoadingDiv from "../../components/common/templates/loading-div/LoadingDiv";
import StandardBtn from "../../components/common/buttons/standard-btn/StandardBtn";

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
