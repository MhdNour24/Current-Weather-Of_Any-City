import { createContext ,useState} from "react";
export const LatAndLongValues=createContext({})

export function LatAndLongProvider({children}) {
    const [latAndLong, setLatAndLong] = useState({ lat: "", long: "" })

    return (
        <LatAndLongValues.Provider value={{latAndLong,setLatAndLong}}>
            {children}
        </LatAndLongValues.Provider>
    )
}