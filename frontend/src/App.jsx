import { RecoilRoot } from "recoil";
import AddTodos from "./components/AddTodos";
import ViewTodos from "./components/ViewTodos";
import Filterbar from "./components/Filterbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <RecoilRoot>
        <Routes>
          <Route path="/" element={<ViewTodos/>}></Route>
          <Route path="/addTodos" element={<AddTodos/>}></Route>
          <Route path="/filter" element={<Filterbar/>}></Route>
        </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </>
  )
}

export default App
