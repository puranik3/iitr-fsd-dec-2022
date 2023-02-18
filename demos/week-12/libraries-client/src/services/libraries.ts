import axios from 'axios';
import ILibrary from '../models/ILibrary';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const getLibraries = async () => {
    const response = await axios.get( `${apiBaseUrl}/libraries` );
    return response.data as ILibrary[];
};

const getLibraryById = async ( id: number | string ) => {
    const response = await axios.get( `${apiBaseUrl}/libraries/${id}` );
    return response.data as ILibrary;
};

export {
    getLibraries,
    getLibraryById
};