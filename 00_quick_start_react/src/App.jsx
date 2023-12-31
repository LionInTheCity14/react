import MyButton from "./react-basics/MyButton";
import AboutPage from "./react-basics/WritingMarkupWithJSX";
import Profile from "./react-basics/DisplayingData"
import Conditional from "./react-basics/ConditionalRendering"
import ShoppingList from "./react-basics/RenderingLists";
import MyButton2 from "./react-basics/RespondingToEvents";
import MyCountButton from "./react-basics/UpdatingTheScreen";
import SameParent from "./react-basics/Hooks";


import "./App.css";

function App() {
  return (
    <>
      <h1>hello react!!</h1>
      <MyButton/> <br/>
      <AboutPage/>
      <Profile/>
      <Conditional />
      <ShoppingList />
      <MyButton2 /> <br />
      <MyCountButton /> <br />
      <MyCountButton />
      <SameParent />
    </>
  )
}

export default App
