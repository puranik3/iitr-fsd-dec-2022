import { useState, useEffect } from 'react';
import { Spinner, Alert, Row, Col, Image } from 'react-bootstrap';
import IGenre from '../../models/IGenre';
import { getGenresForLibraryWithId } from '../../services/genre';

const baseUrl = process.env.REACT_APP_BASE_URL;

interface Props {
    id: number | string
}

const LibraryGenres = ( { id } : Props ) => {
    const [ loading, setLoading ] = useState<boolean>( true );
    const [ genres, setGenres ] = useState<IGenre[]>( [] );
    const [ error, setError ] = useState<Error | null>( null );

    useEffect(
        () => {
            const fetchHelper = async () => {
                try {
                    const data = await getGenresForLibraryWithId( id );
                    setGenres( data );
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
        <div>
            <h1>List of Genres</h1>
            <hr />
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
                genres.length !== 0 && (
                    <Row xs={1}>
                        {
                            genres.map(
                                genre => (
                                    <Col key={genre.id} className="my-3">
                                        <Row>
                                            <Col xs={3}>
                                                <Image src={baseUrl + genre.imageUrl} alt={genre.name} fluid />
                                            </Col>
                                            <Col xs={9}>
                                                {genre.description}
                                            </Col>
                                        </Row>
                                    </Col>
                                )
                            )
                        }
                    </Row>
                )
            }
        </div>
    );
}
 
export default LibraryGenres;