import { createContext ,useState} from "react";
export const DateTimeContextValues=createContext({})

export function DateTimeProvider({children}) {
    const [dateAndTime, setDateAndTime] = useState("");
    return (
        <DateTimeContextValues.Provider value={{dateAndTime,setDateAndTime}}>
            {children}
        </DateTimeContextValues.Provider>
    )
}