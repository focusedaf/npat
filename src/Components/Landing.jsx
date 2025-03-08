import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [generatedLetter, setGeneratedLetter] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const generateRandomLetter = () => {
      setLoading(true); 
      setTimeout(() => {
        const randomLetter = String.fromCharCode(
          65 + Math.floor(Math.random() * 26)
        );
        setGeneratedLetter(randomLetter);
        setLoading(false); 
      }, 2000);
  };

  const handleProceed = () => {
      if (!generatedLetter) {
        alert("Generate a letter first!"); 
        return;
      }
      navigate("/ns", { state: { generatedLetter } }); 
    };

  
  return (
    <div className="w-screen min-h-screen absolute top-0 left-0 flex flex-col justify-center items-center gap-4">
      <button
        onClick={generateRandomLetter}
        disabled={loading}
        className="px-4 py-2 rounded-full cursor-pointer hover:backdrop-blur-sm hover:bg-white/20"
      >
        {loading ? "Generating..." : "Generate Letter"}
      </button>

      {generatedLetter && (
        <p className="text-xl font-bold">{generatedLetter}</p>
      )}
      {generatedLetter && !loading && (
        <button
          onClick={handleProceed}
          className=" px-4 py-2 rounded-full cursor-pointer hover:backdrop-blur-sm hover:bg-white/20"
        >
          Proceed
        </button>
      )}
    </div>
  );
};

export default Landing;
