import { useState, useEffect } from "react";
import IWorkshop from "./models/IWorkshop";
import WorkshopsListItem from "./WorkshopsListItem";

type Props = {
    format: "compact" | "expanded",
    x: number,
    loading: boolean,
    workshops: IWorkshop[],
    error: Error | null,
    deleteWorkshopWithId: Function
    // foo: () => boolean
};

// const WorkshopsList = ( props : Props ) => {
// console.log( props );
const WorkshopsList = ({ format, loading, workshops, error, deleteWorkshopWithId, x }: Props) => {
    // console.log( format, x );

    // to maintain user's input within the search box
    const [ searchKey, setSearchKey ] = useState( '' );
    const [ filteredWorkshops, setFilteredWorkshops ] = useState( [] as IWorkshop[] );

    const filter = () => {
        const filteredWorkshops = workshops.filter( workshop => workshop.name.includes( searchKey ) );
        setFilteredWorkshops( filteredWorkshops );
    };

    useEffect(
        filter,
        [ searchKey, workshops ]
    );

    return (
        <>
            <h2>List of workshops</h2>
            <hr />
            {
                loading ? (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )
            }
            {
                error !== null && (
                    <div className="alert alert-danger">{error.message}</div>
                )
            }
            {
                workshops.length !== 0 && (
                    <div>
                        <input
                            className="form-control my-3"
                            value={searchKey}
                            onChange={( event ) => setSearchKey( event.target.value )}
                        />
                        You are searching for: {searchKey}
                        {/* We can provide an array of array elements, and each element in the array is rendered */}
                        {
                            /*
                                Result of calling map on workshops array is...
                                [
                                    <div>Angular workshop</div>,
                                    <div>React workshop</div>,
                                    ...
                                ]
                            */
                            filteredWorkshops.map(
                                workshop => (
                                    <WorkshopsListItem
                                        key={workshop.id}
                                        workshop={workshop}
                                        deleteWorkshopWithId={deleteWorkshopWithId}
                                    />
                                )
                            )
                        }
                    </div>
                )
            }
        </>
    );
};

export default WorkshopsList;
