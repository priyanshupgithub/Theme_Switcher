import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const Comp3 = () => {
    const {user,number} = useContext(DataContext);

  return (
    <>
      {/* we want the user data in this component only but for this we have to pass the user details in the component2 and component2 also : so this concept is known as prop drilling and to avoid this we should use the useContext hook and context api to keep the data at the central place/level and the component which needs that data then it can take it from the context */}

      {/* now in this we use the concept of useContext hook of react in which we directly use the values/data in the desired component only without passing them unnecessarily in the other components as the prop */}

      <div className="bg-gray-600">
        <h1 className="text-2xl m-5 p-3 font-bold">
          this is componet 3
        </h1>
        <p>Name : {user.name} </p>
        <p>Age: {user.age} </p>
        <p>Gender: {user.gender} </p>
        <p>the value in the input section is {number}</p>
      </div>
    </>
  );
};

export default Comp3;
