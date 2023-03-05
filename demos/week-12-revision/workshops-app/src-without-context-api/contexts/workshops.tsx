import { createContext } from 'react';
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

export default WorkshopsContext;