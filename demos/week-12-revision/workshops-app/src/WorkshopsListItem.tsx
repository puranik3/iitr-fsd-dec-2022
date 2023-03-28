import { useWorkshops } from "./contexts/workshops";
import IWorkshop from "./models/IWorkshop";
import { deleteWorkshop } from "./services/workshops";

type Props = {
    workshop: IWorkshop,
};

const WorkshopsListItem = ({ workshop }: Props) => {
    const { deleteWorkshopWithId, setWorkshopBeingEdited } = useWorkshops();

    const removeWorkshop = async () => {
        try {
            await deleteWorkshop( workshop.id );
            alert( `The workshop "${workshop.name}" has been deleted` );
            // delete this workshop from th workshops state
            deleteWorkshopWithId( workshop.id );
        } catch( error ) {
            alert( ( error as Error ).message );
        }
    };

    return (
        <div className="card mb-3 p-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={workshop.imageUrl}
                        className="img-fluid rounded-start"
                        alt={workshop.name}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{workshop.name}</h5>
                        <div className="card-text" dangerouslySetInnerHTML={{ __html: workshop.description }}></div>
                        <p className="card-text mt-4">
                            <button className="btn btn-primary btn-sm me-2" onClick={() => setWorkshopBeingEdited( workshop )}>Edit</button>
                            <button className="btn btn-danger btn-sm" onClick={removeWorkshop}>Delete</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkshopsListItem;
