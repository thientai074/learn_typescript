import {createContext} from 'react'


interface ProgressContextProviderProps {
    children: any
}

interface ProgressContextDefault {
    lastTime: string
    status: string
}

const progressDefault = {
    lastTime: '67/99',
    status: 'In progress'
}

export const  ProgressContext = createContext<ProgressContextDefault>(progressDefault)

const ProgressContextProvider = ({children}: ProgressContextProviderProps) => {
   
    return (
        <ProgressContext.Provider value={progressDefault} >
            {children}
        </ProgressContext.Provider>
    )
}

export default ProgressContextProvider