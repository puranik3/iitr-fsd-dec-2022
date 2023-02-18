import { useState, useEffect } from 'react';
import { Spinner, Alert, Row, Col } from 'react-bootstrap';
import { getLibraries } from '../../services/libraries';
import ILibrary from '../../models/ILibrary';
import LibraryListItem from './LibraryListItem/LibraryListItem';

const LibrariesList = () => {
    const [ libraries, setLibraries ] = useState<ILibrary[]>( [] );
    const [ error, setError ] = useState<null | Error>( null );
    const [ loading, setLoading ] = useState( true );

    useEffect(
        () => {
            const helper = async () => {
                try {
                    const libraries = await getLibraries();
                    setLibraries( libraries );
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
                !loading && !error && (
                    <Row xs={1} lg={3}>
                        {
                            libraries.map(
                                library => (
                                    <Col
                                        key={library.id}
                                        className="d-flex my-3"
                                    >
                                        <LibraryListItem
                                            library={library}
                                        />
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
 
export default LibrariesList;
