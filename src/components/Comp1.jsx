import React from "react";
import Comp2 from "./Comp2";

const Comp1 = ({detail}) => {
  return (
    <>
      <h1 className="text-2xl m-5 bg-gray-200 font-bold">this is component 1</h1>
      <Comp2 detail = {detail}/>
    </>
  );
};

export default Comp1;
