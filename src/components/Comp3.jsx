import React from "react";

const Comp3 = ({ detail, number }) => {
  return (
    <>
      {/* we want the user data in this component only but for this we have to pass the user details in the component2 and component2 also : so this concept is known as prop drilling and to avoid this we should use the useContext hook and context api to keep the data at the central place/level and the component which needs that data then it can take it from the context */}

      <div className="bg-gray-600">
        <h1 className="text-2xl m-5 font-bold">
          this is componet 3
        </h1>
        <p>Name : {detail.name} </p>
        <p>Age: {detail.age} </p>
        <p>Gender: {detail.gender} </p>
        <p>the value in the input section is {number}</p>
      </div>
    </>
  );
};

export default Comp3;
