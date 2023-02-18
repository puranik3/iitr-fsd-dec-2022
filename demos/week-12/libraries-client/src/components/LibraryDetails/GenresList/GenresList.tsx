import { useState, useEffect } from 'react';
import { Spinner, Alert, Row, Col, ListGroup } from 'react-bootstrap';
import { getGenresForLibrary } from '../../../services/genres';
import IGenre from '../../../models/IGenre';
import GenresListItem from './GenresListItem/GenresListItem';

type Props = {
    id: number | string
}

const GenresList = ( { id } : Props ) => {
    const [ genres, setGenres ] = useState<IGenre[]>( [] );
    const [ error, setError ] = useState<null | Error>( null );
    const [ loading, setLoading ] = useState( true );

    useEffect(
        () => {
            const helper = async () => {
                try {
                    const genres = await getGenresForLibrary( id );
                    setGenres( genres );
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
        <div className="my-5">
            <h2>Famous Genres in this Library</h2>
            <hr />
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
                !loading && !error && (
                    <ListGroup>
                        {
                            genres.map(
                                genre => (
                                    <ListGroup.Item
                                        key={genre.id}
                                        className="d-flex my-3"
                                    >
                                        <GenresListItem
                                            genre={genre}
                                        />
                                    </ListGroup.Item>
                                )
                            )
                        }
                    </ListGroup>
                )
            }
        </div>
    );
}
 
export default GenresList;
