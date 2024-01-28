import { Route, Routes } from "react-router-dom";
import FirstTask from "../pages/FirstTask";
import SecondTask from "../pages/SecondTask";
import Home from "../pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/first-task"  element={<FirstTask />}/>
      <Route path="/second-task"  element={<SecondTask />}/>
    </Routes>
  )
}

export default Router;