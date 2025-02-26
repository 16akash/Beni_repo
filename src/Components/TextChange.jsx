import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["Hi, I'm Beni", "Hi, I'm Beni ", "Hi, I'm Beni"];
  const [currenText, setCurrentText] = useState("");
  const [endValue, setendValue] = useState(true);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        setendValue((prev) => prev + 1);
      } else {
        setendValue((prev) => prev - 1);
      }

      if (endValue > texts[index].length + 10) {
        setIsForward(false);
      }

      if (endValue < 2.1) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length); // Fixed the modulo operation
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return (
    <div className="transition ease duration-300">
      <span className="text-orange-500">{currenText.substring(0, 2)}</span>
      {currenText.substring(2)}
    </div>
  );
};

export default TextChange;
