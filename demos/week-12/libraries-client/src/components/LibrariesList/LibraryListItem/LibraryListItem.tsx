import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../../shared/Rating/Rating';
import ILibrary from '../../../models/ILibrary';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

type Props = {
    library: ILibrary
}

const LibraryListItem = ( { library } : Props ) => {
    return (
        <Card className="w-100">
            <Card.Img variant="top" src={`${apiBaseUrl}/${library.imageUrl}`} alt={library.name} />
            <Card.Body>
                <Card.Title className="d-flex align-items-start">
                    <div>
                        <div>{library.name}</div>
                        <div>
                            <Rating
                                rating={library.rating}
                                numRatings={library.noOfRatings}
                            />
                        </div>
                    </div>

                    <Link
                        className="btn btn-sm btn-primary"
                        to={`/libraries/${library.id}`}
                    >
                        More
                    </Link>
                </Card.Title>
                <Card.Text>
                    <strong>Address</strong>: {library.location}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default LibraryListItem;
