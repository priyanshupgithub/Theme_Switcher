import React from "react";
import Comp2 from "./Comp2";

const Comp1 = ({ detail, number }) => {
  return (
    <>
      <div className="bg-gray-400">
        <h1 className="text-2xl m-5 font-bold">
          this is component 1
        </h1>
      </div>
        <Comp2 detail={detail} number={number} />
    </>
  );
};

export default Comp1;
