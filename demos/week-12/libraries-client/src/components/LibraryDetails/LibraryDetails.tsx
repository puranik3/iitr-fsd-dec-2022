import { useState, useEffect } from 'react';
import { Spinner, Alert, Row, Col, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getLibraryById } from '../../services/libraries';
import ILibrary from '../../models/ILibrary';
import Rating from '../shared/Rating/Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import GenresList from './GenresList/GenresList';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

type Params = {
    id: string
}

const LibraryDetails = () => {
    const { id } = useParams<Params>(); // { id: '1' }

    const [ library, setLibrary ] = useState<null | ILibrary>( null );
    const [ error, setError ] = useState<null | Error>( null );
    const [ loading, setLoading ] = useState( true );

    useEffect(
        () => {
            const helper = async () => {
                try {
                    const library = await getLibraryById( id as string );
                    setLibrary( library );
                } catch( error ) {
                    setError( error as Error );
                } finally {
                    setLoading( false );
                }
            }
            
            helper();
        },
        [] // we need to run this effect initially, and never again on any state / prop change
    );

    return (
        <div>
            {
                loading && (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )
            }
            {
                !loading && error && (
                    <Alert variant="danger">
                        {error.message}
                    </Alert>
                )
            }
            {
                !loading && !error && library && (
                    <Row>
                        <Col xs={12}>
                            <h1>{library.name}</h1>
                        </Col>
                        <Col xs={12} lg={4}>
                            <Image
                                src={`${apiBaseUrl}/${library.imageUrl}`}
                                fluid
                            />
                        </Col>
                        <Col xs={12} lg={8}>
                            <div>
                                {library.description}
                            </div>
                            <div>
                                <Row xs={3}>
                                    <Col>
                                        <FontAwesomeIcon
                                            icon={faClock}
                                            className="me-2"
                                        />
                                        {library.opens} - {library.closes}
                                    </Col>
                                    <Col>
                                        <Rating
                                            rating={library.rating}
                                            numRatings={library.noOfRatings}
                                        />
                                    </Col>
                                </Row>
                                
                            </div>
                        </Col>
                    </Row>
                )
            }
            <GenresList id={id as string} />
        </div>
    );
}
 
export default LibraryDetails;
