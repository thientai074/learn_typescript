import { PropTypes } from '@material-ui/core'
import { createContext, useState } from 'react'

interface ThemeContextProps {
    children: any
}

interface ThemeContextDefault {
    theme: PropTypes.Color
    toogleTheme: (theme: PropTypes.Color ) => void
}

const themeContextDefaultData = {
    theme: 'primary' as PropTypes.Color,
    toogleTheme: () => {}
}

export const ThemeContext = createContext<ThemeContextDefault>(themeContextDefaultData)

const ThemeContextProvider = ({children}: ThemeContextProps) => {
    const [ theme, setTheme ] = useState<PropTypes.Color>(themeContextDefaultData.theme)

    const toogleTheme =  (theme: PropTypes.Color) => setTheme(theme)

    const themeContextDynamicData = {
        theme,
        toogleTheme
    }
    return (
        <ThemeContext.Provider value={themeContextDynamicData} >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider