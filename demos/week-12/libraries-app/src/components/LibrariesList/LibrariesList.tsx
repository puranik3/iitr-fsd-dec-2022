import { useState, useEffect } from 'react';
import { Alert, Row, Col, Spinner } from 'react-bootstrap';

import LibrariesListItem from './LibrariesListItem';

import ILibrary from '../../models/ILibrary';
import { getLibraries } from '../../services/library';

const LibrariesList = () => {
    const [ loading, setLoading ] = useState<boolean>( true );
    const [ libraries, setLibraries ] = useState<ILibrary[]>( [] );
    const [ error, setError ] = useState<Error | null>( null );

    useEffect(
        () => {
            const fetchHelper = async () => {
                try {
                    const data = await getLibraries();
                    setLibraries( data );
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
            <h1>List of Libraries</h1>
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
                libraries.length !== 0 && (
                    <Row xs={1} md={2} lg={3}>
                        {
                            libraries.map(
                                library => (
                                    <Col key={library.id} className="d-flex my-3">
                                        <LibrariesListItem library={library} />
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