import "./App.css";
import Works from "./components/Works/Works";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Notes from "./components/Notes/Notes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Works />}></Route>
          <Route path="/notes" element={<Notes />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
