import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";




function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/:id"} element={<About/>} />
      </Routes>
     
    </div>
  );
}

export default App;
