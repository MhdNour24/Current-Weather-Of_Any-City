import { createContext ,useState} from "react";
export const TempContextValues=createContext({})

export function TempProvider({children}) {
    const [temp, setTemp] = useState({
        tempNumber: null,
        description: null,
        min: null,
        max: null,
        icon: null,
        city: null,
      });

      return (
            <TempContextValues.Provider value={{temp,setTemp}}>
                {children}
            </TempContextValues.Provider>
      )
}


