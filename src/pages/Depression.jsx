import React, { useState } from 'react';
 // Import the Modal component
 import Modal from '../components/Modal';
import Navbar from '../components/Navbar';

const DepressionTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResultModal, setShowResultModal] = useState(false); // State to manage the visibility of the modal
  const [resultMessage, setResultMessage] = useState(''); // State to store the result message
  
  const questions = [
    "Over the last two weeks, how often have you been bothered by feeling down, depressed, or hopeless?",
    "Over the last two weeks, how often have you been bothered by little interest or pleasure in doing things?",
    "How often have you had trouble falling asleep, staying asleep, or sleeping too much over the last two weeks?",
    "How often have you felt tired or had little energy over the last two weeks?",
    "Over the last two weeks, how often have you had a poor appetite or overeaten?",
    "How often have you felt bad about yourself or that you are a failure or have let yourself or your family down over the last two weeks?",
    "Over the last two weeks, how often have you had trouble concentrating on things, such as reading the newspaper or watching TV?",
    "How often have you moved or spoken so slowly that other people could have noticed over the last two weeks?",
    "Over the last two weeks, how often have you had thoughts that you would be better off dead or of hurting yourself in some way?",
    "How often have you been bothered by physical problems, such as aches, pains, headaches, or stomach problems, over the last two weeks?",
    "Over the last two weeks, how often have you had difficulty completing tasks, such as work assignments, household chores, or schoolwork?",
    "How often have you had thoughts of self-harm or suicide over the last two weeks?"
  ];
  
  const options = [
    ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    ["Not at all", "Several days", "More than half the days", "Nearly every day"]
  ];

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    let totalScore = 0;
    answers.forEach((answer, index) => {
      if (answer === "Not at all") {
        totalScore += 0;
      } else if (answer === "Several days") {
        totalScore += 1;
      } else if (answer === "More than half the days") {
        totalScore += 2;
      } else if (answer === "Nearly every day") {
        totalScore += 3;
      }
    });

    // Determine depression level based on score
    let result = "";
    if (totalScore < 5) {
      result = "You are not experiencing significant symptoms of depression.";
    } else if (totalScore < 10) {
      result = "You are experiencing mild symptoms of depression.";
    } else if (totalScore < 15) {
      result = "You are experiencing moderate symptoms of depression.";
    } else {
      result = "You are experiencing severe symptoms of depression. Please seek professional help.";
    }

    // Set the result message and show the modal
    setResultMessage(result);
    setShowResultModal(true);
    console.log(answers);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowResultModal(false);
    setResultMessage('');
  };

  return (
    <div>
      <Navbar/>
      <div className="w-full py-12">
      <div className="mx-auto grid max-w-3xl px-4 gap-6 lg:gap-8 lg:px-6">
        <div className="space-y-6 ">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Depression Detection Test</h1>
            <p className="max-w-[600px] mx-auto text-gray-500 dark:text-gray-400">
              This test is designed to help you assess your feelings and emotions. It is not a substitute for
              professional diagnosis or treatment.
            </p>
          </div>
          <div className="space-y-6 bg-[#99FBC2] p-10 rounded-2xl">
          <fieldset className=' p-10'>
            <legend className="text-lg font-medium">{questions[currentQuestion]}</legend>
            <div className="space-y-2">
              <div className="grid gap-2">
                {options[currentQuestion].map((option, index) => (
                  
                  <div key={index} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={`q${currentQuestion + 1}`}
                      id={`q${currentQuestion + 1}-${option.replace(/\s+/g, '-').toLowerCase()}`}
                      value={option}
                      onChange={() => handleAnswer(option)}
                      checked={answers[currentQuestion] === option} // Check if this option is selected
                    />
                    <label
                      htmlFor={`q${currentQuestion + 1}-${option.replace(/\s+/g, '-').toLowerCase()}`}
                      className="text-sm font-medium cursor-pointer"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </fieldset>

            <div className="flex justify-between">
              {currentQuestion > 0 && (
                <button className="inline-flex items-center gap-2 text-sm font-medium" onClick={() => setCurrentQuestion(currentQuestion - 1)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M15 18l-6-6 6-6"></path>
                  </svg>
                  Previous
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Render the modal if showResultModal is true */}
      {showResultModal && <Modal result={resultMessage} onClose={handleCloseModal} />}
    </div>
    </div>
    
  );
};

export default DepressionTest;
