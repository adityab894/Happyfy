import React from 'react';

const Modal = ({ result, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
        <h2 className="text-xl font-bold mb-4">Test Result</h2>
        <p>{result}</p>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Close</button>
      </div>
    </div>
  );
};

export default Modal;
