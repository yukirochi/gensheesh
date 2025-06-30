import { useEffect, useState } from "react";
import "./css/App.css";
import { Link , Routes, Route, NavLink} from "react-router-dom";
import Landing from "./Landing";
import Characters from "./characters";


function App() {
  let [results, setresults] = useState([]);
 /* useEffect(() => {
    const getdata = async () => {
      let res = await fetch(`https://genshin.jmp.blue/characters/amber`);
      let data = await res.json();
      if (!data) {
        console.log("fetch failed");
      } else {
        console.log(data);
      }
    };
    getdata();
  }, []);*/
  return (
    <div className="App  w-screen h-screen overflow-hidden">
      <header className=" w-screen h-16 flex items-center justify-end gap-5p ">
        <NavLink to={"/characters"}  className ={({isActive}) => isActive ?  "navll" : "navl" }>Characters</NavLink>
        <NavLink to={"/weapons"} className ={({isActive}) => isActive ?  "navll" : "navl" }>Weapons</NavLink>
        <NavLink to={"/artifacts"} className ={({isActive}) => isActive ?  "navll" : "navl" }>Artifacts</NavLink>
        <NavLink to={"/"}  className ={ ({isActive}) => isActive ? "material-icons mr-5 text-3xl" : "material-icons-outlined mr-5 text-3xl" } >home</NavLink>
      </header>
      <Routes>
         <Route path="/" element={<Landing/>} />
         <Route path="/characters" element= {<Characters/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
