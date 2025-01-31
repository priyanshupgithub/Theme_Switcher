import React from "react";
import Comp3
 from "./Comp3";
const Comp2 = ({detail}) => {
  return (
    <>
      <h1 className="text-2xl m-5 bg-gray-200 font-bold">this is componet 2</h1>
      <Comp3 detail = {detail}/>
    </>
  );
};

export default Comp2;
