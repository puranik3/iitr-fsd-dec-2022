import axios from 'axios';
import IGenre from '../models/IGenre';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const getGenresForLibrary = async ( id : number | string ) => {
    const response = await axios.get( `${apiBaseUrl}/libraries/${id}/genres` );
    return response.data as IGenre[];
};


export {
    getGenresForLibrary
};