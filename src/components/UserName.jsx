import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const UserName = () => {
  const { name } = useContext(UserContext);

  return (
    <div
      className="border border-green-600/50
                 rounded-full mx-auto text-center py-1.5
                 text-xl font-semibold
                 text-green-100
                 bg-green-900/80"
    >
      Welcome, <span className="text-zinc-950 font-extrabold">{name}</span> 👋
    </div>
  );
};

export default UserName;
