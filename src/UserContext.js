import { createContext, useContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = UserContext.Provider;

export default function UserContectMain(){
   return useContext(UserContext)
}