import { createContext,  Dispatch,  ReactNode,  SetStateAction,  useState  } from "react";

type contextType = {
    themeMode: string,
    setThemeMode: Dispatch<SetStateAction<string>>
};

export const ThemeContext = createContext<contextType | undefined >(undefined);

const ThemeProvider = ({children}: {children: ReactNode}) => {
    const [themeMode, setThemeMode] = useState<string>("black");
    return (
        <ThemeContext.Provider value={{themeMode, setThemeMode}}>
          {children}  
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;