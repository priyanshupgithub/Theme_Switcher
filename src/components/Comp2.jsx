import React from "react";
import Comp3 from "./Comp3";
const Comp2 = ({ detail, number }) => {
  return (
    <>
      <div className="bg-gray-500">
        <h1 className="text-2xl p-3 m-5 font-bold">
          this is componet 2
        </h1>
      </div>
        <Comp3 />
    </>
  );
};

export default Comp2;
