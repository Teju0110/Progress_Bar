import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
  const [progress, setProgress] = useState();
  const [loading, setLoading] = useState();

  const percentage = [0, 10, 25, 50, 75, 90, 100];
  const [i, setI] = useState(0);

  const handleProgress = () => {
    if (percentage[i] <= 100) {
      setProgress(percentage[i]);
      setLoading(percentage[i] + "%");
      setI(i + 1);
    }
    console.log(progress);

    if (i === percentage.length) {
      setLoading("Completed");
    }
  };

  useEffect(() => {
    const interval = setInterval(handleProgress, 1000);
    return () => {
      if (percentage[i] <= 100) clearInterval(interval);
    };
  }, [i]);

  return (
    <div className="container">
      <div className="bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <div>
        <p>{loading}</p>
      </div>
    </div>
  );
};

export default ProgressBar;
