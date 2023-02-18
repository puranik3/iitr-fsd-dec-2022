import { Row, Col, Image } from 'react-bootstrap';
import IGenre from '../../../../models/IGenre';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

type Props = {
    genre: IGenre
}

const LibraryListItem = ( { genre } : Props ) => {
    return (
        <Row>
            <Col xs={3}>
                <Image 
                    src={`${apiBaseUrl}/${genre.imageUrl}`}
                    alt={genre.name}
                    fluid
                />
            </Col>
            <Col xs={9}>
                <h3>{genre.name}</h3>
                <p>
                    {genre.description}
                </p>
            </Col>
        </Row>
    );
};

export default LibraryListItem;
