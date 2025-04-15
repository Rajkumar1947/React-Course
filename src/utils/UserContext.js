import { createContext } from "react";

const UserContext = createContext({
  defaultUserName: "default user",
});

export default UserContext;
