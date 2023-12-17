// import React from "react";

function Background() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <div className="absolute w-full top-[5%] py-10 flex justify-center text-zinc-600 font-semibold text-xl">
          Documents.
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[15vw] leading-none tracking-tight font-semibold text-zinc-900">
          Docs
        </h1>
      </div>
    </>
  );
}

export default Background;