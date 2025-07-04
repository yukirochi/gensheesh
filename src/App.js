import { useEffect, useState } from "react";
import { Link , Routes, Route, NavLink} from "react-router-dom";
import Landing from "./Landing";
import Characters from "./characters";
import Weapons from "./weapons";
import Artifacts from "./artifacts";


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
      <header className=" w-screen h-16 flex items-center justify-end gap-5p absolute top-0 left-1/2 -translate-x-1/2 z-50">
        <NavLink to={"/characters"}  className ={({isActive}) => isActive ?  "navll" : "navl" }>Characters</NavLink>
        <NavLink to={"/weapons"} className ={({isActive}) => isActive ?  "navll" : "navl" }>Weapons</NavLink>
        <NavLink to={"/artifacts"} className ={({isActive}) => isActive ?  "navll" : "navl" }>Artifacts</NavLink>
        <NavLink to={"/"}  className ={ ({isActive}) => isActive ? "material-icons mr-5 text-3xl" : "material-icons-outlined mr-5 text-3xl" } >home</NavLink>
      </header>
      <Routes>
         <Route path="/" element={<Landing/>} />
         <Route path="/characters" element= {<Characters/>}/>
         <Route path="/weapons" element={<Weapons/>}/>
         <Route path="/artifacts" element={<Artifacts/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
