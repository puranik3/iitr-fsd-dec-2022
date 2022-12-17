import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Alert, Image, Row, Col, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import ILibrary from '../../models/ILibrary';
import { getLibraryById } from '../../services/library';
import Rating from '../utils/Rating';
import LibraryGenres from './LibraryGenres';

const baseUrl = process.env.REACT_APP_BASE_URL;

interface RouteParams {
    id: string
}

const LibraryDetails = () => {
    const { id } = useParams<RouteParams>(); // { id: '1' }

    const [ loading, setLoading ] = useState<boolean>( true );
    const [ library, setLibrary ] = useState<ILibrary | null>( null );
    const [ error, setError ] = useState<Error | null>( null );

    useEffect(
        () => {
            const fetchHelper = async () => {
                try {
                    const data = await getLibraryById( id );
                    setLibrary( data );
                } catch( error ) {
                    setError( error as Error );
                } finally {
                    setLoading( false );
                }
            }

            fetchHelper();
        },
        []
    );

    return (
        <>
            {
                loading && (
                    <div className="text-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Fetch details of the library...</span>
                        </Spinner>
                    </div>
                )
            }
            {
                error && (
                    <Alert variant="danger">{error.message}</Alert>
                )
            }
            {
                library && (
                    <>
                        <h1 className="mb-3">{library.name}</h1>
                        <Row>
                            <Col xs={12} lg={4}>
                                <Image src={baseUrl + library.imageUrl} alt={library.name} fluid />
                            </Col>
                            <Col xs={12} lg={8}>
                                {library.description}
                                <Row xs={2} className="my-3">
                                    <Col>
                                        <FontAwesomeIcon icon={faClock} className="me-2" />
                                        {library.opens} - {library.closes}
                                    </Col>
                                    <Col>
                                        <Rating value={library.rating} numRatings={library.noOfRatings} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <div className="my-4">
                            <LibraryGenres id={library.id} />
                        </div>
                    </>
                )
            }
        </>
    );
}
 
export default LibraryDetails;