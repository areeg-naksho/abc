import UserContext from "../components/UserContext";
import { useState } from "react";

const UserProvider = ({ children }) => {
  const [context, setContext] = useState("http://localhost:5000");

  return (
    <UserContext.Provider value={{ context, setContext }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
