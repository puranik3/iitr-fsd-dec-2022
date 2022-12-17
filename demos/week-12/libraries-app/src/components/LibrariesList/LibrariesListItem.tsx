import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Rating from '../utils/Rating';
import ILibrary from "../../models/ILibrary";

const baseUrl = process.env.REACT_APP_BASE_URL;

interface Props {
    library: ILibrary;
}

const LibrariesListItem = ({ library }: Props) => {
    return (
        <Card>
            <Card.Img variant="top" src={baseUrl + library.imageUrl} />
            <Card.Body>
                <div className="d-flex align-items-start" style={{ gap: '20px' }}>
                    <div>
                        <Card.Title>
                            {library.name}
                        </Card.Title>
                        <div>
                            <Rating value={library.rating} numRatings={library.noOfRatings} />
                        </div>
                    </div>
                    <Link
                        to={'/libraries/' + library.id}
                        style={{ whiteSpace: 'nowrap' }}
                        className="btn btn-primary btn-sm"
                    >
                        Know more
                    </Link>
                </div>
                <Card.Text>
                    {library.location}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default LibrariesListItem;
