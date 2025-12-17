import React from 'react';

function SubmitButton({ text }) {
  return <button type="submit" className="bg-[#c3f628] hover:bg-[#daf194] text-black font-bold text-base py-3 px-6 rounded-xl w-fit">{text}</button>;
}

export default SubmitButton;
