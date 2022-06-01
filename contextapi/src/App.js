import react, { useContext } from "react"
import './App.css';
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import { ThemeContest } from "./context/Themecontext";




function App() {
  const {isLight} = useContext(ThemeContest)
  return (
    <div className={`App ${isLight ? "light" : "dark"}`}>
     
     <Navbar/>
    <Body/>
   
    </div>
  );
}

export default App;
