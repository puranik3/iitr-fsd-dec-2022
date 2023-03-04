import IWorkshop from "./models/IWorkshop";

type Props = {
    workshop: IWorkshop;
};

const WorkshopsListItem = ({ workshop }: Props) => {
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
                        <p className="card-text">
                            <small className="text-muted">
                                Last updated 3 mins ago
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkshopsListItem;
