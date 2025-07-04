import { useEffect, useState } from "react";

function Weapons() {
  let [searhcont, setsearchcont] = useState(false);
  let [result, setresult] = useState([]);
  let [loading, setloading] = useState(true);
  let [orig, setorig] = useState([]);
  let [current, setcurremt] = useState("a-thousand-floating-dreams");
  let [chardat, setchardat] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      try {
        let res = await fetch(`https://genshin.jmp.blue/weapons`);
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
    const get = async () => {
      try {
        let res = await fetch(`https://genshin.jmp.blue/weapons/${current}`);
        let data = await res.json();
        setchardat(data);
      } catch (err) {
        console.error(err);
      }
    };
    get();
  }, [current]);

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
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="char-cont h-[100vh-64px] ">
        <button
          className="bg-[rgba(0,0,0,1)] px-7 py-1 text-1xl font-poppins mt-4 relative z-20 mb-2 text-white"
          onClick={() => setsearchcont(true)}
        >
          Search
        </button>
        <div className="w-[100%] border-[1px] border-black h-[625px] bg-cover bg-center bg-no-repeat overflow-visible relative">
          <div className="w-[100%] h-[600px] relative overflow-visible">
            <div className=" absolute -inset-8 bg-cover bg-center bg-no-repeat z-10">
              <div className="w-[100%] h-[20%] font-poppins flex flex-col items-center">
                <p className="text-2xl mt-20 text-center">{chardat.name}</p>
                <p> {"★".repeat(chardat.rarity)}</p>
                <p>{chardat.subStat}</p>
              </div>

              <div className=" w-[100%] h-[9%] flex justify-center gap-2">
                <div
                  className=" w-[620px] h-[630px] bg-contain bg-center bg-no-repeat md:w-[300px]"
                  style={{
                    backgroundImage: `url(https://genshin.jmp.blue/weapons/${current}/icon)`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {searhcont && (
        <div
          className="w-screen h-screen absolute z-30 flex items-center"
          onClick={() => setsearchcont(false)}
        >
          <div
            className="search-cont mt-4 bg-customblue md:max-h-[600px] overflow-hidden"
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
            <div className=" h-[600px] w-[100%] mt-[5%] flex flex-col items-center gap-3">
              <div className="w-[100%] h-[100%]  overflow-scroll flex flex-col items-center gap-3 ">
                {result.map((res, index) =>
                  index === 0 ? (
                    <div
                      className={` cursor-pointer bg-cover bg-center w-[90%] h-[40px] font-poppins text-xl flex justify-evenly items-center mt-2 hover:opacity-80`}
                      onClick={() => setcurremt(res)}
                    > 
                      <p className="w-[100%] flex overflow-hidden hover:border-b-[1px] hover:border-white  text-white">
                        {res}
                      </p>{" "}
                      <div
                        className="w-[50px] h-[50px] bg-cover bg-center"
                        style={{
                          backgroundImage: `url('https://genshin.jmp.blue/weapons/${res}/icon')`,
                        }}
                        onClick={() => setcurremt(res)}
                      ></div>
                    </div>
                  ) : (
                    <div
                      className=" hover:border-b-[1px] hover:border-white cursor-pointer bg-cover bg-center w-[90%] h-[40px] font-poppins text-xl flex justify-evenly items-center hover:opacity-80"
                      onClick={() => setcurremt(res)}
                    >
                      <p className="w-[100%] flex overflow-hidden text-white">{res}</p>{" "}
                      <div
                        className="w-[40px] h-[50px] bg-contain bg-center bg-no-repeat "
                        style={{
                          backgroundImage: `url('https://genshin.jmp.blue/weapons/${res}/icon')`,
                        }}
                        onClick={() => setcurremt(res)}
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

export default Weapons;
