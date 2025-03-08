import React, { useEffect,useState } from "react";
import { Button } from "../Components/index";
import { useLocation } from "react-router-dom";


const NS = () => {
  const location = useLocation();
  const [generatedLetter, setGeneratedLetter] = useState(
    location.state?.generatedLetter || "No Letter Generated"
  );
      
  return (
    <div>
      <h1 className="text-xl font-bold">
        Generated Letter : {generatedLetter}
      </h1>
      <Button generatedLetter={generatedLetter} />
    </div>
  );
}

export default NS