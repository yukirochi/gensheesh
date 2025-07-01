function Landing() {

    
  return (
    <div className="container w-[150%] h-screen flex justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
      <div className="cont w-80 h-80 bg-customblue rounded-full flex items-center flex-shrink-0 mt-20 flex-col">
        <h1 className=" font-stylescript  text-5xl mt-12 text-white">GENSHEESH</h1>
        <div
          id="traveler"
          className=" flex-shrink-0 flex items-center justify-center mr-5"
        ></div>
      </div>
    </div>
  );
}

export default Landing;
