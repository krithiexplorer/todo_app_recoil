import { RecoilRoot } from "recoil";
import AddTodos from "./components/AddTodos";
import ViewTodos from "./components/ViewTodos";

function App() {
  return (
    <>
      <RecoilRoot>
        <AddTodos/>
        <ViewTodos/>
      </RecoilRoot>
    </>
  )
}

export default App
