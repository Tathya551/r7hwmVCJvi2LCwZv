import React from "react";

const ResumeLink = () => {
  const downloadResume = () => {
    const linkElement = document.createElement("a");
    linkElement.href = process.env.PUBLIC_URL + "/resume.pdf";
    linkElement.download = "resume.pdf";
    linkElement.click();
  };

  return (
    <div>
      <p>
        You can download my resume{" "}
        <button onClick={downloadResume}>here</button>.
      </p>
    </div>
  );
};

export default ResumeLink;
