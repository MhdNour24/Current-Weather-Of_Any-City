import { createContext ,useState} from "react";
export const SeeTempContextValues=createContext({})

export function SeeTempProvider({children}) {
    const [seeTemp, setSeeTemp] = useState(false);
    return (
        <SeeTempContextValues.Provider value={{seeTemp,setSeeTemp}}>
            {children}
        </SeeTempContextValues.Provider>
    )
}