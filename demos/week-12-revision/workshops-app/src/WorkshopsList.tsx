import { useState, useEffect } from "react";
import { getWorkshops } from "./services/workshops";
import IWorkshop from "./models/IWorkshop";
import WorkshopsListItem from "./WorkshopsListItem";

type Props = {
    format: "compact" | "expanded";
    x: number;
    // foo: () => boolean
};

// const WorkshopsList = ( props : Props ) => {
// console.log( props );
const WorkshopsList = ({ format, x }: Props) => {
    // console.log( format, x );

    const [loading, setLoading] = useState(true);
    const [workshops, setWorkshops] = useState([] as IWorkshop[]); // returns an array with [ value, setter ]
    const [error, setError] = useState<Error | null>(null);

    console.log(workshops);
    console.log(setWorkshops);

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
