import { createContext } from "react"
import type { ThemeContextType } from "../types/types"

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
})
