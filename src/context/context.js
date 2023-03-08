import { createContext,useState } from "react";

export const AuthContext = createContext(null);

export default function UserContext({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return(
    <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
        {children}
    </AuthContext.Provider>
  )
}
