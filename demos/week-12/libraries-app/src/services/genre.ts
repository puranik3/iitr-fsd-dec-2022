import axios from 'axios';
import IGenre from '../models/IGenre';

const baseUrl = process.env.REACT_APP_BASE_URL;

const getGenresForLibraryWithId = async ( id : string | number ) => {
    const response = await axios.get( `${baseUrl}/libraries/${id}/genres` );
    return response.data as IGenre[];
};

export {
    getGenresForLibraryWithId
};