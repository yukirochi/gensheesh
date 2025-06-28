import { useEffect, useState } from "react";
import "./css/App.css";
import { Link , Routes, Route} from "react-router-dom";
import Landing from "./Landing";
import Characters from "./characters";


function App() {
  let [page, setpage] = useState(4);
  let [results, setresults] = useState([]);
  let [click, setclick] = useState(1)
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
        <Link to={"/characters"}  className ={ click === 4 ? "navll" : "navl" } onClick={()=> setclick(4) }>Characters</Link>
        <Link className ={ click === 3 ? "navll" : "navl" } onClick={()=> setclick(3) }>Weapons</Link>
        <Link className ={ click === 2 ? "navll" : "navl" } onClick={()=> setclick(2) }>Artifacts</Link>
        <Link to={"/"}  className ={ click === 1 ? "material-icons mr-5 text-3xl" : "material-icons-outlined mr-5 text-3xl" } onClick={()=> setclick(1) }>home</Link>
      </header>
      <Routes>
         <Route path="/" element={<Landing/>} />
         <Route path="/characters" element= {<Characters/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
