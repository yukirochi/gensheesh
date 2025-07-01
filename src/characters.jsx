import { useEffect, useState } from "react";


function Characters() {
  let [searhcont, setsearchcont] = useState(false);
  let [result, setresult] = useState([]);
  let [loading, setloading] = useState(true);
  let [orig, setorig] = useState([]);
  let [current, setcurremt] = useState("amber");
  let [chardat, setchardat] = useState([])
  useEffect(() => {
    const getdata = async () => {
      try {
        let res = await fetch(`https://genshin.jmp.blue/characters`);
        let data = await res.json();
        let exclude = [
          "kachina",
          "kinich",
          "mualani",
          "traveler-anemo",
          "traveler-dendro",
          "traveler-electro",
          "traveler-geo",
          "traveler-hydro",
        ];
        let val = data.filter((itm) => !exclude.includes(itm));
        setresult(val);
        setorig(val);
      } catch (err) {
        console.error(err);
      } finally {
        setloading(false);
      }
    };
    getdata();
  }, []);

  useEffect(() => {
     const get = async() => {
        try{
        let res = await fetch(`https://genshin.jmp.blue/characters/${current}`)
        let data = await res.json();
        setchardat(data)
     }catch(err){
      console.error(err)
     }
     }
     get()
  },[current])

  const searchit = (par) => {
    const containsAllLetters = (word, target) => {
      return target.split("").every((letter) => word.includes(letter));
    };
    if (par === "") {
      setresult(orig);
    }
    let filtered = orig.filter((itm) => containsAllLetters(itm, par));
    setresult(filtered);
  };

  if (loading) return <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</div>;

  return (
    <div className="w-screen h-[100vh] flex justify-center items-center overflow-hidden">
      <div className="char-cont h-[100vh-64px] overflow-hidden">
        <button
          className="bg-black px-7 py-1 text-1xl font-poppins mt-4 relative z-20 mb-2  text-white"
          onClick={() => setsearchcont(true)}
        >
          Search
        </button>
        <div
          className="w-[100%] h-[625px] bg-cover bg-center bg-no-repeat overflow-visible relative "
          style={{
            backgroundImage: `url('https://genshin.jmp.blue/characters/${current}/namecard-background')`,
          }}
        >
          <div className="w-[100%] h-[600px] relative overflow-visible">
            <div
              className=" absolute -inset-8 bg-cover bg-center bg-no-repeat z-10 md:bg-contain md:ml-[10%]"
              style={{
                backgroundImage: `url('https://genshin.jmp.blue/characters/${current}/gacha-splash')`,
              }}
            >
                <div className="w-[100%] h-[20%] font-poppins flex flex-col items-center md:items-start"><p className="text-4xl mt-20">{chardat.name}</p><p> {"★".repeat(chardat.rarity)}</p><p>{chardat.title}</p></div>
                <div className=" w-[100%] h-[60%] flex">
                    <div className="w-[80%] h-[100%]"></div>
                    <div className="w-[20%] h-[100%] flex flex-col gap-[5px] items-center justify-center mr-5">
                        <div className=" w-[80%] h-[18%] bg-center bg-no-repeat bg-contain "
                              style={{backgroundImage: `url(https://genshin.jmp.blue/characters/${current}/constellation-1)`}}
                        ></div>
                         <div className=" w-[80%] h-[18%] bg-center bg-no-repeat bg-contain "
                              style={{backgroundImage: `url(https://genshin.jmp.blue/characters/${current}/constellation-2)`}}
                        ></div>
                         <div className=" w-[80%] h-[18%] bg-center bg-no-repeat bg-contain "
                              style={{backgroundImage: `url(https://genshin.jmp.blue/characters/${current}/constellation-3)`}}
                        ></div>
                         <div className=" w-[80%] h-[18%] bg-center bg-no-repeat bg-contain "
                              style={{backgroundImage: `url(https://genshin.jmp.blue/characters/${current}/constellation-4)`}}
                        ></div>
                         <div className=" w-[80%] h-[18%] bg-center bg-no-repeat bg-contain "
                              style={{backgroundImage: `url(https://genshin.jmp.blue/characters/${current}/constellation-5)`}}
                        ></div>
                       

                    </div>
                    
                </div>
                <div className=" w-[100%] h-[9%] flex justify-center gap-2">
                    <div className=" w-[10%] h-[100%] bg-contain bg-center bg-no-repeat"
                    style={{backgroundImage: `url(https://genshin.jmp.blue/characters/${current}/talent-passive-1)`}}
                    ></div>
                     <div className=" w-[10%] h-[125%] bg-contain bg-center bg-no-repeat"
                    style={{backgroundImage: `url(https://genshin.jmp.blue/characters/${current}/talent-na)`}}
                    ></div>
                     <div className=" w-[20%] h-[150%] bg-contain bg-center bg-no-repeat"
                    style={{backgroundImage: `url(https://genshin.jmp.blue/characters/${current}/talent-burst)`}}
                    ></div>
                     <div className=" w-[10%] h-[125%] bg-contain bg-center bg-no-repeat"
                    style={{backgroundImage: `url(https://genshin.jmp.blue/characters/${current}/talent-skill)`}}
                    ></div>
                     <div className=" w-[10%] h-[100%] bg-contain bg-center bg-no-repeat"
                    style={{backgroundImage: `url(https://genshin.jmp.blue/characters/${current}/talent-passive-2)`}}
                    ></div>
                    
                </div>
            </div>
          </div>
        </div>
      </div>

      {searhcont && (
        <div
          className="w-screen h-[90vh] absolute z-30  overflow-hidden flex  items-center "
          onClick={() => setsearchcont(false)}
        >
          <div
            className="search-cont bg-customblue overflow-hidden "
            onClick={(e) => e.stopPropagation()}
          >
            <div className=" flex justify-center items-center h-12">
              <input
                type="text"
                placeholder="search"
                className=" px-4 py-2 rounded-xl outline-none font-poppins mt-3  w-[90%]"
                onChange={(e) => searchit(e.target.value)}
              />
            </div>
            <div className=" h-[90%] w-[100%] mt-[5%] flex flex-col items-center gap-3 overflow-hidden">
              <div className="w-[100%] h-[100%] overflow-scroll flex flex-col items-center gap-3">
                {result.map((res, index) =>
                  index === 0 ? (
                    <div
                      className={` cursor-pointer bg-slate-600 bg-cover bg-center w-[90%] h-[40px] font-poppins text-xl flex justify-evenly items-center mt-2 hover:opacity-80`}
                      style={{
                        backgroundImage: `url('https://genshin.jmp.blue/characters/${res}/namecard-background')`,
                      }}
                       onClick={()=> setcurremt(res)}
                    >
                      <p className="w-[70%] flex justify-center  text-white ">{res}</p>{" "}
                      <div
                        className="w-[50px] h-[50px] bg-cover bg-center"
                        style={{
                          backgroundImage: `url('https://genshin.jmp.blue/characters/${res}/icon-side')`,
                        }}
                        onClick={()=> setcurremt(res) }
                      ></div>
                    </div>
                  ) : (
                    <div
                      className=" cursor-pointer bg-cover bg-center bg-slate-600 w-[90%] h-[40px] font-poppins text-xl flex justify-evenly items-center hover:opacity-80"
                      style={{
                        backgroundImage: `url('https://genshin.jmp.blue/characters/${res}/namecard-background')`,
                      }}
                      onClick={()=> setcurremt(res) }

                    >
                      <p className="w-[70%] flex justify-center text-white">{res}</p>{" "}
                      <div
                        className="w-[40px] h-[50px] bg-contain bg-center bg-no-repeat "
                        style={{
                          backgroundImage: `url('https://genshin.jmp.blue/characters/${res}/icon-side')`,
                        }}
                         onClick={()=> setcurremt(res) }
                      ></div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Characters;
