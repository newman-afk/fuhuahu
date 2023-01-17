import "./App.css";
import Works from "./components/Works/Works";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Notes from "./components/Notes/Notes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Works />}></Route>
          <Route path="/notes" element={<Notes />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
