import { createContext, useContext } from 'react';
import IWorkshop from '../models/IWorkshop';

type WorkshopsContextType = {
    workshops: IWorkshop[],
    addWorkshop: Function,
    deleteWorkshopWithId: Function,
}

// generates 2 components
    // - WorkshopsContext.Provider
    // - WorkshopsContext.Consumer
const WorkshopsContext = createContext<WorkshopsContextType>({
    workshops: [] as IWorkshop[],
    addWorkshop: () => {},
    deleteWorkshopWithId: () => {}
});

// Any functions we write that use any of React's built-in hooks is called a custom hook
// useWorkshops() is a custom hook
export const useWorkshops = () => useContext( WorkshopsContext );

export default WorkshopsContext;