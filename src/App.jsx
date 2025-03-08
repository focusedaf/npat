import { Route, Routes } from "react-router-dom";
import './App.css'
import HS from "./Pages/HS"
import NS from "./Pages/NS"
function App() {
  
  return (
    <div className='w-full'>
      <Routes>
        <Route path="/" element={<HS/>}></Route>
        <Route path="/ns" element={<NS/>}></Route>
      </Routes>
    </div>
  );
}

export default App
