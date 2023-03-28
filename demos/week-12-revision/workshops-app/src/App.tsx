import { useState, useEffect } from 'react';
import WorkshopsList from "./WorkshopsList";
import AddEditWorkshop from "./AddEditWorkshop";
import IWorkshop from './models/IWorkshop';
import { getWorkshops } from "./services/workshops";
import WorkshopsContext, { WorkshopsContextType } from './contexts/workshops';

const App = () => {
    const format ="compact";

    const [loading, setLoading] = useState(true);
    const [workshops, setWorkshops] = useState([] as IWorkshop[]); // returns an array with [ value, setter ]
    const [error, setError] = useState<Error | null>(null);

    const [ workshopBeingEdited, setWorkshopBeingEdited ] = useState<IWorkshop | null>( null )

    // console.log(workshops);
    // console.log(setWorkshops);

    // side-effect (effect) -> ANY work (not only fetching data) that is not part of generating the UI
    useEffect(
        () => {
            // we want to fetch data (side-effect)
            getWorkshops()
                .then((data) => {
                    setWorkshops(data);
                })
                .catch((error : Error) => {
                    setError(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        },
        [] // run this effect only once (when the component loads)
    );

    const addWorkshop = ( workshop : IWorkshop ) => {
        setWorkshops([
            workshop,
            ...workshops,
        ]);
    };

    const deleteWorkshopWithId = ( id : number ) => {
        const remainingWorkshops = workshops.filter( w => w.id !== id );
        setWorkshops( remainingWorkshops );
    };
    
    const updateWorkshopWithId = ( id : number, updatedWorkshop : IWorkshop ) => {
        const updatedWorkshops = workshops.map( w => w.id !== id ? w : updatedWorkshop );
        setWorkshops( updatedWorkshops );
    };

    const value : WorkshopsContextType = {
        workshops,
        addWorkshop,
        deleteWorkshopWithId,
        workshopBeingEdited,
        setWorkshopBeingEdited,
        updateWorkshopWithId
    };
    
    // React element (internally an object that represents the UI)
    // JSX is convenient way to create React element
    const el = (
        <WorkshopsContext.Provider value={value}>
            <div className="container my-4">
                <h1>Workshops App</h1>
                <hr />
                {/*
                    props -> {
                        format: 'compact',
                        x: 100
                    }
                */}
                <div className="row">
                    <div className="col-12 col-md-8">
                        <WorkshopsList
                            loading={loading}
                            error={error}
                            format={format}
                            x={100}
                            // foo={() => { return true; }}
                        />
                    </div>
                    <div className="col-12 col-md-4">
                        <AddEditWorkshop />
                    </div>
                </div>
            </div>
        </WorkshopsContext.Provider>
    );

    // console.log(el);
    
    return el;
};

export default App;
