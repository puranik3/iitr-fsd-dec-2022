import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <>
            <h1>
                <FontAwesomeIcon icon={faBook} style={{ fontSize: '0.9em', marginRight: '10px' }} />
                Libraries App
            </h1>
            <hr />
            <p>
                This website accumulates the libraries in India and some of the popular genres of books they have. The details come from a json server and the website uses this data. We can also update the data in the server which is not covered in this app.
            </p>
        </>
    )
};

export default Home;