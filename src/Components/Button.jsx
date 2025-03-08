import React, { useState, useEffect } from "react";

const Button = ({ generatedLetter }) => {
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [Entry, setEntry] = useState({
    name: "",
    place: "",
    animal: "",
    thing: "",
  });

  const handleChange = (e) => {
    setEntry((prevEntry) => ({
      ...prevEntry,
      [e.target.name]: e.target.value,
    }));
  };

  const Submit = () => {
    if (!Entry.name || !Entry.place || !Entry.animal || !Entry.thing) {
      alert("Fill out all fields!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      alert("Submitted!");
      console.log("Submitted:", Entry);
      setIsSubmitted(true); 
      setLoading(false);
    }, 2000);
  };

  const ViewScore = () => {
    if (!generatedLetter || typeof generatedLetter !== "string") {
      alert("Generated letter is missing or invalid!");
      return;
    }

    const letter = generatedLetter.trim().toLowerCase();

    if (
      Entry.name.trim().toLowerCase().startsWith(letter) &&
      Entry.place.trim().toLowerCase().startsWith(letter) &&
      Entry.animal.trim().toLowerCase().startsWith(letter) &&
      Entry.thing.trim().toLowerCase().startsWith(letter)
    ) {
      setScore((prevScore) => prevScore + 20);
    } else {
      alert("One or more entries do not start with the correct letter.");
      setScore((prevScore) => prevScore - 5);
    }
  };

  useEffect(() => {
    console.log("Score updated:", score);
  }, [score]);

  return (
    <div className="w-screen min-h-screen absolute top-0 left-0 flex flex-col justify-center items-center gap-4 text-white">
      <div className="flex flex-col gap-6">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={Entry.name}
          onChange={handleChange}
          className="px-4 py-2 rounded-full cursor-pointer hover:backdrop-blur-sm hover:bg-white/20 mt-1 text-center"
        />
        <input
          type="text"
          name="place"
          placeholder="Place"
          value={Entry.place}
          onChange={handleChange}
          className="px-4 py-2 rounded-full cursor-pointer hover:backdrop-blur-sm hover:bg-white/20 mt-1 text-center"
        />
        <input
          type="text"
          name="animal"
          placeholder="Animal"
          value={Entry.animal}
          onChange={handleChange}
          className="px-4 py-2 rounded-full cursor-pointer hover:backdrop-blur-sm hover:bg-white/20 mt-1 text-center"
        />
        <input
          type="text"
          name="thing"
          placeholder="Thing"
          value={Entry.thing}
          onChange={handleChange}
          className="px-4 py-2 rounded-full cursor-pointer hover:backdrop-blur-sm hover:bg-white/20 mt-1 text-center"
        />

        <button
          onClick={Submit}
          disabled={loading}
          className={`px-4 py-2 rounded-full mt-1 text-center  text-sm ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-white/20"
          }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {isSubmitted && (
          <>
            <button
              onClick={ViewScore}
              className="px-4 py-2 rounded-full hover:bg-white/20 mt-1 text-center  text-sm"
            >
              View Score
            </button>
            <p>{score}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Button;
