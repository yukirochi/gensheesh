import { useEffect, useState } from "react";
import "./css/App.css";


function App() {
  let [page, setpage] = useState(4);
  let [results, setresults] = useState([]);
  useEffect(() => {
    const getdata = async () => {
     
        let res = await fetch(
          `https://genshin.jmp.blue/characters/amber`
        );
        let data = await res.json();
        if (!data) {
          console.log("fetch failed");
        } else {
          console.log(data);

          
        }
      
    };
    getdata();

  }, []);
  return <div className="App"></div>;
}

export default App;
